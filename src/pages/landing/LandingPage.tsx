import BaseLayout from "../../layouts/BaseLayout"
import HdCenterImg from "../../assets/images/landing/landing_top.png"
import Ramanuja from "../../assets/images/landing/landing_ramanuja.png"
import Lamp from "../../assets/images/landing/lamp.png"
import CtrText from "../../assets/images/landing/landing_center_text.png"
import { Box, Image } from "@chakra-ui/react"
import LandingBackgroundLayer from "../../components/BackgroundLayer/LandingBackgroundLayer"
import EnterButton from "../../components/EnterButton/EnterButton"

export default function LandingPage() {
  return (
    <BaseLayout>
      <LandingBackgroundLayer>
        <Image src={HdCenterImg} alt="Title" mx="auto" pt="8px" />
        <Image
          src={Lamp}
          alt="Lamp"
          position="absolute"
          bottom="-36px"
          right="-80px"
          zIndex={100}
        />
        <Image
          src={Ramanuja}
          alt="Ramanujacharya"
          position="absolute"
          bottom="-60px"
          left="-10px"
          height="100vh"
          zIndex={100}
        />
        <Image
          src={CtrText}
          alt="Title"
          position="absolute"
          top="25%"
          right="25%"
          height="250px"
          zIndex={100}
        />
        <Box
          position="absolute"
          w="10px"
          h="10px"
          boxShadow="3px -3px 250px 311px rgba(255, 230, 7, 0.78)"
          left="260px"
          top="150px"
          zIndex={50}
        />
        <Box
          position="absolute"
          w="10px"
          h="10px"
          boxShadow="3px -3px 250px 311px rgba(255, 230, 7, 0.78)"
          right="170px"
          bottom="150px"
          zIndex={50}
        />
        <Box position="absolute" top="60%" right="33%" zIndex={100}>
          <EnterButton />
        </Box>
      </LandingBackgroundLayer>
    </BaseLayout>
  )
}
