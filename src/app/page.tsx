import { AnimatedModalDemo } from "@/components/custom/Modal/animated-modal-demo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
    {/* <BackgroundBeamsWithCollision>Campus Innovate</BackgroundBeamsWithCollision> */}
    {/* <AnimatedModalDemo /> */}
    <div className="flex justify-center min-h-screen items-center">
      <h1 className="text-normal font-bold text-xl">Hello world <span className="text-secondary">Need a help?</span></h1>
      <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-secondary ml-3" width={'20px'} height={'20px'} />
    </div>
    </>
  );
}
