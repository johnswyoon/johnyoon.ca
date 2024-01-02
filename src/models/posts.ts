import type { ZodType } from 'zod';
import { z } from 'zod';

export const commentSchema = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.string(),
  postId: z.string(),
  userId: z.string(),
});
export type Comment = z.infer<typeof commentSchema>;

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
  published: z.boolean().default(true),
  createdAt: z.string(),
  comments: z.array(commentSchema).optional(),
  tags: z.array(tagSchema).optional(),
});
export type Post = z.infer<typeof postSchema>;
