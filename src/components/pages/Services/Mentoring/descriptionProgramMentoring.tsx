import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import TabServices from '../tab.services';

export default function DescriptionMentoring() {
  const mentoring = [
    'Kamu bisa cerita sama mentor yang berpengalaman',
    'Kamu bisa ceritain masalah dan kendala ke mentor lalu dicari solusinya bareng-bareng',
    ' Berbagi pengalaman terkaiit dengan organisasi dan proses menjadi pemimpin',
    'Lebih mengenal bakat kepemimpinan dalam diri',
  ];
  const problem = [
    'Kurang pecaya diri terhadap kemampuan',
    'Kehilangan motivasi untuk berprestasi dan ingin memberikan manfaat',
    'Sulit buat berkembang',
    'Ingin jadi pemimpin cuman gak tau caranya gimana',
    'Ingin menjadi aktivis organisasi dan punya relasi yang luas',
  ];

  return (
    <TabServices>
      <h1 className="text-center md:text-left">Mentoring</h1>
      <section className="md:grid flex flex-col-reverse grid-rows-1 grid-flow-col gap-3">
        <section className="my-3">
          <section className="flex flex-col gap-1 font-normal bg-secondary rounded-md p-3">
            <h2 className="md:text-[24px] text-primary font-bold text-[16px]">Mentorship itu ngapain sih?</h2>
            <ul className="px-4">
              {mentoring.map((data) => (
                <li className="font-normal md:text-[18px] list-disc text-black text-[13px]" key={data}>
                  {data}
                </li>
              ))}
            </ul>
          </section>
          <section className="text-[24px] flex flex-col gap-1 font-normal bg-secondary rounded-md p-3 mt-4">
            <h2 className="md:text-[24px] text-primary font-bold text-[16px]">Masalah yang bisa ditangani:</h2>
            <ul className="px-4">
              {problem.map((data) => (
                <li className="font-normal md:text-[18px] list-disc text-black text-[13px]" key={data}>
                  {data}
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className="row-span-1 flex flex-col items-center justify-center">
          <DirectionAwareHover imageUrl={`/assets/images/eo/ldks/mentoring_2.jpg`} imageClassName="w-[90rem] h-[35rem]">
            <p className="font-bold text-xl">Mentoring Program Campus Innovate</p>
            <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
          </DirectionAwareHover>
        </section>
      </section>
    </TabServices>
  );
}
