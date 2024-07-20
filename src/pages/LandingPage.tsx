import HdCenterImg from "@/assets/images/landing/landing_top.png"
import Ramanuja from "@/assets/images/landing/landing_ramanuja.png"
import Lamp from "@/assets/images/landing/lamp.png"
import CtrText from "@/assets/images/landing/landing_center_text.png"
import EnterButton from "@/components/EnterButton"
import BgImg from "@/assets/images/background.png"
import SFLogo from "@/assets/images/samskriti_foundation.png"
import LandingAudio from "@/assets/audio/landing_audio.m4a"
import { useEffect, useRef } from "react"

export default function LandingPage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [])

  return (
    <div
      className="relative overflow-hidden min-h-[100vh]"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <audio ref={audioRef} src={LandingAudio} autoPlay />
      <img src={HdCenterImg} alt="Title" className="mx-auto pt-2" />
      <img src={SFLogo} className="absolute right-8 top-4 z-10" />
      <img
        src={Lamp}
        alt="Lamp"
        className="absolute bottom-[-36px] right-[-80px] z-[100]"
      />
      <img
        src={Ramanuja}
        alt="Ramanujacharya"
        className="absolute bottom-[-60px] left-[-10px] h-screen z-[100]"
      />
      <img
        src={CtrText}
        alt="Title"
        className="absolute top-[25%] right-[25%] h-[250px] z-[100]"
      />
      <div className="absolute w-[10px] h-[10px] shadow-[3px_-3px_250px_311px_rgba(255,230,7,0.78)] left-[260px] top-[150px] z-[50]" />
      <div className="absolute w-[10px] h-[10px] shadow-[3px_-3px_250px_311px_rgba(255,230,7,0.78)] right-[170px] bottom-[150px] z-[50]" />
      <div className="absolute top-[60%] right-[33%] z-[100]">
        <EnterButton />
      </div>
    </div>
  )
}
