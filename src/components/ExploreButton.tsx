  import PressBtn from "@/assets/images/second_page/explore_button.png"
  import { useNavigate } from "react-router-dom"

  export default function ExploreButton() {
    const navigate = useNavigate()

    return (
      <div className="relative left-11">
  
        <img
          src={PressBtn}
          onClick={() => navigate("/landing")}
          className="cursor-pointer"
        />
      
      </div>
    )
  }
