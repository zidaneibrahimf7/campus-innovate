'use client'

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Image from "next/image"
import TabServices from "../tab.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";

export default function DescriptionMeeting(){
     const data = [
          {title : 'Zoom Meeting (1 Kamera)', price :'Rp. 3.600.000' },
          {title : 'Zoom Meeting (2 Kamera)', price :'Rp. 4.600.000'},
          {title : 'Zoom Meeting (3 Kamera)', price :'Rp. 5.600.000'}
     ]
     const router = useRouter()

     return (
          <TabServices>
               <h1>Meeting and Streaming</h1>
                    <section className="flex gap-4 *:w-1/3">
                    {data.map((data, index) => 
                         <article key={index} className="">
                              <section className="w-full relative">
                                   <section className="absolute inset-0 p-5 py-10 justify-between flex flex-col gap-8 rounded-lg h-full w-full bg-gradient-to-r from-primary to-secondary transform scale-[0.80]" />
                                   <section className="relative flex flex-col gap-1 items-center shadow-xl bg-primary border border-gray-800 px-4 py-8 h-[30rem] overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                        <FontAwesomeIcon className="h-[100px]" icon={faVideo} />
                                        <h1 className="text-[20px]">
                                             {data.title}
                                        </h1>
                                        <h4 className="text-[20px] font-normal mb-3">{data.price}</h4> 
                                        <Meteors number={30} />
                                        <Button onClick={() => router.push(`/services?tab=zoom`)}>
                                             Learn More
                                        </Button>
                                        {/* <button onClick={() => router.push(`/services?tab=zoom`)} className="py-[14px] min-w-[200px] text-[18px] w-fit px-[20px] bg-secondary font-medium rounded-full text-primary hover:bg-secondary/80">Learn More</button> */}
                                   </section>
                              </section>
                         </article>
                         // <article key={index} className="bg-primary items-center p-5 py-10 justify-between flex flex-col gap-8 rounded-lg h-full">
                         //      <FontAwesomeIcon className="h-[100px]" icon={faCircleUser}/>
                         //      <section className="flex flex-col gap-1 items-center">
                         //           <h1 className="text-[20px]">
                         //           {data.title}
                         //           </h1>
                         //           <h4 className="text-[16px] font-normal">{data.price} </h4>                             
                         //      </section>
                         //      <button onClick={() => router.push(`/services?tab=zoom`)} className="py-[14px] min-w-[200px] text-[18px] w-fit px-[20px] bg-secondary font-medium rounded-full text-primary">Learn More</button>
                         // </article>
                    )}
                    </section>          
          </TabServices>
     )
}