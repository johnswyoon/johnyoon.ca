import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div
      className={cn(
        'mx-auto my-auto mt-5 h-full w-full max-w-screen-xl px-2.5 md:mt-12 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
}
