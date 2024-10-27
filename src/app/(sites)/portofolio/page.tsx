import { CardDemo } from '@/components/custom/Cards/cardDemo';
import Image from 'next/image';

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

  return (
    <main>
      <section className="py-[100px] px-[120px] w-full flex flex-col justify-center gap-[60px]">
        <h1 className="text-secondary text-center font-bold capitalize text-[4rem]">portofolio</h1>
        <main>
          <iframe className="rounded-lg " width="100%" height="610" src="/assets/images/testimoni.mp4" allow="autoplay" allowFullScreen></iframe>
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
