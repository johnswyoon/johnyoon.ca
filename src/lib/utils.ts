import { type ClassValue, clsx } from 'clsx';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
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

TimeAgo.addDefaultLocale(en);
export function getTimeAgo(date: Date) {
  const timeAgo = new TimeAgo('en-US');
  return timeAgo.format(date);
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

export function capitalizeString(word: string) {
  return word.replace(/\b\w/g, (char) => char.toUpperCase());
}
