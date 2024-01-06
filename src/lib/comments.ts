import { z } from 'zod';

import prisma from './db';

import type { Comment } from '@/models';
import { commentSchema } from '@/models';

export async function getComments(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        comments: true,
      },
    });

    if (!post) {
      console.error(`Post with slug ${slug} not found.`);
      return null;
    }

    const comments: Comment[] = z.array(commentSchema).parse(post.comments);

    return comments;
  } catch (error) {
    console.error('Error fetching comments', error);
  }
}
