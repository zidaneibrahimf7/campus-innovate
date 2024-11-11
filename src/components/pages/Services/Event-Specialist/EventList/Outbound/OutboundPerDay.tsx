import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import TabServices from "../../../tab.services";

export default function OutboundEventsPerDay(){
     const router = useRouter()

     return (
     <TabServices>
          <div className="md:text-left text-center">
               <h3 className="text-primary mb-5">Outbound</h3>
               <h4 className="md:text-[24px]">Fasilitas Layanan Outbound Paket Perhari</h4>
          </div>
            <section className="md:grid flex flex-col-reverse grid-rows-1 grid-flow-col gap-3">
                 <section className="md:text-[20px] font-normal">
                       <ul className="list-disc ml-8 md:text-[18px] text-[14px]">
                         <li>Ice breaking games</li>
                         <li>Fun Games / Team Building Games</li> 
                         <li>Synergized Games </li>
                         <li>Air Minum saat kegiatan </li>
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
                    <DirectionAwareHover imageUrl={'/assets/images/eo/outbound/build_1.JPG'} imageClassName="w-[40rem] h-[35rem]">
                         <p className="font-bold text-xl">Outbound with Campus Innovate</p>
                         <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                    </DirectionAwareHover>
               </section>
           </section>
            {/* <section>
               <h4 className="my-4">Penawaran Paket Harga</h4>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                         <tr>
                              <th scope="col" className="px-6 py-3">
                              Paket
                              </th>
                              <th scope="col" className="px-6 py-3">
                              Min Peserta
                              </th>
                              <th scope="col" className="px-6 py-3">
                              Harga 1 Hari/Pack
                              </th>
                              <th scope="col" className="px-6 py-3">
                              Paket
                              </th>
                              <th scope="col" className="px-6 py-3">
                              Min Peserta 
                              </th>
                              <th scope="col" className="px-6 py-3">
                              Harga 2 Hari/Pack 
                              </th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   1 Hari
                              </th>
                              <td className="px-6 py-4">
                                   20-50 Pack
                              </td>
                              <td className="px-6 py-4">
                                   Rp350.000
                              </td>
                              <td className="px-6 py-4">
                                   2 Hari
                              </td>
                              <td className="px-6 py-4">
                                   20-50 Pack
                              </td>
                              <td className="px-6 py-4">
                                   Rp450.000
                              </td>
                         </tr>
                         <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   1 Hari
                              </th>
                              <td className="px-6 py-4">
                                  50-100 Pack
                              </td>
                              <td className="px-6 py-4">
                                   Rp330.000
                              </td>
                              <td className="px-6 py-4">
                                   2 Hari
                              </td>
                              <td className="px-6 py-4">
                                  50-100 Pack
                              </td>
                              <td className="px-6 py-4">
                                   Rp400.000
                              </td>
                         </tr>
                         <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   1 Hari
                              </th>
                              <td className="px-6 py-4">
                                   100-150 Pack
                              </td>
                              <td className="px-6 py-4">
                                   Rp300.000
                              </td>
                              <td className="px-6 py-4">
                                   2 Hari
                              </td>
                              <td className="px-6 py-4">
                                   100-150 Pack
                              </td>
                              <td className="px-6 py-4">
                                   Rp360.000
                              </td>
                         </tr>
                    </tbody>
                    </table>
                    </div>
                    <span className="italic mt-3 text-sm">*Permintaan paket diluar harga penawaran dapat disesuaikan dengan permintaan</span>
               </section> */}
     </TabServices>
     )
}                 