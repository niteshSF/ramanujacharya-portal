import TopHeaderImg from "@/assets/top_header.png"
import Ramanujacharya from "@/assets/ramanujacharya.png"
import SamskritiFoundation from "@/assets/samskriti_foundation.png"

export default function Header() {
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
      <div className="flex flex-col font-bold text-center justify-center items-center w-full text-yellow-400">
        <h2 className="text-md">॥ श्रीः ॥</h2>
        <h2 className="text-md">॥ श्रीमते रामानुजाय नमः ॥</h2>
        <h2 className="text-3xl">श्रीयतिराजसूक्तिसुधा</h2>
        <h2 className="text-xl">SRI YATHIRAJA SUKTI-SUDHA</h2>
      </div>
      <img src={SamskritiFoundation} className="h-[100px] hidden md:block" />
    </div>
  )
}
