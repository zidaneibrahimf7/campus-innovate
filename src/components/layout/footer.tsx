import { faInstagram, faWebAwesome, faWebflow } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from './divider';
import { LinkPreview } from '../ui/link-preview';

export default function Footer() {
  const socialMedia = [
    {
      title: 'Whatsapp',
      url: 'https://wa.me/6285882514394',
    },
    {
      title: 'Website',
      url: 'campusinnovate.com',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/campusinnovate',
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/company/104864849/admin/dashboard/',
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61567887567029',
    },
  ];

  return (
    <footer className="bg-black">
      <main className="md:p-[120px] p-[32px] flex flex-col md:gap-5 gap-3">
        <section className="min-h-[240px] flex flex-col justify-between w-full">
          <article className="flex md:flex-row flex-col justify-between md:gap-[80px] gap-4">
            <p className="md:text-[16px] text-[12px] text-white font-normal leading-[32px] text-justify md:w-[70%] w-full">
              Campus Innovate berkomitmen memberdayakan mahasiswa dan pelajar untuk menjadi pemimpin serta organisator yang hebat. Kami mengutamakan pengembangan keterampilan melalui program mentoring, leadership development, organizational
              development, career development dan capacity building/outbound yang dinamis dan interaktif. Layanan ini tidak hanya dirancang untuk mahasiswa, tetapi juga terbuka bagi korporasi, perusahaan, sekolah, dan perguruan tinggi yang
              ingin memperkuat kerja tim dan kepemimpinan.
            </p>
            <figure className="w-[30%] ">
              <h4 className="text-white text-[20px] font-bold">Hubungi Kami:</h4>
              {socialMedia.map((data) => (
                <LinkPreview className="flex w-fit gap-2 flex-wrap text-[16px] font-bold text-secondary" key={data.title} url={data.url}>
                  {data.title}
                </LinkPreview>
              ))}
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
