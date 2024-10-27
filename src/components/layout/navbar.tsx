'use client';

import React, { MouseEventHandler, useState } from 'react';
import { Button } from '../ui/moving-border';
import { faThumbtack, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  // const navbarContent = ['Home', 'Layanan', 'Visi Misi', 'Portofolio', 'Tentang Kami'];
  const navbarContent = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Layanan',
      link: '/layanan',
    },
    {
      title: 'Visi Misi',
      link: '/goals',
    },
    {
      title: 'Portofolio',
      link: '/portofolio',
    },
    {
      title: 'Tentang Kami',
      link: '/about',
    },
  ];
  const [select, setSelect] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (index: number) => {
    // setSelect(index)
    switch (index) {
      case 0:
        return router.push('/home');
        break;
      case 1:
        return router.push('/layanan');
        break;
      case 2:
        return router.push('/goals');
        break;
      case 3:
        return router.push('/portofolio');
        break;
      case 4:
        return router.push('/about');
        break;
      default:
        return router.push('/');
        break;
    }
  };

  return (
    <main className="z-30">
      {/* <header className="h-[100px] bg-[#F5F5F5] flex justify-between items-center pl-[100px] pr-[20px]"> */}
      <header>
        <nav className="h-[100px] bg-[#F5F5F5] flex justify-between items-center pl-[100px] pr-[20px]">
          <main onClick={() => router.push('/home')} className="flex gap-1 items-center cursor-pointer">
            {/* <Image alt="logo" src={'/assets/logos/campusinnovate.png'} width={50} height={50} /> */}
            <h1 className="text-[24px] text-black font-bold">Campus Innovate</h1>
          </main>
          <section className="flex gap-10 items-center">
            {navbarContent.map((menu, index) => (
              <button
                onClick={() => handleSelect(index)}
                className={` ${pathname === menu.link ? 'text-secondary font-extrabold bg-primary rounded-full py-2 px-3' : 'text-primary'} text-[18px] font-normal hover:text-secondary hover:font-bold`}
                key={index}
              >
                {menu.title}
              </button>
            ))}
            {/* <button className="py-[14px] px-5 text-[18px] font-medium text-black bg-secondary rounded-lg  hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Book an Appointment
          </button> */}
            <Button
              className="py-[14px] px-5 text-[18px] bg-secondary/90 text-primary border-secondary flex gap-3"
              containerClassName="w-[17.5rem]"
              borderRadius="1.2rem"
              borderClassName="bg-yellow-900 bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
            >
              <FontAwesomeIcon icon={faUmbrellaBeach} fontSize={20} />
              Book an Appointment
            </Button>
          </section>
        </nav>
      </header>
    </main>
  );
}
