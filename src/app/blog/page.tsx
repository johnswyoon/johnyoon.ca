import BlogPostCard from '@/app/blog/components/BlogPostCard';
import { PageLayout } from '@/components/PageLayout';
import { getPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getPosts();

  if (!posts) {
    return null;
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-medium">Blogaz</h1>
        <div className="mt-10 grid grid-cols-3 gap-7">
          {posts.map((post) => {
            if (!post) return;
            return <BlogPostCard key={post.id} {...post} />;
          })}
        </div>
      </div>
    </PageLayout>
  );
}
