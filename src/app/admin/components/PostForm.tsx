'use client';
/*
GOAL: create a form that has MD editor to submit to prisma posts
1. set up form
2. set up MD editor
3. send to prisma
*/

import 'md-editor-rt/lib/style.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { MdEditor } from 'md-editor-rt';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import TagInput from './TagInput';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
  thumbnail: z.string().optional(),
  slug: z.string(),
  published: z.boolean(),
  tags: z.array(z.string()).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function PostForm() {
  const [markdown, setMarkdown] = useState('# Heading');
  const [tags, setTags] = useState<string[]>([]);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: markdown,
      thumbnail: '', // find default 4x3 thumbnail
      slug: '',
      published: false,
      tags: [],
    },
  });

  function handleMDEditor(text: string) {
    setMarkdown(text);
    form.setValue('content', text);
  }

  function onSubmit(values: FormSchema) {
    console.log(values);
    // post with prisma
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Tags</FormLabel>
          <TagInput tags={tags} setTags={setTags} />
        </FormItem>
        <FormItem>
          <FormLabel>Content</FormLabel>
          <MdEditor
            modelValue={markdown}
            onChange={(text) => handleMDEditor(text)}
          />
        </FormItem>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
