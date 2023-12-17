import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export function WorkExperience({ className }: { className?: string }) {
  const workExperience: ExperienceItemProps[] = [
    {
      company: 'Canvass AI',
      title: 'Software Engineering Intern',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec urna varius ullamcorper sed ac quam. Vestibulum euismod, tortor eu posuere blandit, purus justo condimentum justo, non ullamcorper elit arcu vel dui.',
      date: 'Sept - Dec 2023',
    },
    {
      company: 'Monogram',
      title: 'Software Engineering Intern',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec urna varius ullamcorper sed ac quam. Vestibulum euismod, tortor eu posuere blandit, purus justo condimentum justo, non ullamcorper elit arcu vel dui.',
      date: 'Jan - Apr 2023',
    },
    {
      company: 'Empire Life',
      title: 'Software Engineering Intern',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec urna varius ullamcorper sed ac quam. Vestibulum euismod, tortor eu posuere blandit, purus justo condimentum justo, non ullamcorper elit arcu vel dui.',
      date: 'Jan - Apr 2022',
    },
    {
      company: 'NASCI',
      title: 'Web Developer Intern',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec urna varius ullamcorper sed ac quam. Vestibulum euismod, tortor eu posuere blandit, purus justo condimentum justo, non ullamcorper elit arcu vel dui.',
      date: 'May - Aug 2021',
    },
    {
      company: 'EQ Bank',
      title: 'QA Analyst Intern',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec urna varius ullamcorper sed ac quam. Vestibulum euismod, tortor eu posuere blandit, purus justo condimentum justo, non ullamcorper elit arcu vel dui.',
      date: 'Jan - Apr 2020',
    },
  ];
  return (
    <div className={cn(className)}>
      <h2 className="text-xl font-semibold">Work Experience</h2>
      <Accordion type="single" collapsible>
        {workExperience.map((experience) => {
          const { company, title, description, date } = experience;
          return (
            <ExperienceItem
              company={company}
              title={title}
              description={description}
              date={date}
              key={`${company} ${title}`}
            />
          );
        })}
      </Accordion>
    </div>
  );
}

type ExperienceItemProps = {
  company: string;
  title: string;
  description: string;
  date: string;
};

function ExperienceItem({
  company,
  title,
  description,
  date,
}: ExperienceItemProps) {
  return (
    <AccordionItem value={`${company} ${title}`}>
      <AccordionTrigger className="hover:no-underline">
        <div className="grid w-full grid-cols-10 pr-6">
          <div className="col-span-3">
            <p className="text-left text-sm font-medium sm:text-base">
              {company}
            </p>
          </div>
          <div className="col-span-4">
            <p className="text-left text-sm font-normal sm:text-base">
              {title}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-right text-sm font-normal sm:text-base">
              {date}
            </p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  );
}
