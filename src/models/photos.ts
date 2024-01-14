import { z } from 'zod';

// For React Grid
// TODO: update for DB and Prisma
export const photoSchema = z.object({
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
  src: z.string().min(1),
});

export type Photo = z.infer<typeof photoSchema>;
