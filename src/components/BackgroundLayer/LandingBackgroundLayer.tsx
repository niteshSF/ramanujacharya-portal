import { Box } from "@chakra-ui/react"

interface LandingBackgroundLayerProps {
  children: React.ReactNode
}

export default function LandingBackgroundLayer({
  children,
}: LandingBackgroundLayerProps) {
  return (
    <Box position="relative" overflow="hidden" minH="100vh">
      {children}
    </Box>
  )
}
