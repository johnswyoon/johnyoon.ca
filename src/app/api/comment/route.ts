import { auth } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function DELETE(req: NextRequest) {
  try {
    const data = await req.json();
    const { commentId } = data;

    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }

    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      return NextResponse.json(
        { message: 'Comment not found' },
        { status: 400 },
      );
    }

    if (comment.userId !== userId) {
      return NextResponse.json(
        { message: 'User does not have permissions to delete comment' },
        { status: 400 },
      );
    }

    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });

    return NextResponse.json('Comment successfully deleted!', { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Unable to delete comment' },
      { status: 400 },
    );
  }
}
