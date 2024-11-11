'use client'

import Button from "@/components/custom/Button";
import { Label } from "@/components/ui/label";
import { Meteors } from "@/components/ui/meteors";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const transition = { duration: 1, ease: [.25,.1,.25,1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Event Organizer Specialist";

export default function EventPage(){
      const data = [
          {title : 'Capacity Building', image :'/assets/images/eo/capBuilding/cap_4.jpeg', path: '/services/event/capacity-building' },
          {title : 'Outbound', image :'/assets/images/eo/outbound/build_1.JPG', path: '/services/event/outbound'},
          {title : 'Malam/Siang Keakraban', image :'/assets/images/eo/makrab/makrab_1.JPG', path: '/services/event/familirity'},
          {title : 'LDKS', image :'/assets/images/eo/ldks/ldks.jpeg',  path: '/services/event/ldks'}
     ]

     const router = useRouter()

     const handleRoutingPage = (path: string) => {
          return router.push(path)
     }

     return (
          <main>
               <section className="md:py-[100px] md:px-[120px] p-5 w-full flex flex-col justify-center">
                    <Button onClick={() => router.push('/services')} className=" max-w-[6rem] flex gap-2 px-4 py-2  mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
                         <FontAwesomeIcon icon={faCircleLeft} className="mt-0.5"  /> Back
                    </Button>
                    <h1 className="text-secondary font-bold capitalize text-[2rem] mb-5">Event Organizer Specialist</h1>
                    <section className="md:grid md:grid-cols-4 gap-4">
                         {
                              data.map((item, i) => {
                                   return (
                                        <Fragment key={i}>
                                             <section className="w-full relative w-[25rem]">
                                                  <section className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                                  <section className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center gap-4 mb-4">
                                                       <Image 
                                                            src={item.image}
                                                            width={400}
                                                            height={200}
                                                            alt={item.title}
                                                            className="rounded-md"
                                                       />
                                                       <Label className="text-secondary font-bold text-[1.2rem] mt-5">{item.title}</Label>
                                                       <Button 
                                                            className="w-full bg-secondary p-2 rounded-md mt-2 hover:-translate-y-1 transform transition duration-200 hover:bg-white" 
                                                            onClick={() => handleRoutingPage(item.path)}>
                                                       Learn More</Button>
                                                  <Meteors number={20} />
                                                  </section>
                                             </section>
                                        </Fragment>
                                   )
                              })
                         }
                         {/* <section className=" w-full relative max-w-xs">
                              <section className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                              <section className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                                   <Image 
                                        src={'/assets/images/cda_2.JPG'}
                                        width={400}
                                        height={200}
                                        alt="capacityBuilding"
                                        className="rounded-md"
                                   />
                                   <Label className="text-secondary font-bold text-[1.5rem] mt-5">Capacity Building</Label>
                                   <Button className="w-full bg-secondary p-2 rounded-md mt-2 hover:-translate-y-1 transform transition duration-200 hover:bg-white" onClick={() => console.log('wq') }>Learn More</Button>
                              
                              <Meteors number={20} />
                              </section>
                         </section> */}
                    </section>
               </section>
          </main>
     )
}