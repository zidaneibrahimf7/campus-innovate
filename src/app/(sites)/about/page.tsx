import { BackgroundLines } from '@/components/ui/background-lines';
import { faHammer, faLeaf, faLink, faRunning, faSearch, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function AboutPage() {
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
      title: 'Mempercerpat Pertumbuhan Organisasi',
      description: 'Program kami membantu proses akselerasi organisasi dalam menumbuhkan kegiatan keorganisasian yang berdampak',
    },
    {
      title: 'Mendukung Pengembangan Kepemimpinan Individu',
      description:
        'Program kami tidak hanya mempercepat pertumbuhan organisasi tetapi juga mendukung individu dalam mengembangkan keterampilan kepemimpinan, dengan tujuan menghasilkan pemimpin inovatif yang siap mengubah lingkungan mereka.',
    },
  ];

  return (
    <section>
      <main className="py-[100px] px-[120px] z-0 w-full flex flex-col gap-[60px] justify-center">
        <h1 className="text-[2.25rem] text-white text-center font-normal">
          So Here's our <span className="text-secondary font-bold"> brand value</span> idea
        </h1>
        <article className="flex gap-[80px] flex-wrap justify-center">
          {icon.map((data, index) => (
            <section key={index} className="flex flex-col text-secondary items-center justify-center w-[310px] gap-[32px]">
              <FontAwesomeIcon className="" icon={data.icon} height={120} />
              <h6 className="text-[22px]  font-bold">{data.name} </h6>
            </section>
          ))}
        </article>
      </main>
      <main className="flex flex-col gap-5 px-[120px] py-[44px]">
        <h1 className="text-[2.25rem] text-white font-bold">Know Our Story</h1>
        <main className="flex gap-[18px] w-full *:w-[50%]">
          <article className="flex flex-col gap-5">
            {content.map((data, index) => (
              <aside key={index} className="py-4 px-5 gap-3 bg-white rounded-tr-md rounded-br-md">
                <h2 className="font-bold text-[22px] text-primary">{data.title} </h2>
                <p className="text-[18px] text-[#373642] font-normal">{data.description}</p>
              </aside>
            ))}
          </article>
          <article className="flex flex-col gap-[30px] *:mx-[42px] justify-center">
            <Image className="rounded-lg" src="/assets/images/klhk_1.jpg" alt="Logo BSI" width={550} height={580} />
            <button className="py-[14px] w-fit px-[24px] bg-secondary font-medium rounded-md text-primary">Hubungi Kami</button>
          </article>
        </main>
      </main>
    </section>
  );
}
