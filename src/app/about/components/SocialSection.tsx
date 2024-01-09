import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type SocialSectionProps = {
  icon: ReactNode;
  link: string;
  name: string;
};
export function SocialSection() {
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

function SocialRow({ icon, link, name }: SocialSectionProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="mb-3 flex items-center justify-center">
        {icon}
        <p className="ml-2 text-xl font-light tracking-wider">{name}</p>
      </div>
    </Link>
  );
}
