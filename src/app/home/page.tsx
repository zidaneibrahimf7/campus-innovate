'use client'

import { BentoGridDemo } from "@/components/custom/BentoGrid/bento-grid-demo";
import { CardDemo } from "@/components/custom/Cards/cardDemo";
import { DirectionAwareHoverDemo } from "@/components/custom/DirectionAwareHover/direction-aware-hover-demo";
import { FocusCardsDemo } from "@/components/custom/FocusCards/focus-card.demo"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FocusCards } from "@/components/ui/focus-cards"
import Image from "next/image";
import { motion } from "framer-motion";
import {Button} from '@/components/ui/moving-border'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const transition = { duration: 1, ease: [.25,.1,.25,1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Campus Innovate";
const clientText = 'Our Client'

export default function DashboardPage(){
     const words = text.split(" ");  
     const wordsClient = clientText.split(" ");  
     // const imageUrl = `https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
     const imageUrl = `/assets/images/campus-innovate-team.png`

     return (
          <main className="text-white grid grid-cols-9 items-center min-h-screen">
              <motion.section
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.06 }}
                    className="col-span-2 col-start-2 col-span-4"
               >
                    <h1 className="font-bold text-[5.5rem] text-secondary">
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
                            <Button borderRadius="1.35rem">Hubungi Kami</Button>
                    </motion.div>

               </motion.section>
               <motion.section
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.04 }}
                    className="col-span-3 flex justify-center items-center mt-3 pt-3"
               >
                    <motion.div transition={transition} variants={variants}>
                         <DirectionAwareHover imageUrl={imageUrl} className="md:h-[32rem] md:w-[32rem] w-60 h-96 mb-3">
                              <p className="font-bold text-xl">Campus Innovate Teams</p>
                              <p className="font-normal text-sm">Media Campus Innovate - All Right Reserved @2024</p>
                         </DirectionAwareHover>
                    </motion.div>
               </motion.section>
               {/* <motion.section
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.04 }}
                    className="col-span-7 col-start-2 flex mt-3 pt-3"
               >
                    <h3 className="font-bold text-2xl text-secondary">
                         {wordsClient.map((word, index) => (
                              <React.Fragment key={index}>
                              <motion.span className="inline-block" transition={transition} variants={variants}>
                              {word}
                              </motion.span>
                              {index < words.length - 1 && ' '}
                              </React.Fragment>
                         ))}
                    </h3>
               </motion.section> */}
          </main>
     )
}

//  <section className="col-span-2 col-start-2 col-span-4">
//                          <h1 className="font-bold text-[5.5rem] text-secondary">Campus Innovate</h1>     
//                          {/* <motion.div
//                               animate={{ x: 100 }}
//                               // transition={{ ease: "easeOut", duration: 2 }}  
//                               // transition={{ delay: 1 }}
//                               transition={{
//                                    ease: "linear",
//                                    duration: 2,
//                                    x: { duration: 1 }
//                               }}
//                          >
//                               <h1 className="font-bold text-[5.5rem] text-secondary">Campus Innovate</h1>     
//                          </motion.div> */}
//                          {/* <TextGenerateEffect 
//                               words={`We want help you become a leader and organizer`} 
//                               className="text-white" 
//                               duration={1} 
//                          /> */}
//                          {/* <label className="font-semibold text-lg">“We want help you become a leader and organizer”</label> */}
//                          <motion.p className="text-zinc-400 text-lg mb-8" transition={transition} variants={variants}>
//                               Simple is a modern website builder powered by AI that changes how companies create user interfaces together.
//                          </motion.p>
//                          <div className="">
//                               {/* <TextGenerateEffect 
//                                    words={`Campus Innovate tidak hanya memberikan program substansial mengenai akselerasi kemajuan organisasi, namun juga memberikan dukungan bagi individu yang aktif di organisasi membantu meningkatkan keterampilan kepemimpinan untuk menjadi pemimpin inovatif.`} 
//                                    className="text-white font-normal text-sm" 
//                                    duration={0.5} 
//                               /> */}
//                               <p className="justify-stretch mt-[3rem]">
//                                    Campus Innovate tidak hanya memberikan program substansial mengenai akselerasi kemajuan organisasi, 
//                                    namun juga memberikan dukungan bagi individu yang aktif di organisasi membantu 
//                                    meningkatkan keterampilan kepemimpinan untuk menjadi pemimpin inovatif.
//                               </p>
//                          </div>
//                          <div className="pt-4 mt-2">
//                               <Button borderRadius="1.35rem">Hubungi Kami</Button>
//                          </div>
//                </section>
//                <section className="col-span-3 flex justify-center items-center mt-3 pt-3">
//                     {/* <Image 
//                          // src={`https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
//                          // src={`https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
//                          src={imageUrl}
//                          width={400}
//                          height={400}
//                          className="rounded-xl rounded-xl"
//                          alt="demo-image"
//                     /> */}
//                     <DirectionAwareHover imageUrl={imageUrl} className="md:h-[30rem] w-60 h-96 md:w-96 mb-3">
//                          <p className="font-bold text-xl">Campus Innovate Teams</p>
//                          <p className="font-normal text-sm">12 Oktober 2024</p>
//                     </DirectionAwareHover>
//                </section>