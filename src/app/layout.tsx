import { NavBar } from '@/components/NavBar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Yoon',
  description: "John Yoon's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full">
      <body className={cn('h-full antialiased', 'inter.className')}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
