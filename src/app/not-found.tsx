"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";

export default function NotFound() {
     const router = useRouter()

     return (
     <LampContainer>
          <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
          Oops... It looks like you&apos;ve lost. 
          </motion.h1>
          <motion.section
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
               delay: 0.3,
               duration: 0.8,
               ease: "easeInOut",
          }}
          >
          <Button onClick={() => router.push('/home')}>Go Home</Button>
          </motion.section>
     </LampContainer>
     );
}
