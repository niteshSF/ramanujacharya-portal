import { Box } from "@chakra-ui/react"
import bgImage from "../assets/images/background.png"

interface BaseLayoutProps {
  children?: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Box bgImage={bgImage} bgSize={"cover"} bgPos={"center"} minH="100vh">
      {children}
    </Box>
  )
}
