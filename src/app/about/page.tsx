import Link from 'next/link';

import { ProfilePicture } from './components/FramerProfilePic';
import MusicSection from './components/MusicSection';

import SocialSection from '@/app/about/components/SocialSection/SocialSection';
import { PageLayout } from '@/components/PageLayout';

// import WorkExperience from '@/app/about/components/WorkExperience';

export default function About() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 mr-0 flex flex-col items-center lg:mr-6">
          <ProfilePicture />
          <div className="flex flex-col items-center">
            <h3 className="mb-4">Connect with me</h3>
            <SocialSection />
          </div>
        </div>
        <div className="col-span-3 ml-0 mt-8 flex flex-col gap-5 lg:ml-6">
          <h1 className="mb-4">Hi, I'm John</h1>
          <IntroParagraph />
          <MusicSection />
          {/* <WorkExperience /> */}
        </div>
      </div>
    </PageLayout>
  );
}

function IntroParagraph() {
  return (
    <div>
      <p className="mb-3">
        I recently just finished my internship at{' '}
        <strong>
          <Link href="https://www.canvass.io/">Canvass AI</Link>
        </strong>{' '}
        as a software engineer! Currently, I am in my 4B term at the{' '}
        <strong>University of Waterloo</strong> studying Computer Engineering.
      </p>
      <p className="mb-3">
        I would love to connect and chat with you about any new-grad SWE
        opportunities. Connect with me on Linkedin or e-mail with the links on
        the left
      </p>
      {/* <p>
        Here is a link to my{' '}
        <Link href="/" className="text-blue-600">
          current resume
        </Link>
        .
      </p> */}
      <p className="mb-3">
        When I'm not doing anything related to engineering, you can find me
        taking photos of my friends, attempting to play guitar, or cheering for
        the Toronto Raptors!
      </p>
    </div>
  );
}
