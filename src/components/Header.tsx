import TopHeaderImg from "@/assets/top_header.png"
import Ramanujacharya from "@/assets/ramanujacharya.png"

export default function Header() {
  return (
    <div className="w-full relative">
      <img src={TopHeaderImg} className="w-full h-[140px]" />
      <img src={Ramanujacharya} className="absolute h-[120px] top-0 left-2" />
    </div>
  )
}
