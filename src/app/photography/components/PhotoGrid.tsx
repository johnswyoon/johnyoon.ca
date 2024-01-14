'use client';

import { ImageGallery } from 'react-image-grid-gallery';

import type { Photo } from '@/models';

export default function PhotoGrid({ images }: { images: Photo[] }) {
  return (
    <div className="w-full">
      <ImageGallery imagesInfoArray={images} columnWidth={300} gapSize={20} />
    </div>
  );
}
