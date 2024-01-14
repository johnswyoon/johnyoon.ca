import fs from 'fs';
import path from 'path';

import PhotoGrid from '../components/PhotoGrid';

import { PageLayout } from '@/components/PageLayout';
import { capitalizeString } from '@/lib/utils';
import { type Photo } from '@/models';

export default function Album({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const photoDir = path.join(process.cwd(), `public/photos/${slug}`);

  const getPhotos = () => {
    try {
      const photos = fs.readdirSync(photoDir);
      const formattedPhotos: Photo[] = photos.map((photo) => {
        return {
          alt: photo,
          src: `/photos/${slug}/${photo}`,
        };
      });
      return formattedPhotos;
    } catch (error) {
      console.error('Error reading photo directory:', error);
      return [];
    }
  };

  const photos = getPhotos();

  return (
    <PageLayout className="max-w-screen-xl">
      <h1 className="mb-2 text-center">{capitalizeString(slug)}</h1>
      <p className="mb-8 text-center text-lg">
        This page is currently under construction... 🚧
      </p>
      <PhotoGrid images={photos} />
    </PageLayout>
  );
}
