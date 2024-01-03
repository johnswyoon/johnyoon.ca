import { auth } from '@clerk/nextjs';
import { Prisma } from '@prisma/client';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import slugify from 'slugify';

import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  const { userId } = auth();
  if (userId !== process.env.NEXT_PUBLIC_ADMIN_ID) {
    return NextResponse.json({ message: 'Access Forbidden' }, { status: 403 });
  }

  const data = await req.json();
  const { tags, ...postData } = data;

  try {
    // Create tags if they do not exist
    const createdTags = await Promise.all(
      tags.map(async (tagName: string) => {
        const existingTag = await prisma.tag.findUnique({
          where: { name: tagName },
        });

        if (existingTag) {
          return existingTag;
        }
        return prisma.tag.create({
          data: {
            name: tagName,
            slug: slugify(tagName).toLowerCase(),
          },
        });
      }),
    );

    // Create post with associated tags
    const post = await prisma.post.create({
      data: {
        ...postData,
        tags: {
          connect: createdTags.map((tag) => ({ id: tag.id })),
        },
      },
    });

    console.log(`Post created: ${post.title}`);

    return NextResponse.json({
      message: `Successfully created post: ${post.title}`,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002' && error?.meta?.modelName === 'Post') {
        return NextResponse.json(
          {
            code: 'P2002-POST',
            title: 'Unable to submit post',
            description: 'Post name already exist',
          },
          { status: 400 },
        );
      }
    }

    return NextResponse.json(
      { message: 'Unabled to create post...' },
      { status: 400 },
    );
  }
}
