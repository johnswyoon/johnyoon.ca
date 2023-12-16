import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET() {
  try {
    const session = await auth();
    return NextResponse.json({
      status: 200,
      body: { ...session },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: { error: 'failed to get session' },
    });
  }
}
