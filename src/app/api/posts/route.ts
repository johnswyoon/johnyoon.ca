import type { NextRequest } from 'next/server';
import slugify from 'slugify';

import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { tags, ...postData } = data;

  try {
    // Create tags if they do not exist
    const createdTags = await Promise.all(
      tags.map(async (tagName: string) => {
        const existingTag = await prisma.tag.findUnique({
          where: { name: tagName },
        });

        if (existingTag) existingTag;
        return prisma.tag.create({
          data: {
            name: tagName,
            slug: slugify(tagName),
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

    return new Response(`Successfully created post: ${post.title}`, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return new Response(`Unabled to create post...`, { status: 500 });
  }
}
