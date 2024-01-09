import Image from 'next/image';

import MusicSection from './components/MusicSection';

import SocialSection from '@/app/about/components/SocialSection';
import WorkExperience from '@/app/about/components/WorkExperience';
import { PageLayout } from '@/components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 mr-6 flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="John's Profile Picture"
            className="mb-10 rounded-full"
            style={{ boxShadow: '0 0px 50px -20px rgba(0, 0, 0, 0.5)' }}
            height={250}
            width={250}
          />
          <div className="flex flex-col items-center">
            <h3 className="mb-4">Connect with me</h3>
            <SocialSection />
          </div>
        </div>
        <div className="col-span-3 ml-6 mt-8 flex flex-col gap-5">
          <h1 className="mb-4">Hi, I'm John</h1>
          <IntroParagraph />
          <MusicSection />
          <WorkExperience className="mt-8" />
        </div>
      </div>
    </PageLayout>
  );
}

function IntroParagraph() {
  return (
    <div>
      <p className="mb-3">
        I'm entering my 4B term studying Computer Engineering at the University
        of Waterloo. Currently, I am interning at Canvass AI as a Software
        Engineer!
      </p>
      <p className="mb-3">
        When I'm not doing things related to engineering, you can find me taking
        photos of my friends, attempting to play guitar, or cheering for the
        Toronto Raptors!
      </p>
      <p className="mb-3">
        You may wonder what the "ㅅㅇ" symbols mean on the top left of my site!
        They are the Korean consonants that make up my name, 승원. My
        grandfather had chosen the meaning of my name: 勝垣 meaning victory and
        wall. Before you ask... no, I am not good at Korean.
      </p>
      <p>I also like to slap on my Sony XM4's and listen to music:</p>
    </div>
  );
}
