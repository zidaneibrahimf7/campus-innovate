'use client'

import { BentoGridDemo } from "@/components/custom/BentoGrid/bento-grid-demo"
import { WobbleCardDemo } from "@/components/custom/WobbleCard/wobble-card-demo";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { faBookOpenReader, faComments, faHandHoldingDollar, faInfinity, faLightbulb, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const transition = { duration: 1, ease: [.25,.1,.25,1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );

const items = [
  {
    title: "Pengalaman Luas",
    description: "Kami memiliki tim berpengalaman dalam merancang dan mengelola acara",
    header: <FontAwesomeIcon icon={faBookOpenReader} fontSize={'9rem'} />,
  },
  {
    title: "Inovatif dan Kreatif",
    description: "Setiap acara dirancang dengan konsep yang unik dan menarik sehingga memberikan kesan terbaik kepada setiap peserta",
    header: <FontAwesomeIcon icon={faLightbulb} fontSize={'9rem'} />,
  },
  {
    title: "Kreatifitas Tanpa Batas",
    description: "Ide-ide segar dan inovatif dalam setiap acara",
    header: <FontAwesomeIcon icon={faInfinity} fontSize={'9rem'} />
  },
  {
    title: "Fleksibel dan Disesuaikan",
    description: "Program kami dapat disesuaikan dengan kebutuhan spesifik sesuai dengan permintaan",
    header: <FontAwesomeIcon icon={faComments} fontSize={'9rem'} />,
  },
  {
    title: "Harga Kompetitif",
    description: "Layanan berkualitas dengan harga yang terjangkau",
    header: <FontAwesomeIcon icon={faHandHoldingDollar} fontSize={'9rem'} />
  },
  {
    title: "Konsen Pada Pengembangan Kepemimpinan",
    description: "Kami memiliki tujuan dengan berfokus pada pengembangan skill kepemimpinan., ini yang membedakan Campus Innovate dengan perusahaan lain",
    header: <FontAwesomeIcon icon={faPerson} fontSize={'9rem'} />,
  },
];

export default function GoalsPage(){
     const textTitle = "Mengapa Harus Campus Innovate?";
     const wordsTitle = textTitle.split(" ");  
     return (
          <>
               <main>
                    <motion.section
                         initial="hidden"
                         whileInView="visible"
                         transition={{ staggerChildren: 0.06 }}
                         className="pt-[100px] pb-[4rem] px-[120px] flex flex-col gap-[60px]"
                    >
                          <h1 className="font-bold text-[4rem] text-secondary">
                              {wordsTitle.map((word, index) => (
                                   <React.Fragment key={index}>
                                        <motion.span className="inline-block" transition={transition} variants={variants}>
                                        {word}
                                        </motion.span>
                                        {index < wordsTitle.length - 1 && ' '}
                                   </React.Fragment>
                              ))}
                    </h1>
                    </motion.section>

                    <motion.section 
                         initial="hidden"
                         whileInView="visible"
                         transition={{ staggerChildren: 0.06 }}
                         className="flex justify-center"
                    >
                         <BentoGrid className="max-w-[90rem] mx-auto gap-[2rem]">
                              {items.map((item, i) => (
                              <BentoGridItem
                                   key={i}
                                   title={item.title}
                                   description={item.description}
                                   header={item.header}
                                   // icon={item.icon}
                                   // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                                   className={`bg-secondary text-primary text-lg shadow-lg shadow-black`}
                              />
                              ))}
                         </BentoGrid>
                    </motion.section>

                    <motion.section 
                         initial="hidden"
                         whileInView="visible"
                         transition={{ staggerChildren: 0.06 }}
                         className="flex justify-center pt-[100px] pb-[80px]"
                    >
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full min-h-[20rem]">
                              <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                                   <h2 className="max-w-80 md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                        Our Vision
                                   </h2>
                                   <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                                        Help develop organizations and develop the potential of students to become future leaders.
                                   </p>
                              </WobbleCard>
                              <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
                                   <div className="max-w-full">
                                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                             Our Mission
                                        </h2>
                                        <ul className="mt-4 text-left text-base/6 text-neutral-200 list-disc ml-6 leading-8">
                                             <li>Become a platform that helps develop leadership and organizational skills for students in Indonesia</li>
                                             <li>Helping organizations to grow, develop and adapt amidst the challenges of an era of much uncertainty</li>
                                             <li>Building an organization on campus that has different values ​from other organizations that uphold the value of diversity</li>
                                             <li>Develop post-organizational skills, oriented towards work preparation</li>
                                             <li>Connect organizational skills with the skills needed at work</li>
                                        </ul>
                                   </div>
                                   {/* <Image
                                        src="/assets/noise.webp"
                                        width={}
                                        height={500}
                                        alt="linear demo image"
                                        className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                                   /> */}
                              </WobbleCard>
                         </div>
                    </motion.section>
               </main>
          </>
     )
}