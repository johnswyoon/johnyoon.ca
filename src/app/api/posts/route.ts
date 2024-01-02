import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        tags: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Unable to get posts' },
      { status: 400 },
    );
  }
}
