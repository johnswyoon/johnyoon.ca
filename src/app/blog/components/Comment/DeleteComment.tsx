'use client';

import { useUser } from '@clerk/nextjs';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function DeleteComment({
  commentId,
  userId,
}: {
  commentId: string;
  userId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const { user: clerkUser } = useUser();

  const handleDelete = async () => {
    try {
      const response = await fetch('/api/comment', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentId,
        }),
      });

      if (!response.ok) {
        return toast({
          title: 'Failed to delete comment',
          variant: 'destructive',
        });
      }

      startTransition(() => {
        router.refresh();
      });

      return toast({
        title: 'Successfully deleted comment',
        variant: 'success',
      });
    } catch (error) {
      console.error('Failed to delete comment', error);
    }
  };

  if (!clerkUser || clerkUser.id !== userId) return null;

  return (
    <Button
      className={'ml-3 h-6 w-6 rounded-full p-0'}
      variant={'destructive'}
      disabled={isPending}
      onClick={handleDelete}
    >
      <Trash2 size={16} />
    </Button>
  );
}
