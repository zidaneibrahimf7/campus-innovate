'use client'

import Button from "@/components/custom/Button"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"



export default function FamilityPage(){
     const router = useRouter()
     return (
          <section className="py-[100px] px-[120px] w-full flex flex-col justify-center">
                <Button onClick={() => router.push('/services/event')} className=" max-w-[6rem] flex gap-2 px-4 py-2  mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
                    <FontAwesomeIcon icon={faCircleLeft} className="mt-0.5"  /> Back
               </Button>
               <h1 className="text-secondary font-bold capitalize text-[2rem] mb-5">Siang/Malam Keakraban</h1>
               <section className="grid grid-cols-4 gap-2">
                    <section className="text-[20px] font-normal col-span-2 text-white">
                         <h4 className="text-xl font-bold mb-3">Fasilitas Layanan Siang/Malam Keakraban</h4>
                         <ul className="list-disc m-5 grid grid-rows-6 gap-7">
                              <li>Fun Games / Team Building Games</li> 
                              <li>Synergized Games </li>
                              <li>Instruktur dan tim pendamping</li>
                              <li>Dokumentasi (Foto dan vidio)</li>
                              <li>Pertolongan pertama (P3K)</li>
                              <li>Spanduk Kegiatan</li>
                         </ul>
                    {/* <span className="italic mt-3 text-sm">*fasilitas dapat disesuaikan dengan pilihan paket dan permintaan</span> */}
                     <section className="flex gap-2 mt-5 mt-3">
                         <span className="p-1 bg-primary rounded-xl font-bold">Min 30 Pax</span>
                    </section>
                    </section>
                    <section className="col-span-2">
                         <DirectionAwareHover imageUrl={'/assets/images/eo/makrab/akrab.jpeg'} imageClassName="w-full h-[35rem]">
                              <p className="font-bold text-xl">Siang Keakraban with Campus Innovate</p>
                              <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                         </DirectionAwareHover>
                    </section>
               </section>
          </section>
     )
}