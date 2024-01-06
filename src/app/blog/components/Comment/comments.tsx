import { Comment } from './comment';
import { CommentForm } from './commentForm';

import { type Comment as CommentType } from '@/models';

export async function CommentSection({
  comments,
  slug,
}: {
  comments: CommentType[];
  slug: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="mb-4 text-xl font-medium">Comments</h1>
      <CommentForm slug={slug} />
      {comments.length > 0 ? (
        comments.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })
      ) : (
        <p>No comments yet...</p>
      )}
    </div>
  );
}
