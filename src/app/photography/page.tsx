import PhotoMenu from './components/PhotoMenu';

import { PageLayout } from '@/components/PageLayout';

export default async function Photography() {
  // TODO: use data from DB
  const albums = [
    {
      name: 'portraits',
      slug: 'portraits',
    },
    {
      name: 'film',
      slug: 'film',
    },
    {
      name: 'automotive',
      slug: 'automotive',
    },
  ];

  return (
    <PageLayout>
      <h1 className="text-center text-4xl font-medium">Photography</h1>
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <div className="flex h-full flex-col items-center gap-4">
          {albums.map((album) => {
            return <PhotoMenu key={album.slug} {...album} />;
          })}
        </div>
      </div>
    </PageLayout>
  );
}
