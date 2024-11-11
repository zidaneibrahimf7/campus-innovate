'use client'

import { motion } from "framer-motion";
import {Button} from '@/components/ui/moving-border'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import React, { useState } from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import LoadingButton from "@/components/custom/Loading/loadingButton";

const transition = { duration: 1, ease: [.25,.1,.25,1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Campus Innovate";
const clientText = 'Our Client'

const events = [
     {
          id: 1,
          name: "KLHK",
          designation: "Kementerian Lingkungan Hidup dan Kehutanan",
          image: "/assets/logos/logo-klhk.png"
               // "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
     },
     {
          id: 2,
          name: "IPB",
          designation: "CDA - IPB University",
          image:
               "https://www.clipartmax.com/png/small/252-2525928_berkas-logo-ipb-svg-bogor-agricultural-university.png",
     }
]

export default function DashboardPage(){
     const words = text.split(" ");  
     const wordsClient = clientText.split(" ");  
     // const imageUrl = `https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
     const imageUrl = `/assets/images/fullteam.jpg`
     const [loading, setLoading] = useState<boolean>(false)

     const handleToCallViaWa = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setLoading(true)
          setTimeout(() => {
               setLoading(false)
               // const urlToWhatsapp = `https://wa.me/628112012626?text=Halo Kak, Nama: ${name}, Pesan: ${message}`
                const urlToWhatsapp = `https://wa.me/6285882514394`;
               window.open(urlToWhatsapp, "_blank")

          }, 2000)
     }

     return (
          <main className="text-white md:grid md:grid-cols-9 md:py-[100px] flex flex-col gap-5 p-5">
                  {/* <main className="flex flex-col gap-5 md:px-[120px] px-[18px] md:py-[44px] py-[12px]"></main> */}
              <motion.section
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.06 }}
                    className="md:col-span-2 md:col-start-2 md:col-span-4"
               >
                    <h1 className="font-bold md:text-[5.5rem] text-[3.5rem] text-secondary">
                         {words.map((word, index) => (
                              <React.Fragment key={index}>
                              <motion.span className="inline-block" transition={transition} variants={variants}>
                              {word}
                              </motion.span>
                              {index < words.length - 1 && ' '}
                              </React.Fragment>
                         ))}
                    </h1>
                    <motion.label className="font-semibold text-lg" transition={transition} variants={variants}>
                        {/* "We want help you become a leader and organizer" */}
                        <TextGenerateEffect 
                              words={`We want help you become a leader and organizer`} 
                              className="text-white" 
                              duration={1} 
                         />
                    </motion.label>
                    <motion.p className="justify-stretch mt-[3rem] leading-loose" transition={transition} variants={variants}>
                         <Highlight className="text-primary font-semibold dark:text-primary font-semibold">Campus Innovate</Highlight> tidak hanya memberikan program substansial mengenai akselerasi kemajuan organisasi, 
                         namun juga memberikan dukungan bagi individu yang aktif di organisasi membantu 
                         <Highlight className="text-primary font-semibold">meningkatkan keterampilan kepemimpinan</Highlight> untuk menjadi <Highlight className="text-primary dark:text-primary font-semibold">pemimpin inovatif</Highlight>.
                    </motion.p>
                     <motion.div className="pt-4 mt-2" transition={transition} variants={variants}>
                            <Button borderRadius="1.35rem" onClick={handleToCallViaWa}>{loading ? <div className="flex gap-2"><LoadingButton /> Loading...</div> : "Hubungi Kami"}</Button>
                    </motion.div>
               </motion.section>

               <motion.section
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.04 }}
                    className="md:col-span-3 flex justify-center items-center mt-3 pt-3"
               >
                    <motion.div transition={transition} variants={variants}>
                         {/* className="md:h-[40rem] md:w-[32rem] w-60 h-96 mb-3"> */}
                         <DirectionAwareHover imageUrl={imageUrl} className="md:h-[30rem] md:w-[32rem] w-[27rem] h-[30rem]">
                              <p className="font-bold text-xl">Campus Innovate Teams</p>
                              <p className="font-normal text-sm">Media Campus Innovate - All Right Reserved @2024</p>
                         </DirectionAwareHover>
                    </motion.div>
               </motion.section>

               <motion.div
                         initial="hidden"
                         whileInView="visible"
                         transition={{ staggerChildren: 0.04 }}
                         className="col-span-2 col-start-2"
                    >
                         <h3 className="font-bold text-[2rem] text-secondary">
                              {wordsClient.map((word, index) => (
                                   <React.Fragment key={index}>
                                   <motion.span className="inline-block" transition={transition} variants={variants}>
                                   {word}
                                   </motion.span>
                                   {index < words.length - 1 && ' '}
                                   </React.Fragment>
                              ))}
                         </h3>
                         <div className="flex flex-row w-full mt-[2rem]">
                              <AnimatedTooltip items={events} width={90}   />
                         </div>
               </motion.div>
          </main>
     )
}