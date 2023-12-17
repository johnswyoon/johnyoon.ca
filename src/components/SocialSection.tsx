import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Button } from './ui/button';

import { cn } from '@/lib/utils';

export type SocialSectionProps = {
  icon: ReactNode;
  link: string;
  title: string;
  color: string;
};
export function SocialSection() {
  const socials: SocialSectionProps[] = [
    {
      icon: <Linkedin size={20} />,
      link: 'https://www.linkedin.com/in/johnswyoon/',
      title: 'Linkedin',
      color: 'bg-sky-700',
    },
    {
      icon: <Github size={20} />,
      link: 'https://github.com/johnswyoon',
      title: 'Github',
      color: '',
    },
    {
      icon: <Mail size={20} />,
      link: 'mailto:johnswyoon@gmail.com',
      title: 'Email',
      color: 'bg-red-700',
    },
  ];

  return (
    <div>
      {socials.map((social) => {
        const { icon, link, title, color } = social;
        return (
          <SocialRow
            icon={icon}
            link={link}
            title={title}
            color={color}
            key={title}
          />
        );
      })}
    </div>
  );
}

function SocialRow({ icon, link, title, color }: SocialSectionProps) {
  return (
    <Button className={cn('my-0.5 h-8 w-full rounded-full', color)} asChild>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2">{icon}</div>
        <p>{title}</p>
      </Link>
    </Button>
  );
}
