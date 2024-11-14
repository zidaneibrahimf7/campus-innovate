'use client'

import { FC } from "react"
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  kindPage: string
}

const PaginationControl:FC<PaginationControlsProps> = ({hasNextPage, hasPrevPage, kindPage}) => {
     const router = useRouter()
     const searchParams = useSearchParams()

     const page = searchParams.get('page') ?? '1'

     return (
          <>
          <div className='flex gap-2'>
               <button
               className='bg-blue-500 text-white p-1'
               disabled={!hasPrevPage}
               onClick={() => {
                    router.push(`/${kindPage}?page=${Number(page) - 1}`)
               }}>
               prev page
               </button>

               <div>
               {page}
               </div>

               <button
               className='bg-blue-500 text-white p-1'
               disabled={!hasNextPage}
               onClick={() => {
                    router.push(`/${kindPage}?page=${Number(page) + 1}`)
               }}>
               next page
               </button>
          </div>
          </>
     )
}

export default PaginationControl