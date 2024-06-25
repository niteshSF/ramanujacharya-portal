import { Flex, Image } from "@chakra-ui/react"
import EnterBtn from "../../assets/images/landing/ENTER.png"
import EnterTop from "../../assets/images/landing/enter_top.png"
import EnterBottom from "../../assets/images/landing/enter_bottom.png"
import { useNavigate } from "react-router-dom"

export default function EnterButton() {
  const navigate = useNavigate()

  return (
    <Flex flexDirection="column">
      <Image src={EnterTop} alt="Enter Top" />
      <Image
        src={EnterBtn}
        alt="Enter Button"
        onClick={() => navigate("/home")}
        cursor="pointer"
      />
      <Image src={EnterBottom} alt="Enter Bottom" />
    </Flex>
  )
}
