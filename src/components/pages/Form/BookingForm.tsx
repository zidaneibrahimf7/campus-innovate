"use client";
import React, { ChangeEventHandler, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/moving-border";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingButton from "@/components/custom/Loading/loadingButton";


export function SignupFormDemo() {
     const [loading, setLoading] = useState<boolean>(false)

     const [name, setName] = useState<string>("")
     const [message, setMessage] = useState<string>("")

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setLoading(true)
          setTimeout(() => {
               setLoading(false)
               console.log({
                    name: name,
                    message
               });
               // const urlToWhatsapp = `https://wa.me/628112012626?text=Halo Kak, Nama: ${name}, Pesan: ${message}`
                const urlToWhatsapp = `https://wa.me/6285882514394?text=Halo%20Campus%20Innovate,%0A%0ANama:%20${name},%0A%0APesan:%20${message}`;
               window.open(urlToWhatsapp, "_blank")

          }, 2000)
     };

     
     const handleTextName:ChangeEventHandler<HTMLInputElement> = (e) => {
          setName(e.target.value)
     }

     const handleTextMessage:ChangeEventHandler<HTMLInputElement> = (e) => {
          setMessage(e.target.value)
     }
  return (
     <main className="rounded-none md:rounded-2xl p-4 md:p-4 shadow-input bg-white dark:bg-black">
          <section className="">
               <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Form Booking Events
               </h2>
          </section>
           <form className="mt-8 mb-2" onSubmit={handleSubmit}>
               <section>
                    <Label htmlFor="name">Name</Label>
                    <Input id="firstname" placeholder="Enter yourname...." type="text" onChange={handleTextName}/>
               </section>
               <section>
                    <Label htmlFor="message">Kirim Pesan</Label>
                    <Input id="message" placeholder="Enter your message..." type="text" onChange={handleTextMessage} />
               </section>
               <section className="flex items-center justify-center mt-3">
                    <Button 
                         containerClassName="w-full"
                         className="py-[14px] px-5 text-[18px] bg-secondary/90 text-primary border-secondary flex gap-3 hover:bg-secondary/70 disabled:bg-secondary/50"
                         borderRadius="1.2rem"
                         borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
                    >
                         
                         {!loading ? 
                              <><FontAwesomeIcon icon={faPaperPlane} />Send Message</> 
                              : 
                              <>
                             <LoadingButton />
                              Processing...
                              </>
                         }
                    </Button>
               </section>
           </form>
     </main>
//     <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//         Welcome to Aceternity
//       </h2>
//       <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//         Login to aceternity if you can because we don&apos;t have a login flow
//         yet
//       </p>

//       <form className="my-8" onSubmit={handleSubmit}>
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//           <LabelInputContainer>
//             <Label htmlFor="firstname">First name</Label>
//             <Input id="firstname" placeholder="Tyler" type="text" />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="lastname">Last name</Label>
//             <Input id="lastname" placeholder="Durden" type="text" />
//           </LabelInputContainer>
//         </div>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="email">Email Address</Label>
//           <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" placeholder="••••••••" type="password" />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-8">
//           <Label htmlFor="twitterpassword">Your twitter password</Label>
//           <Input
//             id="twitterpassword"
//             placeholder="••••••••"
//             type="twitterpassword"
//           />
//         </LabelInputContainer>

//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//           type="submit"
//         >
//           Sign up &rarr;
//           <BottomGradient />
//         </button>

//         <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//         <div className="flex flex-col space-y-4">
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               GitHub
//             </span>
//             <BottomGradient />
//           </button>
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               Google
//             </span>
//             <BottomGradient />
//           </button>
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               OnlyFans
//             </span>
//             <BottomGradient />
//           </button>
//         </div>
//       </form>
//     </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
