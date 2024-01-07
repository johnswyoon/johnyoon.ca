import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  } as const;

  return date.toLocaleDateString('en-US', options);
}

export function formatDateTime(date: Date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  } as const;

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function getInitials(name: string) {
  if (name.length > 0) {
    const nameSplit = name.split(' ');
    const initials = nameSplit
      .map((namePart) => namePart.trim())
      .filter(Boolean)
      .map((namePart) => namePart[0].toUpperCase())
      .join('');

    return initials;
  }
  return '?';
}
