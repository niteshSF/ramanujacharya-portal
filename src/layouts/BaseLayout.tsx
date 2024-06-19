import { Box } from "@chakra-ui/react"
import bgImage from "../assets/background.png"

interface BaseLayoutProps {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Box
      bgImage={bgImage}
      minW={"100vw"}
      minH={"100vh"}
      bgSize={"cover"}
      bgPos={"center"}
    >
      {children}
    </Box>
  )
}
