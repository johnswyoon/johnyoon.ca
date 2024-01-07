import prisma from './db';

import type { User } from '@/models/users';
import { userSchema } from '@/models/users';

export async function getUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      console.error(`Could not find user with id ${userId}`);
      return null;
    }

    const validatedUser: User = userSchema.parse(user);
    return validatedUser;
  } catch (error) {
    console.error('Failed to get user', error);
  }
}
