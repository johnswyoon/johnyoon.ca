import type { WebhookEvent } from '@clerk/nextjs/server';
import { Prisma } from '@prisma/client';
import { headers } from 'next/headers';
import { Webhook } from 'svix';

import prisma from '@/lib/db';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  switch (eventType) {
    case 'user.created':
    case 'user.updated':
      const {
        email_addresses,
        primary_email_address_id,
        first_name,
        last_name,
        image_url,
      } = evt.data;
      const emailObject = email_addresses?.find((email) => {
        return email.id === primary_email_address_id;
      });

      if (!emailObject || !id) {
        return new Response('Error finding user', { status: 400 });
      }

      const userEmail = emailObject.email_address;

      try {
        await prisma.user.upsert({
          where: { email: userEmail },
          create: {
            id: id,
            name: `${first_name || ''} ${last_name || ''}`,
            email: userEmail,
            image: image_url,
          },
          update: {
            name: `${first_name || ''} ${last_name || ''}`,
            email: userEmail,
            image: image_url,
          },
        });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          console.error(`Prisma Error creating/updating user: ${e.message}`);
        }
        throw e;
      }
      console.log(`User upserted: ${userEmail}`);
      return new Response(
        `Succesfully upserted user with email: ${userEmail}`,
        {
          status: 201,
        },
      );
    case 'user.deleted':
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return new Response('Error finding user', { status: 400 });
      }

      try {
        await prisma.user.delete({
          where: { id },
        });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          console.error(`Prisma Error creating/updating user: ${e.message}`);
        }
        throw e;
      }

      console.log(`User deleted: ${user.email}`);
      return new Response(
        `Succesfully created/updated user with email: ${user.email}`,
        {
          status: 200,
        },
      );
  }
}
