'use client'

import { CardDemo } from '@/components/custom/Cards/cardDemo';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PortofolioPage() {
  const transition = { duration: 1, ease: [.25,.1,.25,1] };
  const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };


  const data = [
    {
      url: '/assets/images/cda_1.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Baris Berbaris',
      description: 'Derap langkah nan gagah perkasa. Seirama dalam satu suara',
    },
    {
      url: '/assets/images/cda_3.JPG',
      category: 'CDA IPB',
      date: 'March 02th, 2024',
      name: 'Pose',
      description: 'Kasih gaya terbaikmu.',
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
      url: '/assets/images/klhk_2.jpg',
      category: 'KLHK',
      date: 'July 22nd, 2023',
      name: 'big W',
      description: 'Jangan lupa berpose.',
    },
  ];

  const testimonials = [
  {
    quote:
     "Acara Build Up kali ini benar-benar benar seru banget! Kami dari kelompok WMK 46 berhasil menang banyak games yang menantang dan seru. Salah satu yang paling berkesan adalah permainan mindahin air ke botol dan permainan tutup mata. Kami semua tertawa, bekerja sama, dan bahkan berhasil jadi juara di permainan air dan tutup mata ambil bola, keren banget!",
    name: "Build Up WMK",
    title: "Kelompok WMK 46 - Build Up WMK",
  },
  {
    quote:
      "Intinya, hari ini itu permainan yang diadakan Campus Innovate itu keren, seru, menarik, dan bikin lepas juga. Dari permainan-permainan itu juga bikin ketawa bareng! Selain itu, tim nya juga cukup seru, tetap semangat dan lanjut terus!",
    name: "Capacity Building KLHK",
    title: "Peserta Capacity Building KLHK",
  },
];


  return (
    <main>
      <section 
        // className="inline-block" 
        // initial="hidden"
        // whileInView="visible"
        className="py-[100px] px-[120px] w-full flex flex-col justify-center gap-[60px]"
        // transition={transition} 
        // variants={variants}
      >
        <h1 className="text-secondary text-center font-bold capitalize text-[4rem]">portofolio</h1>
        <main>
            <Modal>
            <ModalTrigger>
              <div className="h-[20rem] flex justify-start rounded-lg flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="slow"
                />
              </div>  
            </ModalTrigger>
            <ModalBody>
              <ModalContent className=''>
                  <iframe className="rounded-lg" width="100%" height="610" src="/assets/images/testimoni.mp4" allow="autoplay" allowFullScreen></iframe>
              </ModalContent>
            </ModalBody>
            </Modal>
        </main>
        <main>
          {/* <iframe className="rounded-lg " width="100%" height="610" src="/assets/images/testimoni.mp4" allow="autoplay" allowFullScreen></iframe> */}
        </main>
        <main className="grid grid-cols-2 gap-[24px]">
          {data.map((res, index) => (
            <CardDemo key={index} url={res.url} category={res.category} date={res.date} title={res.name} description={res.description} />
          ))}
        </main>
      </section>
    </main>
  );
}