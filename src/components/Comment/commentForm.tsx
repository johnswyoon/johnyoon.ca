'use client';

import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Form, FormControl, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { getInitials } from '@/lib/utils';
import { type CommentForm, commentFormSchema } from '@/models';

export function CommentForm({ slug }: { slug: string }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { toast } = useToast();

  const form = useForm<CommentForm>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      content: '',
    },
  });
  const { register, reset, handleSubmit } = form;

  async function onSubmit(formData: CommentForm) {
    try {
      const response = await fetch(`/api/comment/${slug}`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        reset();
        return toast({
          title: 'Failed to submit comment',
          variant: 'destructive',
        });
      }

      toast({
        title: 'Comment posted!',
        variant: 'success',
      });
      reset();
    } catch (e) {
      toast({
        title: 'Failed to submit comment',
        variant: 'destructive',
      });
    }
  }

  if (!isLoaded) return null;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-2 flex flex-col space-y-8"
      >
        <FormItem>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1 grid">
              {isSignedIn ? (
                <Avatar>
                  <AvatarImage src={user.imageUrl ?? ''} />
                  <AvatarFallback>
                    {getInitials(user.fullName as string) ?? '?'}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarImage src="/profile-blank.jpg" />
                </Avatar>
              )}
            </div>
            <div className="col-span-10 grid">
              <FormControl>
                <Textarea
                  className=" min-h-10 resize-none overflow-y-hidden p-3"
                  placeholder="Write a comment"
                  {...register('content')}
                />
              </FormControl>
            </div>
            <div className="col-span-1 grid">
              <Button>Submit</Button>
            </div>
          </div>
        </FormItem>
      </form>
    </Form>
  );
}
