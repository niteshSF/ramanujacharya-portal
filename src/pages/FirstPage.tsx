// import Ramanuja from "@/assets/images/first_page/temple.png"
// import Lamp from "@/assets/images/landing/lamp.png"
// import CtrText from "@/assets/images/first_page/first_page_name.png"
// import BgImg from "@/assets/images/first_page/backgroundimage.png"
// import SFLogo from "@/assets/images/first_page/samskriti_foundation.png"
// import LandingAudio from "@/assets/audio/landing_audio.m4a"
// import { useEffect, useRef } from "react"
// import FirstEnterButton from "@/components/FirstEnter"

// export default function FrontView() {
//   const audioRef = useRef<HTMLAudioElement>(null)

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.play()
//     }
//   }, [])

//   return (
//     <div
//       className="relative overflow-hidden min-h-screen"
//       style={{
//         backgroundImage: `url(${BgImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <audio ref={audioRef} src={LandingAudio} autoPlay />
//       <img
//         src={SFLogo}
//         className="absolute top-4 right-3 h-[10vh] md:h-[8rem] lg:h-[8rem] z-[100]"
//         alt="Samskriti Foundation Logo"
//       />
//       <img
//         src={Lamp}
//         className="absolute bottom-[-20px] right-[-5px] h-[20vh] md:h-[25vh] lg:h-[46vh] z-[100]"
//         alt="Lamp"
//       />
//       <img
//         src={Ramanuja}
//         alt="Ramanujacharya"
//         className="absolute bottom-[-11px] left-[10%] md:left-[100%] lg:left-[5%] h-[40vh] md:h-[50vh] lg:h-[95vh] z-[100]"
//       />
//       <img
//         src={CtrText}
//         className="absolute top-[25%] left-[10%] md:left-[15%] lg:left-[58%] h-[10vh] md:h-[12vh] lg:h-[22vh] z-[100]"
//         alt="First Page Title"
//       />
      
//       <div className="absolute top-[25%] left-[10%] md:left-[15%] lg:left-[20%] w-[10px] h-[10px] shadow-[3px_-3px_250px_311px_rgba(255, 169, 7, 0.39)] z-[50]" />
//       <div className="absolute top-[50%] right-[10%] md:right-[15%] lg:right-[20%] w-[10px] h-[10px] shadow-[3px_-3px_250px_311px_rgba(255, 169, 7, 0.79)] z-[50]" />
      
//       <div className="absolute  h-full flex justify-center items-center top-10 right-80 z-[90]">
//         <FirstEnterButton />
//       </div>
//     </div>
//   )
// }

import Ramanuja from "@/assets/images/first_page/temple.png"
import Lamp from "@/assets/images/landing/lamp.png"
import CtrText from "@/assets/images/first_page/first_page_name.png"
import BgImg from "@/assets/images/first_page/backgroundimage.png"
import SFLogo from "@/assets/images/first_page/samskriti_foundation.png"
import LandingAudio from "@/assets/audio/landing_audio.m4a"
import { useEffect, useRef } from "react"
import FirstEnterButton from "@/components/FirstEnter"

export default function FrontView() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [])

  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <audio ref={audioRef} src={LandingAudio} autoPlay />
      
      {/* Logo */}
      <img
        src={SFLogo}
        className="absolute top-[3vh] right-[2vw] max-h-[10vh] lg:max-h-[8rem] z-[100]"
        alt="Samskriti Foundation Logo"
      />
      
      {/* Lamp */}
      <img
        src={Lamp}
        className="absolute bottom-[-3vh] right-[0vw] max-h-[25vh] lg:max-h-[46vh] z-[100]"
        alt="Lamp"
      />
      
      {/* Ramanuja Image */}
      <img
        src={Ramanuja}
        alt="Ramanujacharya"
        className="absolute bottom-[-5vh] left-[10%] md:left-[50%] lg:left-[3%] max-h-[40vh] md:max-h-[50vh] lg:max-h-[95vh] z-[100]"
      />
      
      {/* Center Text */}
      <img
        src={CtrText}
        className="absolute top-[25%] left-[10%] md:left-[15%] lg:left-[54%] max-h-[15vh] md:max-h-[22vh] lg:max-h-[23vh] z-[100]"
        alt="First Page Title"
      />
      
      {/* Decorative circles */}
      <div className="absolute top-[25%] left-[10%] md:left-[15%] lg:left-[20%] w-[2vw] h-[2vw] shadow-[3px_-3px_250px_311px_rgba(255, 169, 7, 0.39)] z-[50]" />
      <div className="absolute top-[50%] right-[10%] md:right-[15%] lg:right-[20%] w-[2vw] h-[2vw] shadow-[3px_-3px_250px_311px_rgba(255, 169, 7, 0.79)] z-[50]" />
      
      {/* Enter Button */}
      <div className="absolute h-full flex justify-center items-center top-12 right-[26vw] z-[90]">
        <FirstEnterButton />
      </div>
    </div>
  )
}
