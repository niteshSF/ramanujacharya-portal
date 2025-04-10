import EnterBtn from "@/assets/images/first_page/enter.png"
import { useNavigate } from "react-router-dom"

export default function FirstEnterButton() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col left-11">
 
      <img
        src={EnterBtn}
        onClick={() => navigate("/second")}
        className="cursor-pointer"
      />
     
    </div>
  )
}
