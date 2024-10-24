'use client';

import { useState } from 'react';

export default function Navbar() {
  const navbarContent = ['Home', 'Layanan', 'Visi Misi', 'Portofolio', 'Tentang Kami'];
  const [select, setSelect] = useState(0);

  return (
    <header className="h-[100px] bg-[#F5F5F5] flex justify-between items-center pl-[100px] pr-[20px]">
      <h1 className="text-[24px] text-black font-bold">Campus Innovate</h1>
      <section className="flex gap-10 items-center">
        {navbarContent.map((res, index) => (
          <button onClick={() => setSelect(index)} className={` ${select === index ? 'text-secondary font-bold' : 'text-primary'} text-[18px] font-normal hover:text-secondary`} key={index}>
            {res}
          </button>
        ))}
        <button className="py-[14px] px-5 text-[18px] font-medium text-black bg-secondary rounded-lg ">Book an Appointment</button>
      </section>
    </header>
  );
}
