import Link from 'next/link';

import { Memoji } from '@/components/HomePageComponents';
import { PageLayout } from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout className="my-auto h-full">
      <div className="flex min-h-[85vh] flex-col items-center justify-center md:min-h-[65vh] md:flex-row">
        <div className="md:mr-10">
          <h1 className=" pb-1 text-6xl font-bold md:pb-4 md:text-7xl">
            john yoon
          </h1>
          <p className="mb-6 text-xl">
            A visual collection of my creative process.
          </p>
          <Link href="/photography">
            <p className="inline-block cursor-pointer text-xl underline">
              &gt; view portfolio &lt;
            </p>
          </Link>
        </div>
        <Memoji />
      </div>
    </PageLayout>
  );
}
