'use client'

import { ReactNode } from "react"


type ButtonProps = {
     onClick: () => void,
     className?: string,
     children: ReactNode
}

export default function Button(props:ButtonProps){
     return (
          <>
           <button 
               className={
                    props.className ? 
                         props.className 
                         :
                         "flex gap-2 px-4 py-2 ml-[4rem] mb-4 rounded-md border border-neutral-300 bg-neutral-100 text-primary text-sm hover:-translate-y-1 transform transition duration-200 hover:bg-secondary"
               }
               onClick={props.onClick}
          >
          {props.children}
           </button>
          </>
     )
}