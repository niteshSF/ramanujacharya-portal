import Header from "../components/Header"
import BaseLayout from "../layouts/BaseLayout"
import MarkdownViewer from "../components/MarkdownViewer"
import urls from "../assets/json/urls.json"
import { useParams } from "react-router-dom"
import { Box, Flex } from "@chakra-ui/react"
import TableOfContents from "../components/TableOfContents"

export default function InfoPage() {
  const { infoSlug } = useParams()

  const url = urls.find((url) => url.name === infoSlug)?.url

  return (
    <BaseLayout>
      <Header />
      <Flex mt="20px" mx="40px" gap="50px">
        <Box>
          <MarkdownViewer url={url || ""} />
        </Box>
        <Box>
          <TableOfContents />
        </Box>
      </Flex>
    </BaseLayout>
  )
}
