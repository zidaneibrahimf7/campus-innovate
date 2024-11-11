'use client';
import LoadingButton from '@/components/custom/Loading/loadingButton';
import { BackgroundLines } from '@/components/ui/background-lines';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { Button } from '@/components/ui/moving-border';
import { faHammer, faLeaf, faLink, faRunning, faSearch, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const icon = [
    { name: 'Lead', icon: faUserTie },
    { name: 'Agile', icon: faRunning },
    { name: 'Build', icon: faHammer },
    { name: 'Grow', icon: faLeaf },
    { name: 'Connect', icon: faLink },
  ];

  const content = [
    {
      title: 'Progressive Oriented',
      description:
        'Dalam lingkungan yang dinamis dan kompetitif saat ini, kepemimpinan yang efektif sangat penting untuk kesuksesan pribadi dan organisasi. Berikut komitmen Campus Innovate dalam mendukung pengembangan kepemimpinan diorganisasi',
    },
    {
      title: 'Mempercepat Pertumbuhan Organisasi',
      description: 'Program kami membantu proses akselerasi organisasi dalam menumbuhkan kegiatan keorganisasian yang berdampak',
    },
    {
      title: 'Mendukung Pengembangan Kepemimpinan Individu',
      description:
        'Program kami tidak hanya mempercepat pertumbuhan organisasi tetapi juga mendukung individu dalam mengembangkan keterampilan kepemimpinan, dengan tujuan menghasilkan pemimpin inovatif yang siap mengubah lingkungan mereka.',
    },
  ];

  const handleToCallViaWa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // const urlToWhatsapp = `https://wa.me/628112012626?text=Halo Kak, Nama: ${name}, Pesan: ${message}`
      const urlToWhatsapp = `https://wa.me/6285882514394`;
      window.open(urlToWhatsapp, '_blank');
    }, 2000);
  };

  return (
    <section>
      <BackgroundLines className="md:py-[100px] py-[20px] md:px-[120px] px-[18px] w-full flex flex-col gap-6 md:gap-[60px] md:my-0 my-[5rem] justify-center" svgOptions={{ duration: 10 }}>
        <h1 className="md:text-[2.25rem] text-[1.5rem] text-white text-center font-normal">
          So Here's our <span className="text-secondary font-bold"> brand value</span> idea
        </h1>
        <article className="flex md:gap-[80px] gap-5 flex-wrap justify-center">
          {icon.map((data, index) => (
            <section key={index} className="flex flex-col text-secondary items-center justify-center md:w-[310px] w-[160px] md:gap-[32px] gap-4">
              <FontAwesomeIcon className="h-[64px] md:h-[120px]" icon={data.icon} />
              <h6 className="text-[12px] md:text-[22px] font-bold">{data.name} </h6>
            </section>
          ))}
        </article>
      </BackgroundLines>
      <main className="flex flex-col gap-5 md:px-[120px] px-[18px] md:py-[44px] py-[12px]">
        <h1 className="text-[2.25rem] text-white text-center md:text-left font-bold">Know Our Story</h1>
        <main className="flex flex-col-reverse md:flex-row gap-[18px] w-full md:*:w-[50%]">
          <article className="flex flex-col gap-5">
            {content.map((data, index) => (
              <aside key={index} className="md:py-4 py-2 md:px-5 px-2 gap-3 bg-white rounded-tr-md rounded-br-md">
                <h2 className="font-bold md:text-[22px] text-[16px] text-primary">{data.title} </h2>
                <p className="md:text-[18px] text-[12px] text-[#373642] font-normal">{data.description}</p>
              </aside>
            ))}
          </article>
          <article className="flex flex-col md:gap-[30px] gap-[12px] *:mx-[42px] justify-center">
            <DirectionAwareHover imageUrl={`/assets/images/team_1.JPG`} imageClassName="w-[100rem] h-[20rem]">
              <p className="font-bold text-xl">Best Team</p>
              {/* <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p> */}
            </DirectionAwareHover>
            <Button borderRadius="1.35rem" onClick={handleToCallViaWa}>
              {loading ? (
                <div className="flex gap-2">
                  <LoadingButton /> Loading...
                </div>
              ) : (
                'Hubungi Kami'
              )}
            </Button>
          </article>
        </main>
      </main>
    </section>
  );
}
