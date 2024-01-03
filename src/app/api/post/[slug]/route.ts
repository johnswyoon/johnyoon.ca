import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        tags: true,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Unable to get post' },
      { status: 400 },
    );
  }
}
