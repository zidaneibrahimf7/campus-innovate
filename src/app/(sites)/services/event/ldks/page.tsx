'use client'

import Button from "@/components/custom/Button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { faTeamspeak, faThinkPeaks } from "@fortawesome/free-brands-svg-icons"
import { faCircleLeft, faPerson, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button as Buttons } from "@/components/ui/moving-border"


export default function LdksPage(){
     const router = useRouter()
     const motto = [
          { name: 'Personal Leadership & Self-Awareness', icon: <FontAwesomeIcon icon={faPerson} fontSize={'9rem'} /> },
          { name: 'Communication & Teamwork Skills', icon:  <FontAwesomeIcon icon={faTeamspeak} fontSize={'9rem'} /> },
          { name: 'Critical Thinking & Problem Solving', icon:  <FontAwesomeIcon icon={faThinkPeaks} fontSize={'9rem'} /> },
          { name: 'Leadership in Action & Social Responsibility', icon:  <FontAwesomeIcon icon={faShareNodes} fontSize={'9rem'} /> },
     ];

     const activites = [
          { title: 'Outbond & Team Building Activities', description: 'Aktivitas luar ruangan seperti atv, dan rafting untuk melatih keberanian dan kekompakan tim.', image: '/assets/images/eo/makrab/akrab.jpeg'  },
          { title: 'Leadership Simulation Games', description: 'Amazing Race dengan tantangan lintas pos untuk menguji strategi dan kerja sama tim.', image: '/assets/images/eo/capBuilding/cap_1.jpeg'  },
          { title: 'Workshop dan Mentoring', description: 'Sesi mentoring langsung dengan mentor berprestasi untuk menginspirasi dan memotivasi siswa.', image: '/assets/images/cda_6.JPG'  },
          { title: 'Character Building through Reflection', description: 'Sesi refleksi dan api unggun di malam hari untuk memperkuat kesadaran diri dan membangun kepercayaan diri.', image: '/assets/images/cda_1.JPG'  },
     ]

     const vision = [
          { title: 'Visi dan Misi yang Selaras dengan Pengembangan Kepemimpinan Siswa', description: 'Campus Innovate memiliki visi dan misi membantu mengembangkan kepemimpinan dan organisasi mahasiswa serta pelajar, sejalan dengan taglinenya yaitu “Help You Become a Leader and Organizer.”'},
          { title: 'Pengalaman dalam Program Pengembangan Diri dan Edukasi', description: 'Berbekal pengalaman dalam menyelenggarakan kegiatan kepemimpinan, event edukatif, dan capacity building, Campus Innovate memahami kebutuhan pelajar dalam mengembangkan soft skills dan karakter unggul.' },
          { title: 'Tim Profesional', description: 'Fasilitator kami adalah orang yang berprestasi dan aktivis berpengalaman di organisasi, dengan fokus pada pembelajaran interaktif dan praktik langsung.', },
          { title: 'Pendekatan Outdoor & Experiential Learning', description: 'Kegiatan kami menekankan pembelajaran di luar ruangan melalui experiential learning, agar siswa dapat belajar lebih efektif dengan praktik, bukan hanya teori.'},
     ]

     return (
          <>
           <section className="py-[100px] px-[120px] w-full flex flex-col justify-center">
               <Button onClick={() => router.push('/services/event')} className=" max-w-[6rem] flex gap-2 px-4 py-2  mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
                         <FontAwesomeIcon icon={faCircleLeft} className="mt-0.5"  /> Back
               </Button>
                    <h1 className="text-secondary font-bold capitalize text-[2rem] mb-5">Latihan Dasar Kepemimpinan Siswa</h1>
                    <h4 className="text-white font-bold capitalize text-2xl mb-5">Sekilas Tentang LDKS</h4>

                    <section className="grid grid-cols-4 gap-[6rem]">
                         <section className="col-span-2">
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
                                                            <Image src={item.image}
                                                                 width={350}
                                                                 height={200}
                                                                 alt={`image_${i}`}
                                                                 className="rounded-xl"
                                                            />
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
                         <section className="col-span-2">
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
                                   <Buttons borderRadius="1.75rem" containerClassName="mt-[1rem] ml-3">
                                        Hubungi Kami
                                   </Buttons>
                              </div>
                         </section>
                    </section>

                    <section>
                         <div className="flex justify-center items-center pt-[90px]">
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