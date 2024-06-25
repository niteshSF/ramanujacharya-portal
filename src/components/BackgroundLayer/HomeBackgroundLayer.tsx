import { Box, Image } from "@chakra-ui/react"
import RamaunjaImg from "../../assets/images/ramanuja.png"

export default function HomeBackgroundLayer() {
  return (
    <Box>
      <Image
        src={RamaunjaImg}
        display={{ base: "none", lg: "block" }}
        alt="Ramanujacharya"
        position="absolute"
        right="0"
        bottom="0"
        h={"600px"}
      />
    </Box>
  )
}
