'use client';

import { useUser } from '@clerk/nextjs';

import PostForm from './components/PostForm';

import { PageLayout } from '@/components/PageLayout';

export default function AdminPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

  const isAdmin = process.env.NEXT_PUBLIC_ADMIN_ID === user.id;

  if (!isAdmin) {
    return <h1>Not authorized!</h1>;
  }

  return (
    <PageLayout className="max-w-screen-lg">
      <PostForm />
    </PageLayout>
  );
}
