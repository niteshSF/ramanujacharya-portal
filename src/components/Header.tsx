import TopHeaderImg from "@/assets/images/top_header.png"
import Ramanujacharya from "@/assets/images/ramanujacharya.png"
import SamskritiFoundation from "@/assets/images/samskriti_foundation.png"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()

  return (
    <div
      className="w-full flex justify-between p-4"
      style={{
        backgroundImage: `url(${TopHeaderImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={Ramanujacharya} className="h-[100px] hidden md:block" />
      <div
        className="flex flex-col font-bold text-center justify-center items-center w-full text-yellow-400 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <h2 className="text-md">॥ श्रीः ॥</h2>
        <h2 className="text-md">॥ श्रीमते रामानुजाय नमः ॥</h2>
        <h2 className="text-3xl">श्रीयतिराजसूक्तिसुधा</h2>
        <h2 className="text-xl">SRI YATHIRAJA SUKTI-SUDHA</h2>
      </div>
      <img src={SamskritiFoundation} className="h-[100px] hidden md:block" />
    </div>
  )
}
