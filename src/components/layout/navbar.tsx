'use client';

import React, { MouseEventHandler, useState } from 'react';
import { Button } from '../ui/moving-border';
import { faThumbtack, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../ui/animated-modal';
import { faSquareWhatsapp, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { SignupFormDemo } from '../pages/Form/BookingForm';

export default function Navbar() {
  // const navbarContent = ['Home', 'Layanan', 'Visi Misi', 'Portofolio', 'Tentang Kami'];
  const navbarContent = [
    {
      title: 'Home',
      link: '/home',
      isHidden: false,
    },
    {
      title: 'Layanan',
      link: '/services',
      isHidden: false,
    },
    {
      title: 'Visi Misi',
      link: '/goals',
      isHidden: false,
    },
    {
      title: 'Portofolio',
      link: '/portofolio',
      isHidden: false,
    },
    {
      title: 'Tentang Kami',
      link: '/about',
      isHidden: false,
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
        return router.push('/services');
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
      <header>
        <nav className="h-[100px] bg-[#F5F5F5] flex justify-between items-center md:pl-[100px] md:pr-[20px] px-[20px]">
          <main onClick={() => router.push('/home')} className="flex gap-1 items-center cursor-pointer">
            <div className="flex gap-2">
              <Image src={'/assets/logos/logo-campus-innovate.png'} height={60} width={60} alt="logo innovate" />
              <h1 className="text-[24px] hidden text-black font-bold md:flex text-center items-center">Campus Innovate</h1>
            </div>
          </main>
          <section className="flex md:gap-10 gap-3 items-center md:text-sm">
            {navbarContent.map((menu, index) => (
              <button
                onClick={() => handleSelect(index)}
                className={` ${pathname === menu.link ? 'text-secondary font-bold bg-primary rounded-full py-2 px-3' : 'text-primary'} md:text-[18px] text-[14px] font-normal hover:text-secondary hover:font-bold`}
                key={index}
              >
                {menu.title}
              </button>
            ))}
            <Modal>
              <ModalTrigger className="py-[14px] hidden md:block md:px-5 px-2 md:text-[18px] text-[12px] bg-secondary/90 text-primary border-secondary rounded-xl group/modal-btn">
                <span className="flex group-hover/modal-btn:translate-x-[16rem] text-center transition duration-500">
                  <FontAwesomeIcon icon={faThumbtack} fontSize={20} className="mr-3 mt-1" />
                  Book an Appointment
                </span>
                <span className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-black" fontSize={20} />
                </span>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <SignupFormDemo />
                </ModalContent>
              </ModalBody>
            </Modal>
          </section>
        </nav>
      </header>
    </main>
  );
}

