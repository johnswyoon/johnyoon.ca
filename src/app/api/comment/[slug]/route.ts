import { auth } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const data = await req.json();
  const { content } = data;

  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        userId,
        postId: post.id,
      },
    });
    console.log(`Comment created!`);
    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Unable to get post' },
      { status: 400 },
    );
  }
}
