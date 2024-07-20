import EnterBtn from "@/assets/images/landing/ENTER.png"
import EnterTop from "@/assets/images/landing/enter_top.png"
import EnterBottom from "@/assets/images/landing/enter_bottom.png"
import { useNavigate } from "react-router-dom"

export default function EnterButton() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      <img src={EnterTop} />
      <img
        src={EnterBtn}
        onClick={() => navigate("/home")}
        className="cursor-pointer"
      />
      <img src={EnterBottom} />
    </div>
  )
}
