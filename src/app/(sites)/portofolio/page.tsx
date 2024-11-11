'use client';

import { CardDemo } from '@/components/custom/Cards/cardDemo';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function PortofolioPage() {
  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  const variants = {
    hidden: { filter: 'blur(10px)', transform: 'translateY(20%)', opacity: 0 },
    visible: { filter: 'blur(0)', transform: 'translateY(0)', opacity: 1 },
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
        // className="inline-block"
        // initial="hidden"
        // whileInView="visible"
        className="md:py-[100px] md:px-[120px] py-[100px] px-[120px] w-full flex flex-col justify-center gap-[60px]"
        // transition={transition}
        // variants={variants}
      >
        <h1 className="text-secondary text-center font-bold capitalize text-[4rem]">portofolio</h1>
        <main>
          <iframe 
            src="https://drive.google.com/file/d/1VZarqbEygPugoTtnsVljyfI1wI3r0_ey/preview" 
            className="rounded-lg" 
            width="100%" 
            height="610" 
            allow="autoplay" />
             <div className="h-[25rem] max-w-[25rem] md:max-w-full flex justify-start rounded-lg flex-col antialiased dark:bg-black md:dark:bg-grid-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={testimonials} direction="right" speed="fast" className='md:max-w-[110rem] max-w-[25rem]' />
             </div>
          {/* <Modal>
            <ModalTrigger>
              <div className="h-[20rem] max-w-[22.5rem] md:max-w-full flex justify-start rounded-lg flex-col antialiased dark:bg-black md:dark:bg-grid-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" className='md:max-w-[110rem] max-w-[22.5rem]' />
              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="">
                <iframe src="https://drive.google.com/file/d/1VZarqbEygPugoTtnsVljyfI1wI3r0_ey/preview" className="rounded-lg" width="100%" height="610" allow="autoplay"></iframe>
              </ModalContent>
            </ModalBody>
          </Modal> */}
        </main>
        {/* <CardDemo key={index} url={res.url} category={res.category} date={res.date} title={res.name} description={res.description} /> */}
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
