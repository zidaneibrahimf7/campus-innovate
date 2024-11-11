'use client'

import Button from '@/components/custom/Button'
import DescriptionProgramEventOrganizer from '@/components/pages/Services/Event-Specialist/descriptionProgramEventOrganizer'
import CapacityBuildingEventsPerDay from '@/components/pages/Services/Event-Specialist/EventList/Capacity-Building/CapacityBuildingPerDay'
import CapacityBuildingEventsPerhour from '@/components/pages/Services/Event-Specialist/EventList/Capacity-Building/CapacityBuildingPerHour'
import { Tabs } from '@/components/ui/tabs'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function capacityBuildingPage(){
     const [sectionHeight, setSectionHeight] = useState("md:h-[75rem]");
     const router = useRouter()
     
     const tabs = [
          {
               title: "Paket Perhari",
               value: "paket-perhari",
               content: <CapacityBuildingEventsPerDay />,
          },
          {
               title: "Paket Perjam",
               value: "paket-perjam",
               content: <CapacityBuildingEventsPerhour />,
          },
     ]

     const handleTabChange = (tabTitle: string) => {
          setSectionHeight(tabTitle === "Paket Perhari" ? "md:h-[75rem]" : "md:h-[53rem]");
     };

  return (
    <main>
          {/* <section className={`h-[75rem] ${sectionHeight} [perspective:1000px] flex flex-col max-w-[90rem] mx-auto w-full items-start justify-start mt-10 mb-40`}> */}
          <section className={`h-[85rem] md:h-[55rem] perspective:1000px] flex flex-col max-w-[90rem] mx-auto w-full items-start justify-start mt-10 mb-40`}>
               <Button onClick={() => router.push('/services/event')} className="flex gap-2 px-4 py-2 ml-[4rem] mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
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

