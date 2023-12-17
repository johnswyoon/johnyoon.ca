import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={cn('mb-3 text-base text-gray-800', className)}>{children}</p>
  );
}
