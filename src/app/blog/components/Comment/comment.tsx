import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUser } from '@/lib/users';
import { formatDateTime, getInitials } from '@/lib/utils';
import { type Comment as CommentType } from '@/models';

export async function Comment({ content, createdAt, userId }: CommentType) {
  const user = await getUser(userId);

  if (!user) return null;

  return (
    <div className="grid grid-cols-12 gap-2 py-1.5 pl-2">
      <div className="col-span-1 flex items-start">
        {user.image ? (
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>{getInitials(user.name) ?? '?'}</AvatarFallback>
          </Avatar>
        ) : (
          <Avatar>
            <AvatarImage src="/profile-blank.jpg" />
          </Avatar>
        )}
      </div>
      <div className="col-span-11 flex flex-col ">
        <div className="flex items-center">
          <p className="mr-2 text-sm font-semibold">{user.name}</p>
          <p className="text-xs">{formatDateTime(createdAt)}</p>
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
