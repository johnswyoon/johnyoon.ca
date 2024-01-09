import Image from 'next/image';

import { SocialSection } from '@/app/about/components/SocialSection';
import { WorkExperience } from '@/app/about/components/WorkExperience';
import { PageLayout } from '@/components/PageLayout';
import Paragraph from '@/components/Paragraph';

export default function About() {
  return (
    <PageLayout className="max-w-screen-lg">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="col-span-1 flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="John's Profile Picture"
            className="mb-4 rounded-full"
            height={250}
            width={250}
          />
          <div>
            <h3 className="text-xl font-medium text-gray-800">
              Connect with me
            </h3>
            <SocialSection />
          </div>
        </div>
        <div className="col-span-3 ml-6 mt-8">
          <h1 className="mb-4 text-5xl font-bold text-gray-800">
            Hi, I'm John
          </h1>
          <IntroParagraph />
          <WorkExperience className="mt-8" />
        </div>
      </div>
    </PageLayout>
  );
}

function IntroParagraph() {
  return (
    <div>
      <Paragraph>
        I'm entering my 4B term studying Computer Engineering at the University
        of Waterloo. Currently, I am interning at Canvass AI as a Software
        Engineer!
      </Paragraph>
      <Paragraph>
        When I'm not doing things related to engineering, you can find me taking
        photos of my friends, attempting to play guitar, or cheering for the
        Toronto Raptors!
      </Paragraph>
      <Paragraph>
        You may wonder what the "ㅅㅇ" symbols mean on the top left of my site!
        They are the Korean consonants that make up my name, 승원. My
        grandfather had chosen the meaning of my name: 勝垣 meaning victory and
        wall. Before you ask... no, I am not good at Korean.
      </Paragraph>
      <Paragraph>
        I also like to slap on my Sony XM4's and listen to music:
      </Paragraph>
    </div>
  );
}
