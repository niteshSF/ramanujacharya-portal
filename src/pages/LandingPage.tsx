import BaseLayout from "@/layouts/BaseLayout"
import HdCenterImg from "@/assets/images/landing/landing_top.png"
import Ramanuja from "@/assets/images/landing/landing_ramanuja.png"
import Lamp from "@/assets/images/landing/lamp.png"
import CtrText from "@/assets/images/landing/landing_center_text.png"
import EnterButton from "@/components/EnterButton/EnterButton"

export default function LandingPage() {
  return (
    <BaseLayout>
      <img src={HdCenterImg} alt="Title" className="mx-auto pt-2" />
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
    </BaseLayout>
  )
}
