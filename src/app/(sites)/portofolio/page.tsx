'use client';

import PaginationControl from '@/components/custom/Pagination/PaginationControl';
import VideoPagination from '@/components/custom/Pagination/VideoPagination';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function PortofolioPage() {
  const data = [
    {
      url: '/assets/images/cda_1.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Baris Berbaris',
      description: 'Derap langkah nan gagah perkasa. Seirama dalam satu suara',
    },
    {
      url: '/assets/images/klhk_2.jpg',
      category: 'KLHK',
      date: 'July 22nd, 2023',
      name: 'big W',
      description: 'Jangan lupa berpose.',
    },
    {
      url: '/assets/images/cda_4.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Abadikan momen',
      description: 'Kelak akan terkenang sepanjang masa',
    },
    {
      url: '/assets/images/cda_5.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Keep Smile',
      description: 'Senyum itu ibadah.',
    },
    {
      url: '/assets/images/cda_6.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Teamwork',
      description: 'Kerja sama untuk menyelesaikan masalah.',
    },
    {
      url: '/assets/images/cda_3.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Pose',
      description: 'Kasih gaya terbaikmu.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Acara Build Up kali ini benar-benar benar seru banget! Kami dari kelompok WMK 46 berhasil menang banyak games yang menantang dan seru. Salah satu yang paling berkesan adalah permainan mindahin air ke botol dan permainan tutup mata. Kami semua tertawa, bekerja sama, dan bahkan berhasil jadi juara di permainan air dan tutup mata ambil bola, keren banget!',
      name: 'Build Up WMK',
      title: 'Kelompok WMK 46 - Build Up WMK',
    },
    {
      quote:
        'Intinya, hari ini itu permainan yang diadakan Campus Innovate itu keren, seru, menarik, dan bikin lepas juga. Dari permainan-permainan itu juga bikin ketawa bareng! Selain itu, tim nya juga cukup seru, tetap semangat dan lanjut terus!',
      name: 'Capacity Building KLHK',
      title: 'Peserta Capacity Building KLHK',
    },
  ];

  return (
    <main>
      <section
        className="md:py-[100px] md:px-[120px] py-[50px] px-[50px] w-full flex flex-col justify-center gap-[60px]"
      >
        <h1 className="text-secondary text-center font-bold capitalize text-[4rem]">portofolio</h1>
        <main>
            <VideoPagination />
             <div className="h-[25rem] max-w-[25rem] md:max-w-full flex justify-start rounded-lg flex-col antialiased dark:bg-black md:dark:bg-grid-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={testimonials} direction="right" speed="fast" className='md:max-w-[110rem] max-w-[25rem]' />
             </div>
        </main>
        <main className="grid grid-cols gap-[24px]">
          {data.map((res, index) => (
            <DirectionAwareHover imageUrl={res.url} imageClassName="w-full h-[25rem]">
              <p className="font-bold text-xl">
                {res.name} - {res.category}
              </p>
              <p className="font-normal text-sm">
                {res.date} - {res.description}
              </p>
            </DirectionAwareHover>
          ))}
        </main>
      </section>
    </main>
  );
}
