import { z } from 'zod';

export const commentSchema = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.string(),
  postId: z.string(),
  userId: z.string(),
});
export type Comment = z.infer<typeof commentSchema>;

export const commentFormSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: 'Comment must contain at least 1 character.',
    })
    .max(10000, { message: 'Comment is too long.' }),
});
export type CommentForm = z.infer<typeof commentFormSchema>;
