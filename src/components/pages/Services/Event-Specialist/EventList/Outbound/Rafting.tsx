import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import TabServices from "../../../tab.services";

export default function Rafting(){
     const router = useRouter()

     return (
     <TabServices>
          <h3 className="md:text-left text-primary text-center">Rafting (Outbound)</h3>
           {/* <section className="grid grid-cols-4"> */}
            <section className="md:grid flex flex-col-reverse grid-rows-1 grid-flow-col gap-3">
               <section className="md:text-[20px] font-normal">
                    <ul className="list-disc ml-8 md:text-[18px] text-[14px]">
                         <li>Track 12 KM </li>
                         <li>Peralatan Safety </li> 
                         <li>Guide & Resque Team </li>
                         <li>Kelapa Muda </li>
                         <li>Transportasi Menuju Lokasi</li>
                         <li>Tempat Bilas</li>
                         <li>Dokumentasi (Foto dan vidio)</li>
                         <li>Pertolongan pertama (P3K)</li>
                         <li>Banner Kegiatan</li>
                    </ul>
                    {/* <span className="italic mt-3 text-sm">*fasilitas dapat disesuaikan dengan pilihan paket dan permintaan</span> */}
                    <section className="flex gap-2 mt-5 mt-3">
                         <span className="p-3 md:p-1 bg-primary rounded-xl font-bold">Min 30 Pax</span>
                    </section>
               </section>
               <section className="col-span-2">
                    <DirectionAwareHover imageUrl={'/assets/images/eo/outbound/build_1.JPG'} imageClassName="w-full h-[35rem]">
                         <p className="font-bold text-xl">Outbound Rafting with Campus Innovate</p>
                         <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                    </DirectionAwareHover>
               </section>
           </section>
     </TabServices>
     )
}                 