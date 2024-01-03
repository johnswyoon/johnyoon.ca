import { CommentForm } from './commentForm';

export function CommentSection({ slug }: { slug: string }) {
  return (
    <div>
      <h1 className="text-xl font-medium">Comments</h1>
      <CommentForm slug={slug} />
      <div>show all comments</div>
    </div>
  );
}
