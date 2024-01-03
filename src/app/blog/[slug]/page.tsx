'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { CommentSection } from '@/components/Comment/comments';
import { PageLayout } from '@/components/PageLayout';
import { type Post, postSchema } from '@/models';

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/api/post/${slug}`);
      const data = await response.json();
      const post: Post = postSchema.parse(data);
      setPost(post);
    };
    getPost();
  }, [slug]);

  if (!post) {
    return null; // TODO: set an empty blog page
  }

  return (
    <PageLayout className="h-full, my-auto max-w-screen-md">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <Image
          src={post.thumbnail as string}
          width={400}
          height={300}
          alt="thumbnail"
        />
      </div>
      <Markdown
        className="mb-4"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {post.content}
      </Markdown>
      <CommentSection slug={slug} />
    </PageLayout>
  );
}
