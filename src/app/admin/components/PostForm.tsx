'use client';

import 'md-editor-rt/lib/style.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { debounce } from 'lodash';
import { MdEditor } from 'md-editor-rt';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { type UploadFileResponse } from 'uploadthing/client';

import TagInput from './TagInput';
import { UploadButton, UploadDropzone } from './UploadButton';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { type PostForm, postFormSchema } from '@/models';

/*
Component is for internal use (very messy...)
*/

export default function PostForm() {
  const [markdown, setMarkdown] = useState('# Heading');
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isThumbnail, setIsThumbnail] = useState(false);

  const { toast } = useToast();

  const form = useForm<PostForm>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: '',
      content: markdown,
      thumbnail: '', // TODO: find default 4x3 thumbnail
      slug: '',
      published: false,
      tags: [],
    },
  });
  const { register, getValues, setValue, handleSubmit, watch, reset } = form;

  const watchTitle = watch('title');

  useEffect(() => {
    const slug = slugify(getValues('title')).toLowerCase();
    setValue('slug', slug);
  }, [getValues, setValue, watchTitle]);

  useEffect(() => {
    setValue('tags', tags);
  }, [tags, form, setValue]);

  const handleDebounce = debounce((text: string) => {
    setMarkdown(text);
    setValue('content', text);
  }, 1000);

  function handleMDEditor(text: string) {
    handleDebounce(text);
  }

  function checkEnterKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter') e.preventDefault();
  }

  function handleUploadThumbnail(res: UploadFileResponse<string>[]) {
    const thumbnailUrl = res[0].url;
    setValue('thumbnail', thumbnailUrl);
    setIsThumbnail(true);
  }

  function resetForm() {
    reset();
    setImageUrls([]);
    setMarkdown('# Heading');
    setIsThumbnail(false);
    setTags([]);
  }

  async function onSubmit(formData: PostForm) {
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.code === 'P2002-POST') {
          resetForm();
          return toast({
            title: errorData.title,
            description: errorData.description,
            variant: 'destructive',
          });
        }
      }

      toast({
        title: 'Post has been submitted succesfully',
        variant: 'success',
      });
      resetForm();
    } catch (e) {
      toast({
        title: 'Failed to submit post',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => checkEnterKey(e)}
        className="mb-2 flex flex-col space-y-8"
      >
        <FormItem>
          <FormLabel>Post Title</FormLabel>
          <FormControl>
            <Input placeholder="Title" {...register('title')} />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Upload thumbnail</FormLabel>
          {isThumbnail ? (
            <Image
              src={getValues('thumbnail') as string}
              alt="thumbnail"
              width={200}
              height={150}
            />
          ) : (
            <UploadButton
              endpoint="thumbnailUploader"
              onClientUploadComplete={(res) => handleUploadThumbnail(res)}
              onUploadError={(error: Error) => {
                alert(`ERROR: ${error}`);
              }}
            />
          )}
        </FormItem>
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
        <FormItem>
          <FormLabel>Upload images</FormLabel>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const urls = res.map((img) => img.url);
              setImageUrls(urls);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR: ${error}`);
            }}
          />
          {imageUrls.length > 0 ? (
            <ul className="list-none">
              {imageUrls.map((img, index) => (
                <li key={index}>
                  <span>
                    <Image src={img} width={100} height={75} alt={img} />
                    <p className="text-blue-500">{img}</p>
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </FormItem>
        <Button className=" bg-cyan-900" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
