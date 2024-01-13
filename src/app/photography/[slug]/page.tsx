import { PageLayout } from '@/components/PageLayout';

export default async function Album({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <PageLayout className="max-w-screen-md">
      <h1>{slug}</h1>
    </PageLayout>
  );
}
