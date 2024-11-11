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
               image :'/assets/images/eo/outbound/atv_1.jpeg', 
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
               image :'/assets/images/eo/outbound/atv_2.jpeg',
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
          <h3 className="text-primary md:text-left text-center">ATV (Outbound)</h3>
            <section className="md:grid flex flex-col-reverse grid-rows-1 grid-flow-col gap-3">
                    {data.map((item, i) => {
                         return (
                              <>
                               <section className=" w-full relative w-[25rem] col-span-2">
                                   <section className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                   <section className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                                        <Image
                                             src={item.image}
                                             width={500}
                                             height={200}
                                             alt={'as'}
                                             className="rounded-md"
                                        />
                                        <Label className="text-secondary font-bold text-[2rem] mt-5 flex">{item.title}</Label>
                                        <section className="flex flex-col items-center justify-center">
                                             <span className="text-primary font-bold text-xl mt-5 bg-secondary rounded-2xl p-1">{item.pax}</span>
                                             {/* <span className="text-primary font-bold text-xl mt-5 bg-secondary rounded-2xl p-1">{item.price}</span> */}
                                        </section>
                                        <section className="grid grid-cols-2 gap-2">
                                             <Label className="font-bold text-[16px] mt-5 col-span-2">Package Includes:</Label>
                                             {(item.content.list.map((list, i) => {
                                                  return (
                                                       <ul className="list-disc text-[14px] ml-5" key={i}>
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
           </section>
     </TabServices>
     )
}                 