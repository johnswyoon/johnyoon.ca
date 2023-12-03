import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";
import { Linkedin, Github, Mail } from "lucide-react";
import profile from "../../../public/profile.jpg";
import Paragraph from "@/components/Paragraph";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function About() {
  const socials: SocialRowProps[] = [
    {
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/johnswyoon/",
      title: "Linkedin",
      color: "bg-sky-700",
    },
    {
      icon: <Github size={20} />,
      link: "https://github.com/johnswyoon",
      title: "Github",
      color: "",
    },
    {
      icon: <Mail size={20} />,
      link: "mailto:johnswyoon@gmail.com",
      title: "Email",
      color: "bg-red-700",
    },
  ];

  return (
    <PageLayout className="max-w-screen-lg">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Image
            src={profile}
            alt="John's Profile Picture"
            className="mb-4 rounded-full"
          />
          <div>
            <h3 className="text-xl font-medium text-gray-800">
              Connect with me
            </h3>

            {socials.map((social) => (
              <SocialRow
                icon={social.icon}
                link={social.link}
                title={social.title}
                color={social.color}
              />
            ))}
          </div>
        </div>
        <div className="col-span-3 ml-6 mt-8">
          <h1 className="mb-4 text-5xl font-bold text-gray-800">
            Hi, I'm John
          </h1>
          <IntroParagraph />
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

type SocialRowProps = {
  icon: ReactNode;
  link: string;
  title: string;
  color: string;
};
function SocialRow({ icon, link, title, color }: SocialRowProps) {
  return (
    <Button className={cn("my-0.5 h-8 w-full rounded-full", color)} asChild>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2">
          {icon}
          <p>{title}</p>
        </div>
      </Link>
    </Button>
  );
}
