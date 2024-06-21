import Header from "../components/Header"
import BaseLayout from "../layouts/BaseLayout"
import MarkdownViewer from "../components/MarkdownViewer"
import urls from "../assets/json/urls.json"
import { useParams } from "react-router-dom"
import { Box, IconButton, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { FaList } from "react-icons/fa"
import TableOfContents from "../components/TableOfContents"

export default function InfoPage() {
  const { infoSlug } = useParams()

  const url = urls.find((url) => url.name === infoSlug)?.url

  const [markdown, setMarkdown] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(url || "")
        setMarkdown(response.data)
      } catch (error) {
        console.error("Error fetching markdown:", error)
      }
    }

    fetchMarkdown()
  }, [url])

  return (
    <BaseLayout>
      <Header />
      <Box textAlign={"right"} mr="20px">
        <IconButton
          aria-label="Table of Contents"
          icon={<FaList />}
          onClick={onOpen}
        />
      </Box>
      <Box textAlign={"center"} w="90%" mt="20px" p="4" mx="auto">
        <MarkdownViewer markdown={markdown} />
      </Box>
      <TableOfContents isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </BaseLayout>
  )
}
