'use client';

import Image from 'next/image';
import TabServices from '../tab.services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { Meteors } from '@/components/ui/meteors';
import { Button } from '@/components/ui/moving-border';

export default function DescriptionMeeting() {
  const data = [
    { title: 'Zoom Meeting (1 Kamera)', price: 'Rp. 3.600.000' },
    { title: 'Zoom Meeting (2 Kamera)', price: 'Rp. 4.600.000' },
    { title: 'Zoom Meeting (3 Kamera)', price: 'Rp. 5.600.000' },
  ];
  const router = useRouter();

  return (
    <TabServices>
      <h1 className="text-center md:text-left">Meeting and Streaming</h1>
      <section className="flex md:flex-row flex-col gap-4 *:w-full md:*:w-1/3">
        {data.map(
          (data, index) => (
            <article key={index} className="">
              <section className="w-full relative">
                <section className="absolute inset-0 p-5 py-10 justify-between flex flex-col gap-8 rounded-lg h-full w-full bg-gradient-to-r from-primary to-secondary transform scale-[0.80]" />
                <section className="relative flex flex-col gap-1 items-center shadow-xl bg-primary border border-gray-800 px-4 py-8 md:h-[30rem] h-[20rem] overflow-hidden rounded-2xl flex flex-col justify-between items-start">
                  <FontAwesomeIcon className="h-[100px]" icon={faVideo} />
                  <h1 className="text-[20px]">{data.title}</h1>
                  <Meteors number={30} />
                  <Button onClick={() => router.push(`/services?tab=zoom`)}>Learn More</Button>
                </section>
              </section>
            </article>
          )
        )}
      </section>
    </TabServices>
  );
}
