'use client'

import Button from "@/components/custom/Button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons"
import { faBrain, faCircleLeft, faPerson, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button as Buttons } from "@/components/ui/moving-border"
import { useState } from "react"
import LoadingButton from "@/components/custom/Loading/loadingButton"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"


export default function LdksPage(){
     const router = useRouter()

     const [loading, setLoading] = useState<boolean>(false)

     const motto = [
          { name: 'Personal Leadership & Self-Awareness', icon: <FontAwesomeIcon icon={faPerson} fontSize={'9rem'} /> },
          { name: 'Communication & Teamwork Skills', icon:  <FontAwesomeIcon icon={faTeamspeak} fontSize={'9rem'} /> },
          { name: 'Critical Thinking & Problem Solving', icon:  <FontAwesomeIcon icon={faBrain} fontSize={'9rem'} /> },
          { name: 'Leadership in Action & Social Responsibility', icon:  <FontAwesomeIcon icon={faShareNodes} fontSize={'9rem'} /> },
     ];

     const activites = [
          { title: 'Outbond & Team Building Activities', description: 'Aktivitas luar ruangan seperti atv, dan rafting untuk melatih keberanian dan kekompakan tim.', image: '/assets/images/eo/outbound/atv_3.jpeg'  },
          { title: 'Leadership Simulation Games', description: 'Amazing Race dengan tantangan lintas pos untuk menguji strategi dan kerja sama tim.', image: '/assets/images/eo/ldks/ldks.jpeg'  },
          { title: 'Workshop dan Mentoring', description: 'Sesi mentoring langsung dengan mentor berprestasi untuk menginspirasi dan memotivasi siswa.', image: '/assets/images/eo/ldks/mentoring_1.jpeg'  },
          { title: 'Character Building through Reflection', description: 'Sesi refleksi dan api unggun di malam hari untuk memperkuat kesadaran diri dan membangun kepercayaan diri.', image: '/assets/images/eo/ldks/ldks_2.jpeg'  },
     ]

     const vision = [
          { title: 'Visi dan Misi yang Selaras dengan Pengembangan Kepemimpinan Siswa', description: 'Campus Innovate memiliki visi dan misi membantu mengembangkan kepemimpinan dan organisasi mahasiswa serta pelajar, sejalan dengan taglinenya yaitu “Help You Become a Leader and Organizer.”'},
          { title: 'Pengalaman dalam Program Pengembangan Diri dan Edukasi', description: 'Berbekal pengalaman dalam menyelenggarakan kegiatan kepemimpinan, event edukatif, dan capacity building, Campus Innovate memahami kebutuhan pelajar dalam mengembangkan soft skills dan karakter unggul.' },
          { title: 'Tim Profesional', description: 'Fasilitator kami adalah orang yang berprestasi dan aktivis berpengalaman di organisasi, dengan fokus pada pembelajaran interaktif dan praktik langsung.', },
          { title: 'Pendekatan Outdoor & Experiential Learning', description: 'Kegiatan kami menekankan pembelajaran di luar ruangan melalui experiential learning, agar siswa dapat belajar lebih efektif dengan praktik, bukan hanya teori.'},
     ]

     const handleButton = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => {
               setLoading(false);
               // const urlToWhatsapp = `https://wa.me/628112012626?text=Halo Kak, Nama: ${name}, Pesan: ${message}`
               const urlToWhatsapp = `https://wa.me/6285882514394`;
               window.open(urlToWhatsapp, '_blank');
          }, 2000);
     }

     return (
          <>
           <section className="md:py-[100px] md:px-[120px] p-5 w-full flex flex-col justify-center">
               <Button onClick={() => router.push('/services/event')} className=" max-w-[6rem] flex gap-2 px-4 py-2  mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
                         <FontAwesomeIcon icon={faCircleLeft} className="mt-0.5"  /> Back
               </Button>
                    <h1 className="text-secondary font-bold capitalize text-[2rem] mb-5">Latihan Dasar Kepemimpinan Siswa</h1>
                    <h4 className="text-white font-bold capitalize text-2xl mb-5">Sekilas Tentang LDKS</h4>

                    <section className="md:grid flex flex-col-reverse grid-rows-1 grid-flow-col gap-3">
                         <section className="md:col-span-2 order-1">
                              <p className="text-white">
                                   Latihan Dasar Kepemimpinan Siswa (LDKS) adalah program yang bertujuan mengembangkan potensi kepemimpinan pelajar dengan membekali mereka keterampilan dasar, seperti kerja tim, komunikasi efektif, problem solving, dan pengambilan keputusan. 
                                   LDKS menjadi pondasi penting dalam membangun pribadi yang bertanggung jawab, disiplin, dan siap memimpin baik di lingkungan sekolah maupun di luar.
                              </p>
                              <section>
                                   <section className="grid grid-cols-1 max-w-full mx-auto gap-[2rem] md:grid-cols-2 mt-[3rem]">
                                        {activites.map((item, i) => {
                                             return (
                                                  <div className="p-2 rounded-xl items-center text-white" key={i}>
                                                       <div className="flex justify-center max-w-full ">
                                                            {/* <Image src={item.image}
                                                                 width={800}
                                                                 height={800}
                                                                 alt={`image_${i}`}
                                                                 className="rounded-xl"
                                                            /> */}
                                                            <DirectionAwareHover imageUrl={item.image} imageClassName="w-[29rem] h-[29rem]">
                                                                 <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                                                            </DirectionAwareHover>

                                                       </div>
                                                       <div className="items-center justify-center ml-5 mt-4">
                                                            <h6 className="font-bold mb-3">{item.title}</h6>
                                                            <p>{item.description}</p>
                                                       </div>
                                                  </div>
                                             )
                                        })}
                                   </section>
                              </section>
                         </section>
                         <section className="md:col-span-2 order-2">
                              <BentoGrid className="max-w-[38rem] mx-auto gap-[2rem] md:grid-cols-2">
                                   {motto.map((item, i) => (
                                        <BentoGridItem
                                             key={i}
                                             title={item.name}
                                             description={''}
                                             header={item.icon}
                                             // icon={item.icon}
                                             // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                                             className={`bg-secondary text-primary text-lg shadow-lg shadow-black`}
                                        />
                                   ))}
                              </BentoGrid>
                              <div className="mt-[1rem]">
                                   <span className="text-white italic">Tertarik dengan kami untuk program LDKS?</span>
                                   <Buttons borderRadius="1.75rem" containerClassName="mt-[1rem] ml-3" onClick={handleButton}>
                                        {!loading ? "Hubungi Kami" : <>Loading...  <LoadingButton /></>}
                                   </Buttons>
                              </div>
                         </section>
                    </section>

                    <section>
                         <div className="flex justify-center items-center md:pt-[90px] pt-3">
                              <h5 className="text-white text-[25px] font-bold">Alasan Memilih Campus Innovate sebagai Event Organizer LDKS</h5>
                         </div>
                         <div className="italic text-white flex justify-center mt-3">
                              <p>  
                                   Program yang Fleksibel dan Sesuai Kebutuhan Sekolah. 
                                   Kami memberikan kesempatan bagi sekolah untuk menyesuaikan kurikulum dan kegiatan LDKS dengan nilai serta tujuan pengembangan
                              </p>
                         </div>
                         <div>
                              {vision.map((item, i) => {
                                   return (
                                        <div className="p-1 bg-secondary mt-[10px] p-3 rounded-xl" key={i}>
                                             <h6 className="mb-3 font-bold text-[18px]">{item.title}</h6>
                                             <p>{item.description}</p>
                                        </div>
                                   )
                              })}
                         </div>
                    </section>
           </section>
          </>
     )
}