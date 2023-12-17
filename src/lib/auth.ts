import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import prisma from './db';

export const { handlers, auth } = NextAuth({
  providers: [GoogleProvider],
  adapter: PrismaAdapter(prisma),
});
