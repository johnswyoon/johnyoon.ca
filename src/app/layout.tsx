import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NavBar } from '@/components/NavBar/NavBar';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

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
      <ClerkProvider>
        <body className={cn('h-full antialiased', inter.className)}>
          <NavBar />
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
