import { Tabs } from "@/components/ui/tabs"
import TabServices from "../tab.services"
import Button from '@/components/custom/Button/index'
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface dataProps {
    title:string;
    package:string[];
    free:string[];
    adds:string[]
    price:string
}

export default function DetailMeeting() {
     const router = useRouter()

    const data : dataProps[] = [
  {
    title: "Zoom Meeting (1 Kamera)",
    package: [
      "1 Unit Camera Full HD",
      "1 Person Cameramen",
      "1 Unit Vidio Capture",
      "1 Person Operator Streaming",
      "Laptop/PC/Setara",
      "Sound Card Audio",
      "1 Modem Internet",
      "10 M HDMI Cable",
      "Hasil Output (Via Google Drive)",
      "Durasi Maksimal 8 Jam Kerja"
    ],
    free: [
      "Desain Lower Thried",
      "Desain Thumbnail",
      "Zoom Pro HD 100 Participants",
      "Internet 10 Mbps Kuota 10 GB"
    ],
    adds: [
      "TV LED 40\" 750K",
      "Additional Camera 1500K",
      "Additional Media Streaming 1000K",
      "Gladi Resik Charge 80%",
      "Max 8 Jam Kerja 50% Capacity Crew & Alat",
      "Setup Alat H-1 Charge 30%"
    ],
price :'Rp. 3.600.000'  },
  {
    title: "Zoom Meeting (2 Kamera)",
    package: [
      "2 Unit Camera Full HD",
      "2 Person Cameramen",
      "2 Unit Vidio Capture",
      "1 Person Operator Streaming",
      "Laptop/PC/Setara",
      "Sound Card Audio",
      "1 Modem Internet",
      "10 M HDMI Cable",
      "Hasil Output (Via Google Drive)",
      "Durasi Maksimal 8 Jam Kerja"
    ],
    free: [
      "Desain Lower Thried",
      "Desain Thumbnail",
      "Zoom Pro HD 100 Participants",
      "Internet 10 Mbps Kuota 10 GB"
    ],
    adds: [
      "TV LED 40\" 750K",
      "Additional Camera 1500K",
      "Additional Media Streaming 1000K",
      "Gladi Resik Charge 80%",
      "Max 8 Jam Kerja 50% Capacity Crew & Alat",
      "Setup Alat H-1 Charge 30%"
    ],
price :'Rp. 4.600.000'  },
  {
    title: "Zoom Meeting (3 Kamera)",
    package: [
      "3 Unit Camera Full HD",
      "3 Person Cameramen",
      "3 Unit Vidio Capture",
      "1 Person Operator Streaming",
      "Laptop/PC/Setara",
      "Sound Card Audio",
      "1 Modem Internet",
      "10 M HDMI Cable",
      "Hasil Output (Via Google Drive)",
      "Durasi Maksimal 8 Jam Kerja"
    ],
    free: [
      "Desain Lower Thried",
      "Desain Thumbnail",
      "Zoom Pro HD 100 Participants",
      "Internet 10 Mbps Kuota 10 GB"
    ],
    adds: [
      "TV LED 40\" 750K",
      "Additional Camera 1500K",
      "Additional Media Streaming 1000K",
      "Gladi Resik Charge 80%",
      "Max 8 Jam Kerja 50% Capacity Crew & Alat",
      "Setup Alat H-1 Charge 30%"
    ],
price :'Rp. 5.600.000'  }
];

     const tabs = [
        {
               title: "Zoom Meeting (1 Kamera)",
               value: "1",
               content: <ContentDetailMeeting data={data[0]} />,
        },
        {
               title: "Zoom Meeting (2 Kamera)",
               value: "2",
               content: <ContentDetailMeeting data={data[1]} />,
        },
        {
               title: "Zoom Meeting (3 Kamera)",
               value: "3",
               content: <ContentDetailMeeting data={data[2]} />,
        },
    ]

return  (
    <main>
        <section className="h-[90rem] md:h-[50rem] [perspective:1000px] flex flex-col max-w-[90rem] mx-auto w-full items-start justify-start mt-10 mb-40">
               <Button onClick={() => router.push('/services')} className="flex gap-2 px-4 py-2 ml-[4rem] mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary">
                    <FontAwesomeIcon icon={faCircleLeft} className="mt-0.5"  /> Back
               </Button>
            <Tabs tabs={tabs} contentClassName="mt-[3rem]" activeTabClassName="bg-secondary" tabClassName="bg-white text-primary gap-2" />
        </section>
    </main>
)        
    
}



export const ContentDetailMeeting = ({data} : {data:dataProps}) => {
    return (
        <TabServices>
            <h1>{data.title}</h1>
            <h3 className="text-[24px] text-black font-bold"><span className="text-primary">Price: </span>{data.price} </h3>
            <section className="flex w-full leading-normal	 gap-2 *:w-1/2">
                <article className="flex flex-col gap-2">
                    <h2 className="text-[24px] text-primary font-bold">Package includes:</h2>
                    <ul className="text-[18px] font-normal px-4">
                        {data.package.map((res, index) =>
                            <li className="list-disc text-black" key={index}>{res} </li>
                        )}
                    </ul>
                </article>
                     <article className="flex flex-col gap-2">
                        <article className="flex flex-col gap-2">
                          <h2 className="text-[24px] text-primary font-bold">Free & Bonus:</h2>
                    <ul className="text-[18px] font-normal px-4">
                        {data.free.map((res, index) =>
                            <li className="list-disc text-black" key={index}>{res} </li>
                        )}
                    </ul>
                        </article>
                         <article className="flex flex-col gap-2">
                            <h2 className="text-[24px] text-primary font-bold">Additional:</h2>
                    <ul className="text-[18px] font-normal px-4">
                        {data.adds.map((res, index) =>
                            <li className="list-disc text-black" key={index}>{res} </li>
                        )}
                    </ul>
                        </article>
                    
                </article>

            </section>
        </TabServices>
    )
}