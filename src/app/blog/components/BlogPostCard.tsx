import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '../../../components/ui/badge';

import { formatDate } from '@/lib/utils';
import type { Post } from '@/models';

export default function BlogPostCard({
  createdAt,
  slug,
  tags,
  title,
  thumbnail,
}: Post) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex max-w-sm flex-col">
        <Image
          src={thumbnail as string}
          className="mb-3 rounded-2xl"
          alt={`${title} thumbnail`}
          width={600}
          height={400}
        />
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <div className="flex justify-between">
          {tags && (
            <div className="flex gap-2">
              {tags.map((tag) => (
                <Badge key={tag.id}>{tag.name}</Badge>
              ))}
            </div>
          )}
          <p>{formatDate(createdAt as Date)}</p>
        </div>
      </div>
    </Link>
  );
}
