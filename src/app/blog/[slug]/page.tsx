import Image from 'next/image';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { MessageCircleMore } from '../components/IconSVG';
import Tags from '../components/Tags';

import { CommentSection } from '@/app/blog/components/Comment/Comments';
import { PageLayout } from '@/components/PageLayout';
import { getPost } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return <p className="mt-10 text-center">Could not find blog post...</p>; // TODO: set an empty blog page
  }

  const { content, createdAt, title, tags, thumbnail, comments } = post;

  return (
    <PageLayout className="max-w-screen-md">
      <div className="mb-6 flex flex-col items-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <Image
          src={thumbnail as string}
          className="mb-2 mt-4 rounded-2xl"
          style={{ boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)' }}
          width={600}
          height={450}
          alt="thumbnail"
        />
        <div className="flex w-full justify-between">
          <Tags tags={tags ?? []} />
          <div className="flex gap-4 px-4">
            <p>{formatDate(createdAt as Date)}</p>
            <div className="flex items-center">
              <MessageCircleMore />
              <p className="ml-1">{comments?.length ?? 0}</p>
            </div>
          </div>
        </div>
      </div>
      <Markdown
        className="mb-4"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </Markdown>
      <CommentSection comments={comments ?? []} slug={slug} />
    </PageLayout>
  );
}
