'use client';

import { useEffect, useState } from 'react';

import BlogPostCard from '@/components/BlogPostCard';
import { PageLayout } from '@/components/PageLayout';
import { type Post, postSchema } from '@/models';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      const posts: Post[] = postSchema.array().parse(data);
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <PageLayout className="my-auto h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-medium">Blogaz</h1>
        <div className="mt-10 grid grid-cols-3 gap-7">
          {posts.map((post) => {
            const { id, title, thumbnail, createdAt, tags } = post;
            return (
              <BlogPostCard
                key={id}
                title={title}
                thumbnail={thumbnail as string}
                createdAt={createdAt as string}
                tags={tags ?? []}
              />
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
