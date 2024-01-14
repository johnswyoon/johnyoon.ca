import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import { NavBar } from '@/components/NavBar/NavBar';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

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
        <body className={cn('h-full antialiased', nunitoSans.className)}>
          <NavBar />
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
