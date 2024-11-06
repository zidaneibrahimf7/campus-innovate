import Image from 'next/image';
import TabServices from '../tab.services';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function DescriptionOrganization() {
  const content = [
    {
      title: 'Workshop Keorganisasian',
      description: 'Workshop yang melibatkan peserta secara aktif dalam diskusi',
    },
    {
      title: 'Seminar',
      description: 'pemberian materi secara terbuka untuk meningkatkan organization skills dan keterampilan praktis dalam berorganisasi',
    },
    {
      title: 'Konsultasi Individu',
      description: 'Sesi konsultasi individu dengan fasilitator untuk membahas tantangan organisasi yang spesifik dan memberikan saran yang personal',
    },
  ];

  return (
    <TabServices>
      <h1 className="text-center md:text-left">Organizational Development</h1>
      <section className="md:grid flex flex-col-reverse grid-rows-3 grid-flow-col gap-2">
        {content.map((data, index) => (
          <section key={index} className="flex flex-col *:normal-case gap-1 font-normal bg-secondary rounded-lg p-4">
            <h2 className="text-[24px] text-primary font-bold">{data.title}</h2>
            <p className="px-4 text-[18px] text-black">{data.description}</p>
          </section>
        ))}
        <section className="md:row-span-3 flex flex-col items-center justify-center h-full">
          <DirectionAwareHover imageUrl={`/assets/images/cda_1.JPG`} imageClassName="w-[100rem] h-[35rem]">
            <p className="font-bold text-xl">CDA IPB Campus Innovate</p>
            <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
          </DirectionAwareHover>
        </section>
      </section>
    </TabServices>
  );
}
