'use client'

import Button from "@/components/custom/Button"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

import { Tabs } from '@/components/ui/tabs'
import React, { useState } from 'react'
import OutboundEventsPerDay from "@/components/pages/Services/Event-Specialist/EventList/Outbound/OutboundPerDay"
import OutboundEventsPerhour from "@/components/pages/Services/Event-Specialist/EventList/Outbound/OutboundPerHour"
import Rafting from "@/components/pages/Services/Event-Specialist/EventList/Outbound/Rafting"
import AtvEvent from "@/components/pages/Services/Event-Specialist/EventList/Outbound/atv"


export default function OutboundEventPage(){
     const router = useRouter()

     const [sectionHeight, setSectionHeight] = useState("md:h-[55rem]");
     const [sectionHeightForMobile, setSectionHeightForMobile] = useState('h-[90rem]')
     
     const tabs = [
          {
               title: "Paket Perhari",
               value: "paket-perhari",
               content: <OutboundEventsPerDay />,
          },
          {
               title: "Paket Perjam",
               value: "paket-perjam",
               content: <OutboundEventsPerhour/>,
          },
           {
               title: "Rafting",
               value: "rafting",
               content: <Rafting />,
          },
          {
               title: "ATV",
               value: "atv",
               content: <AtvEvent />,
          },
     ]

     const handleTabChange = (tabTitle: string) => {
          // Update sectionHeight based on the active tab's title
          setSectionHeight(tabTitle === "ATV" ? "md:h-[79rem]" : "md:h-[55rem]");
          setSectionHeightForMobile(tabTitle === "Rafting" ? "h-[75rem]" : "h-[90rem]");
          setSectionHeightForMobile(tabTitle === "ATV" ? "h-[130rem]" : "h-[80rem]");
          // setSectionHeightForMobile('h-[85rem]')
     };
     return (
          <main>
                  <section className={`${sectionHeightForMobile} ${sectionHeight} [perspective:1000px] flex flex-col max-w-[90rem] mx-auto w-full items-start justify-start mt-10 mb-40`}>
                  {/* <section className={`h-[75rem] md:h-[55rem] [perspective:1000px] flex flex-col max-w-[90rem] mx-auto w-full items-start justify-start mt-10 mb-40`}> */}
                     <Button onClick={() => router.push('/services/event')} className=" max-w-[6rem] flex gap-2 px-4 py-2 ml-[4rem] mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
                         <FontAwesomeIcon icon={faCircleLeft} className="mt-0.5"  /> Back
                    </Button>
                    <Tabs 
                         tabs={tabs} 
                         contentClassName="mt-[3rem]" 
                         activeTabClassName="bg-secondary" 
                         tabClassName="bg-white text-primary gap-2" 
                         onTabChange={handleTabChange} 
                    />
                </section>
          </main>
     )
}