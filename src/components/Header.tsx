import { Box, Image } from "@chakra-ui/react"
import header from "../assets/header.png"
import sanskritTitle from "../assets/sanskrit_title.png"
import EngTitle1 from "../assets/eng_title_1.png"
import EngTitle2 from "../assets/eng_title_2.png"

export default function Header() {
  return (
    <Box position={"relative"}>
      <Image src={header} alt="Ramanujacharya" h={"120px"} maxW={"100%}"} />
      <Image
        src={sanskritTitle}
        h={"64px"}
        alt="title"
        position={"absolute"}
        transform={"translate(-50%, -50%)"}
        top={"30%"}
        left={"50%"}
      />
      <Image
        src={EngTitle1}
        alt="title"
        position={"absolute"}
        transform={"translate(-50%, -50%)"}
        top={"65%"}
        left={"50%"}
      />
      <Image
        src={EngTitle2}
        alt="title"
        position={"absolute"}
        transform={"translate(-50%, -50%)"}
        top={"90%"}
        left={"50%"}
      />
    </Box>
  )
}
