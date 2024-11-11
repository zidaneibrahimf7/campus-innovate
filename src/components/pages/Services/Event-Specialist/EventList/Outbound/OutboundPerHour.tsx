import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import TabServices from "../../../tab.services";

export default function OutboundEventsPerhour(){
     const router = useRouter()

     return (
     <TabServices>
         <div className="md:text-left text-center">
               <h3 className="text-primary mb-5">Outbound</h3>
               <h4 className="md:text-[24px]">Fasilitas Layanan Outbound Paket Perjam</h4>
          </div>
          <section className="md:grid flex flex-col-reverse grid-rows-1 grid-flow-col gap-3">
                <section className="md:text-[20px] font-normal">
                     <ul className="list-disc ml-8 md:text-[18px] text-[14px]">
                         <li>Fun Games / Team Building Games </li>
                         <li>Instruktur dan tim pendamping </li> 
                         <li>Synergized Games </li>
                         <li>Sound sistem dan mic</li>
                         <li>Peralatan pendukung permainan Instruktur dan tim pendamping</li>
                         <li>Sound sistem dan mic </li>
                         <li>Dokumentasi (Foto dan vidio)</li>
                         <li>Pertolongan pertama (P3K)</li>
                         <li>Spanduk Kegiatan</li>
                    </ul>
               <span className="italic mt-3 text-sm">*fasilitas dapat disesuaikan dengan pilihan paket dan permintaan</span>
               <section className="flex gap-2 mt-3">
                    <span className="md:p-1 p-3 bg-primary rounded-xl font-bold">Min 30 Pax</span>
               </section>
               </section>
               <section>
                    <DirectionAwareHover imageUrl={'/assets/images/eo/outbound/build_2.JPG'} imageClassName="w-[40rem] h-[35rem]">
                         <p className="font-bold text-xl">Outbound with Campus Innovate</p>
                         <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                    </DirectionAwareHover>
               </section>
           </section>
     </TabServices>
     )
}                 