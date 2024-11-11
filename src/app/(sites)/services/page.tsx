'use client';
import { TabsDemo } from '@/components/custom/Tabs/TabsDemo';
import DescriptionCareerDevelopment from '@/components/pages/Services/Career-Development/descriptionProgramCareer';
import DescriptionMentoring from '@/components/pages/Services/Mentoring/descriptionProgramMentoring';
import DescriptionProgramDevelopment from '@/components/pages/Services/Program-Development/descriptionProgramDevelopment';
import { Tabs } from '@/components/ui/tabs';
import DescriptionOrganization from '@/components/pages/Services/Organizational-Development/descriptionProgramOrganization';
import DescriptionMeeting from '@/components/pages/Services/Meeting-Streaming/descriptionProgramMeeting';
import { useSearchParams } from 'next/navigation';
import DescriptionProgramEventOrganizer from '@/components/pages/Services/Event-Specialist/descriptionProgramEventOrganizer';
import DetailMeeting from '@/components/pages/Services/Meeting-Streaming/detailMeeting';
import { Suspense } from 'react';

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('tab');

  const tabs = [
    {
      title: 'Event Organizer',
      value: 'event-specialist',
      content: <DescriptionProgramEventOrganizer />,
    },
    {
      title: 'Meeting and Streaming',
      value: 'meeting-streaming',
      content: <DescriptionMeeting />,
    },
    {
      title: 'Program Development',
      value: 'program-development',
      content: <DescriptionProgramDevelopment />,
    },
    // {
    // title: "Career Development",
    // value: "career-development",
    // content: <DescriptionCareerDevelopment />
    // },
    {
      title: 'Organizational Development',
      value: 'organizational-development',
      content: <DescriptionOrganization />,
    },
    {
      title: 'Mentoring',
      value: 'mentoring',
      content: <DescriptionMentoring />,
    },
  ];

  if (query === 'zoom') return <DetailMeeting />;

  return (
    <Suspense>
      <section className="h-[100rem] md:h-[50rem] [perspective:1000px] flex flex-col max-w-[90rem] mx-auto w-full items-start justify-start mt-10 mb-40">
        <Tabs tabs={tabs} contentClassName="mt-[3rem]" activeTabClassName="bg-secondary" tabClassName="bg-white text-primary gap-2" />
      </section>
    </Suspense>
  );
}
