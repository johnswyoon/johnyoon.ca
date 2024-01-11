import BlogPostCard from '@/app/blog/components/BlogPostCard';
import { PageLayout } from '@/components/PageLayout';
import { getPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <PageLayout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-medium">Blogaz</h1>
        {posts && posts.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              if (!post) return;
              return <BlogPostCard key={post.id} {...post} />;
            })}
          </div>
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </PageLayout>
  );
}
