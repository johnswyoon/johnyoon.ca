import { NextResponse } from 'next/server';

import prisma from '@/lib/db';

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: 'johnnyoonn@gmail.com',
      },
    });
    return NextResponse.json({
      status: 200,
      message: { user },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: { error: 'failed to get user' },
    });
  }
}
