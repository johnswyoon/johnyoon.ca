import BlogPostCard from '@/components/BlogPostCard';
import { PageLayout } from '@/components/PageLayout';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Title Lorem Ipfffffff Hello 1',
      content: '# Title \n hello',
      thumbnail:
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',
      createdAt: new Date(),
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      id: 2,
      title: 'Title Lorem Ip 2',
      content: '# Title \n hello',
      thumbnail:
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',
      createdAt: new Date(),
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      id: 3,
      title: 'Title Lorem Ip 33456 i',
      content: '# Title \n hello',
      thumbnail:
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',
      createdAt: new Date(),
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      id: 4,
      title: 'Titlffe Lorem Ip 334',
      content: '# Title \n hello',
      thumbnail:
        'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',
      createdAt: new Date(),
      tags: ['tag1', 'tag2', 'tag3'],
    },
  ];

  return (
    <PageLayout className="my-auto h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-medium">Blogaz</h1>
        <div className="mt-10 grid grid-cols-3 gap-7">
          {posts.map((post) => {
            const { title, thumbnail, createdAt, tags } = post;
            return (
              <BlogPostCard
                key={post.id}
                title={title}
                thumbnail={thumbnail}
                createdAt={createdAt}
                tags={tags}
              />
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
