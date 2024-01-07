import DeleteComment from './DeleteComment';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUser } from '@/lib/users';
import { formatDateTime, getInitials } from '@/lib/utils';
import { type Comment as CommentType } from '@/models';

export default async function Comment({
  id,
  content,
  createdAt,
  userId,
}: CommentType) {
  const commentUser = await getUser(userId);

  if (!commentUser) return null;

  return (
    <div className="grid grid-cols-12 gap-2 py-1.5 pl-2">
      <div className="col-span-1 flex items-start">
        {commentUser.image ? (
          <Avatar>
            <AvatarImage src={commentUser.image} />
            <AvatarFallback>
              {getInitials(commentUser.name) ?? '?'}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Avatar>
            <AvatarImage src="/profile-blank.jpg" />
          </Avatar>
        )}
      </div>
      <div className="col-span-11 flex flex-col ">
        <div className="flex items-center">
          <p className="mr-2 text-sm font-semibold">{commentUser.name}</p>
          <p className="text-xs">{formatDateTime(createdAt)}</p>
          <DeleteComment commentId={id} userId={userId} />
        </div>
        <p
          className="text-pretty text-sm font-normal"
          style={{ whiteSpace: 'pre-line' }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
