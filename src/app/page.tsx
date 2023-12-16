import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';

import memoji from '../../public/memoji.png';

export default function Home() {
  return (
    <PageLayout className="my-auto h-full">
      <div className="flex items-center justify-center">
        <div className="mr-10">
          <h1 className="pb-4 text-6xl font-bold">John Yoon</h1>
          <p>A visual collection of my creative process.</p>
        </div>
        <Image src={memoji} alt="John's Memoji" />
      </div>
    </PageLayout>
  );
}
