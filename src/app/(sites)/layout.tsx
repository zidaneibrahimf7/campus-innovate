'use client'

import { FC } from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>){
     return (
           <main className="bg-primary min-h-screen">
                <Navbar />
               {children}
                <Footer />
           </main>
     )
}