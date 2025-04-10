import EnterBtn from "@/assets/images/first_page/enter.png"
import { useNavigate } from "react-router-dom"

export default function SecondEnterButton() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col left-11">
 
      <img
        src={EnterBtn}
        onClick={() => navigate("/landing")}
        className="cursor-pointer"
      />
     
    </div>
  )
}
