'use client';

import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import Image from 'next/image';
import TabServices from '../tab.services';

export default function DescriptionProgramDevelopment() {
  const imageUrl = '/assets/images/eo/capBuilding/development_1.jpg';
  return (
    <TabServices>
      <h4 className="text-center md:text-left">Program Development</h4>
      <section className="flex md:flex-row flex-col-reverse gap-2">
        <section className="text-[20px] font-normal justify-normal mt-3">
          Campus Innovate dapat membantu klien dalam membuat program pengembangan sumber daya manusia yang lebih unggul baik dalam bidang Leadership ataupun Entrepreneur
        </section>
        <section>
          <DirectionAwareHover imageUrl={imageUrl} imageClassName="w-[190rem] h-[35rem]">
            <p className="font-bold text-xl">Program Development Campus Innovate</p>
            <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
          </DirectionAwareHover>
        </section>
      </section>
    </TabServices>
  );
}
