import Image from 'next/image';
import Link from 'next/link';

import Tags from './Tags';

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
      <div className="flex flex-col">
        <Image
          src={thumbnail as string}
          className="mb-3 rounded-2xl object-cover"
          style={{
            boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
            minHeight: '225px',
          }}
          alt={`${title} thumbnail`}
          width={300}
          height={225}
        />
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <div className="flex justify-between">
          <Tags tags={tags ?? []} />
          <p>{formatDate(createdAt as Date)}</p>
        </div>
      </div>
    </Link>
  );
}
