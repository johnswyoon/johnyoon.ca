import { Github, Instagram, Linkedin } from 'lucide-react';
import type { ReactNode } from 'react';

import SocialRow from './SocialRow';

export type SocialSectionProps = {
  icon: ReactNode;
  link: string;
  name: string;
};
export default function SocialSection() {
  const socials: SocialSectionProps[] = [
    {
      icon: <Linkedin size={30} />,
      link: 'https://www.linkedin.com/in/johnswyoon/',
      name: 'johnswyoon',
    },
    {
      icon: <Github size={30} />,
      link: 'https://github.com/johnswyoon',
      name: 'johnswyoon',
    },
    {
      icon: <Instagram size={30} />,
      link: 'https://www.instagram.com/aycejohn',
      name: 'johnswyoon',
    },
    {
      icon: <></>,
      link: 'mailto:johnswyoon@gmail.com',
      name: 'johnswyoon@gmail.com',
    },
  ];

  return (
    <div>
      {socials.map((social, index) => {
        return <SocialRow key={index} {...social} />;
      })}
    </div>
  );
}
