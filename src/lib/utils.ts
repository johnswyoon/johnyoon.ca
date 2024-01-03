import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  } as const;

  return new Date(date).toLocaleDateString('en-US', options);
}
