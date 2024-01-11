import { z } from 'zod';

import { commentSchema } from './comments';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email('Not a valid email.'),
  image: z.string().optional(),
  createdAt: z.date(),
  comments: z.array(commentSchema).optional(),
});
export type User = z.infer<typeof userSchema>;
