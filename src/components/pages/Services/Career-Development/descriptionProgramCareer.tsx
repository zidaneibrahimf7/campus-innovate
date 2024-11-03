'use client'

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

export default function DescriptionCareerDevelopment(){
     const imageUrl = "/assets/images/klhk_3.jpg";
     return (
          <>
               <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-violet-900 to-primary">
                     <h4>Career Development</h4>
                      <section className="flex gap-2">
                         <section className="text-[20px] font-normal justify-normal mt-3">
                              Campus Innovate dapat membantu 
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         </section>
                         <section>
                              <DirectionAwareHover imageUrl={imageUrl} imageClassName="w-[200rem] h-[35rem]">
                                   <p className="font-bold text-xl">Capacity Building KLHK</p>
                                   <p className="font-normal text-sm">@2024 - Campus Innovate - All Right Reserved</p>
                              </DirectionAwareHover>
                         </section>
                    </section>
               </div>
          </>
     )
}