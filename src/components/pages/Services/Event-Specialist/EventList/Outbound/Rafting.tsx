import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import TabServices from "../../../tab.services";

export default function Rafting(){
     const router = useRouter()

     return (
     <TabServices>
          <h3 className="text-primary">Rafting (Outbound)</h3>
           <section className="grid grid-cols-4">
               <section className="text-[20px] font-normal col-span-2">
                    <ul className="list-disc ml-8">
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
                    <section className="flex gap-2 mt-5">
                         <span className="p-1 bg-primary rounded-xl font-bold">Min 30 Pax</span>
                         <span className="p-1 bg-secondary/70 rounded-xl font-bold">Rp300.000/Pax</span>
                    </section>
               </section>
               <section className="col-span-2">
                    <DirectionAwareHover imageUrl={'/assets/images/klhk_3.jpg'} imageClassName="w-[40rem] h-[35rem]">
                         <p className="font-bold text-xl">KLHK with Campus Innovate</p>
                         <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                    </DirectionAwareHover>
               </section>
           </section>
     </TabServices>
     )
}                 