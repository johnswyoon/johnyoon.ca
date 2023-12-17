import Image from 'next/image';

import { Badge } from './ui/badge';

import { formatDate } from '@/lib/utils';

type BlogPostCardProps = {
  title: string;
  thumbnail: string;
  createdAt: Date;
  tags?: string[];
};

export default function BlogPostCard({
  title,
  thumbnail,
  createdAt,
  tags,
}: BlogPostCardProps) {
  return (
    <div className="flex max-w-sm flex-col">
      <Image
        src={thumbnail}
        className="mb-3 rounded-2xl"
        alt={`${title} thumbnail`}
        width={600}
        height={400}
      />
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}
