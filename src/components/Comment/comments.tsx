import { CommentForm } from './commentForm';

import { getComments } from '@/lib/comments';

export async function CommentSection({ slug }: { slug: string }) {
  const comments = await getComments(slug);

  if (!comments) return null;

  return (
    <div>
      <h1 className="text-xl font-medium">Comments</h1>
      <CommentForm slug={slug} />
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })}
      </ul>
    </div>
  );
}
