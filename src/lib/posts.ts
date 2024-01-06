import { z } from 'zod';

import prisma from './db';

import type { Post } from '@/models';
import { postSchema } from '@/models';

export async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        tags: true,
      },
    });

    if (!post) {
      console.error(`Could not find post with slug ${slug}`);
      return null;
    }

    const validatedPost: Post = postSchema.parse(post);
    return validatedPost;
  } catch (error) {
    console.error('Failed to get post', error);
  }
}

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        comments: true,
        tags: true,
      },
    });

    if (!posts) {
      console.error(`Could not find any posts.`);
      return null;
    }

    const validatedPosts: Post[] = z.array(postSchema).parse(posts);
    return validatedPosts;
  } catch (error) {
    console.error('Failed to get post', error);
  }
}
