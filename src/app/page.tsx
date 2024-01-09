import Image from 'next/image';

import { PageLayout } from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout className="my-auto h-full">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:mr-10">
          <h1 className=" pb-1 text-4xl font-bold md:pb-4 md:text-6xl">
            John Yoon
          </h1>
          <p>A visual collection of my creative process.</p>
        </div>
        <Image
          src="/memoji.png"
          alt="John's Memoji"
          priority={true}
          height={400}
          width={400}
        />
      </div>
    </PageLayout>
  );
}
