import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import TabServices from "../tab.services";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";

export default function DescriptionProgramEventOrganizer(){
     const router = useRouter()

     return (
     <TabServices>
          <p>Event Organizer</p>
           <section className="flex gap-2">
               <section className="text-[20px] font-normal">
                    <p>
                    Campus Innovate Event Organizer adalah 
                    Corporate Event Specialist yang menangani kebutuhan berbagai macam event. 
                    Proses untuk memperkuat kerjasama dan kolaborasi di dalam tim melalui aktivitas 
                    atau latihan khusus dengan menggunakan alat peraga. Selain itu, 
                    permainan atau aktivitas yang dirancang untuk memberikan hiburan dan kesenangan kepada peserta, 
                    seringkali dengan manfaat tambahan seperti peningkatan keterampilan sosial atau kreativitas. 
                    Kegiatan luar ruangan yang melibatkan tantangan fisik dan mental untuk mengembangkan keterampilan kepemimpinan, 
                    membangun kepercayaan diri, dan meningkatkan kerja tim.
                    </p>
                    <section className="mt-3">
                         <Button 
                              className="py-[14px] px-5 text-[18px] bg-secondary/90 text-primary border-secondary flex gap-3"
                              // containerClassName="w-[19rem]"
                              borderRadius="1.2rem"
                              borderClassName="bg-yellow-900 bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                              onClick={() => router.push('/services/event')} 
                         >
                              Learn More
                         </Button>
                    </section>
               </section>
               <section>
                    <DirectionAwareHover imageUrl={'/assets/images/eo/capBuilding/cap_2.jpeg'} imageClassName="w-[180rem] h-[35rem]">
                         <p className="font-bold text-xl">CDA IPB Capacity Building</p>
                         <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                    </DirectionAwareHover>
               </section>
           </section>
     </TabServices>
     )
}                 