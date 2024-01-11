import { Badge } from '@/components/ui/badge';
import type { Tag } from '@/models';

export default function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div>
      {tags && (
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag.id} className="h-7">
              {tag.name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
