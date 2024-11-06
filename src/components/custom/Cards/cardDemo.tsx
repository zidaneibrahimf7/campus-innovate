'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CardDemoProps {
  title?: string;
  description?: string;
  date?: string;
  category?: string;
  url?: string;
}

export function CardDemo({ title, description, category, date, url }: CardDemoProps) {
  // /assets/images/cda_1.png
  return (
    <section className="w-full group/card flex justify-center">
      <div
        className="cursor-pointer overflow-hidden relative card w-[400px] h-[400px] rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${url ?? '/assets/images/cda_1.JPG'})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          {/* <Image height="100" width="100" alt="Avatar" src="/manu.png" className="h-10 w-10 rounded-full border-2 object-cover" /> */}
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">{category ?? 'Manu Arora'} </p>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">{title ?? 'Author Card'} </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">{description ?? 'Card with Author avatar, complete name and time to read - most suitable for blogs.'} </p>
        </div>
      </div>
    </section>
  );
}
