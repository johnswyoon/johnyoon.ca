import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

import memoji from "../../public/memoji.png";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex justify-center items-center">
        <div className="mr-10">
          <h1 className="text-6xl font-bold pb-4">John Yoon</h1>
          <p>A visual collection of my creative process.</p>
        </div>
        <Image src={memoji} alt="John's Memoji" />
      </div>
    </PageLayout>
  );
}
