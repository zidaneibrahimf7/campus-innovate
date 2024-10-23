import { faInstagram, faWebAwesome, faWebflow } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from './divider';

export default function Footer() {
  return (
    <footer className="bg-black">
      <main className="p-[120px] flex flex-col gap-5">
        <section className="h-[220px] flex flex-col justify-between w-full">
          <article className="flex justify-between gap-[80px]">
            <p className="text-[16px] text-white font-normal leading-[32px] text-justify w-[70%]">
              Campus Innovate berkomitmen menjadi mitra terbaik bagi sekolah dalam menyelenggarakan LDKS yang inspiratif dan bermakna. Kami percaya bahwa dengan dukungan dan program yang tepat, siswa akan berkembang menjadi pemimpin masa
              depan yang berintegritas, kreatif, dan bertanggung jawab.
            </p>
            <figure className="flex flex-col text-white text-[16px]">
              <p>Hubungi Kami:</p>
              <p className="flex items-center gap-1">
                <FontAwesomeIcon height={16} width={16} icon={faPhone} />
                085559070165
              </p>
              <p className="flex items-center gap-1">
                <FontAwesomeIcon height={16} width={16} icon={faWebflow} />
                innovatecampus@gmail.com
              </p>
              <p className="flex items-center gap-1">
                <FontAwesomeIcon height={16} width={16} icon={faInstagram} />
                @campusinnovate
              </p>
            </figure>
          </article>
          <Divider />
        </section>
        <section className="flex justify-between items-center">
          <h1 className="text-[24px] text-white font-bold">Campus Innovate</h1>
          <h5 className="text-[14px] font-normal text-[#9CA2A5]">© 2024 Campus Innovate • All Rights Reserved</h5>
        </section>
      </main>
    </footer>
  );
}
