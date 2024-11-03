import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import TabServices from "../../../tab.services";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";

export default function AtvEvent(){
     const router = useRouter()

      const data = [
          {    title : 'ATV (SHORT)', 
               pax:"Min 20 Pax", 
               price: "Rp270.000/Pax", 
               image :'/assets/images/cda_1.JPG', 
               content: {
                    list: [
                         "3 Lap ",
                         "20 Menit",
                         "Short Track",
                         "Safety Equipment (Helm)",
                         "Transportasi Menuju Lokasi",
                         "Air Minum",
                         "Kamar Mandi ",
                         "P3K",
                         "Banner Kegiatan",
                    ]
               }
          },
          {
               title : 'ATV (LONG)', 
               pax:"Min 20 Pax", 
               price: "Rp350.000/Pax", 
               image :'/assets/images/cda_2.JPG',
                content: {
                    list: [
                         "6 Lap ",
                         "40 Menit",
                         "Long Track",
                         "Safety Equipment (Helm)",
                         "Transportasi Menuju Lokasi",
                         "Air Minum",
                         "Kamar Mandi ",
                         "P3K",
                         "Banner Kegiatan",
                    ]
               }
          },
     ]

     return (
     <TabServices>
          <h3 className="text-primary">ATV (Outbound)</h3>
           <section className="flex justify-center gap-[10rem]">
                    {data.map((item, i) => {
                         return (
                              <>
                               <section className=" w-full relative w-[25rem] col-span-2">
                         <section className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                          <section className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                                <Image
                                   src={item.image}
                                   width={400}
                                   height={200}
                                   alt={'as'}
                                   className="rounded-md"
                              />
                               <Label className="text-secondary font-bold text-[1.2rem] mt-5">{item.title}</Label>
                               <section className="flex gap-2">
                                   <span className="text-primary font-bold text-xl mt-5 bg-secondary rounded-2xl p-1">{item.pax}</span>
                                   <span className="text-primary font-bold text-xl mt-5 bg-secondary rounded-2xl p-1">{item.price}</span>
                               </section>
                               <section>
                                   <Label className="font-bold text-sm mt-5">Package Includes:</Label>
                                   {(item.content.list.map((list, i) => {
                                        return (
                                             <ul className="list-disc text-sm w-full justify-center" key={i}>
                                                  <li>{list}</li>
                                             </ul>
                                        )
                                   }))}
                               </section>
                               <Meteors number={20} />
                          </section>
                     </section>
                              </>
                         )
                    })}
                     {/* <section className=" w-full relative w-[25rem] col-span-2">
                         <section className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                          <section className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                                <Image
                                   src={'/assets/images/cda_2.JPG'}
                                   width={400}
                                   height={200}
                                   alt={'as'}
                                   className="rounded-md"
                              />
                               <Label className="text-secondary font-bold text-[1.2rem] mt-5">SORT</Label>
                               <section className="flex gap-2">
                                   <span className="text-primary font-bold text-xl mt-5 bg-secondary rounded-2xl p-1">SORT</span>
                                   <span className="text-primary font-bold text-xl mt-5 bg-secondary rounded-2xl p-1">SORT</span>
                               </section>
                               <section>
                                   <Label className="font-bold text-sm mt-5">Package Includes:</Label>
                                   <ul className="list-disc text-sm w-full justify-normal">
                                        <li>3 Lap</li>
                                        <li>20 Menit </li>
                                        <li>Short Track </li>
                                        <li>Safety Equipment (Helm)</li>
                                        <li>Transportasi Menuju Lokasi</li>
                                        <li>Air Minum </li>
                                        <li>Kamar Mandi</li>
                                        <li>P3K</li>
                                        <li>Banner Kegiatan</li>
                                   </ul>
                               </section>
                               
                               <Meteors number={20} />
                          </section>
                     </section> */}
           </section>
     </TabServices>
     )
}                 