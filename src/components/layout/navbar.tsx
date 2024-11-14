'use client';

import React, { useState } from 'react';
import { Button } from '../ui/moving-border';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../ui/animated-modal';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { SignupFormDemo } from '../pages/Form/BookingForm';

export default function Navbar() {
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (link: string) => {
    router.push(link);
    setIsMobileMenuOpen(false); // Menutup dropdown setelah klik
  };

  return (
    <main className="z-30">
      <header>
        <nav className="h-[100px] bg-[#F5F5F5] flex justify-between items-center md:pl-[100px] md:pr-[20px] px-[20px]">
          {/* Logo Section */}
          <main onClick={() => router.push('/home')} className="flex gap-1 items-center cursor-pointer">
            <div className="flex gap-2">
              <Image src={'/assets/logos/logo-campus-innovate.png'} height={60} width={60} alt="logo innovate" />
              <h1 className="md:text-[24px] text-xl text-black font-bold flex text-center items-center">Campus Innovate</h1>
            </div>
          </main>

          {/* Burger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <section className="absolute top-[100px] left-0 w-full bg-[#F5F5F5] flex flex-col items-center gap-4 py-4 shadow-lg md:hidden z-40">
              {navbarContent.map((menu, index) => (
                <button
                  onClick={() => handleSelect(menu.link)}
                  className={` ${
                    pathname === menu.link
                      ? 'text-secondary font-bold bg-primary rounded-full py-2 px-3'
                      : 'text-primary'
                  } text-[18px] font-normal hover:text-secondary hover:font-bold`}
                  key={index}
                >
                  {menu.title}
                </button>
              ))}
              <Modal>
                <ModalTrigger className="py-[14px] text-[18px] bg-secondary/90 text-primary border-secondary rounded-xl">
                  <span className="flex group-hover/modal-btn:translate-x-[16rem] text-center transition duration-500">
                    <FontAwesomeIcon icon={faThumbtack} fontSize={20} className="mr-3 mt-1" />
                    Book an Appointment
                  </span>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <SignupFormDemo />
                  </ModalContent>
                </ModalBody>
              </Modal>
            </section>
          )}

          {/* Desktop Menu */}
          <section className="hidden md:flex md:gap-10 gap-3 items-center md:text-sm text-xs">
            {navbarContent.map((menu, index) => (
              <button
                onClick={() => handleSelect(menu.link)}
                className={` ${
                  pathname === menu.link
                    ? 'text-secondary font-bold bg-primary rounded-full py-2 px-3'
                    : 'text-primary'
                } md:text-[18px] text-[4px] font-normal hover:text-secondary hover:font-bold`}
                key={index}
              >
                {menu.title}
              </button>
            ))}
            <Modal>
              <ModalTrigger className="py-[14px] text-[18px] md:px-5 px-2 bg-secondary/90 text-primary border-secondary rounded-xl">
                <span className="flex group-hover/modal-btn:translate-x-[16rem] text-center transition duration-500">
                  <FontAwesomeIcon icon={faThumbtack} fontSize={20} className="mr-3 mt-1" />
                  Book an Appointment
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

