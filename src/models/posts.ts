import type { ZodType } from 'zod';
import { z } from 'zod';

import { commentSchema } from './comments';

// https://github.com/colinhacks/zod?tab=readme-ov-file#recursive-types
const baseTagSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});
type BaseTag = z.infer<typeof baseTagSchema>;

export const tagSchema: ZodType<BaseTag> = baseTagSchema.extend({
  posts: z.lazy(() => z.array(postSchema)).optional(),
});
export type Tag = z.infer<typeof tagSchema>;

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  thumbnail: z.string().optional(),
  slug: z.string(),
  published: z.boolean().default(true),
  createdAt: z.date(),
  comments: z.array(commentSchema).optional(),
  tags: z.array(tagSchema).optional(),
});
export type Post = z.infer<typeof postSchema>;

export const postFormSchema = z.object({
  title: z.string(),
  content: z.string(),
  thumbnail: z.string().optional(),
  slug: z.string(),
  published: z.boolean(),
  tags: z.array(z.string()).optional(),
});

export type PostForm = z.infer<typeof postFormSchema>;
