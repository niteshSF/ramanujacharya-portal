import { Box, Image } from "@chakra-ui/react"
import RamaunjaImg from "../assets/ramanuja.png"

export default function BackgroundLayer() {
  return (
    <Box>
      <Image
        src={RamaunjaImg}
        alt="Ramanujacharya"
        position="absolute"
        right="0"
        bottom="0"
        h={"600px"}
      />
    </Box>
  )
}
