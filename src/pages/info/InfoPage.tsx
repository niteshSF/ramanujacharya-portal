import Header from "../../components/Header"
import BaseLayout from "../../layouts/BaseLayout"
import MarkdownViewer from "../../components/MarkdownViewer"
import urls from "../../assets/json/urls.json"
import { useParams } from "react-router-dom"
import { Box, IconButton, useDisclosure } from "@chakra-ui/react"
import { RefObject, useEffect, useRef, useState } from "react"
import axios from "axios"
import { FaList } from "react-icons/fa"
import TableOfContents from "../../components/TableOfContents"
import { marked } from "marked"

// Define a type for the Table of Contents items
interface TOCItem {
  level: number
  text: string | null
  id: string
}

const generateTOC = (
  htmlContent: string
): { toc: TOCItem[]; updatedHtmlContent: string } => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, "text/html")
  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6")

  const toc: TOCItem[] = Array.from(headings).map((heading) => {
    const level = parseInt(heading.tagName[1], 10)
    const text = heading.textContent
    const id = text?.replace(/\s+/g, "-").toLowerCase() || ""
    heading.id = id // Set the ID on the heading
    return { level, text, id }
  })

  return { toc, updatedHtmlContent: doc.body.innerHTML }
}

export default function InfoPage() {
  const { infoSlug } = useParams()

  const url = urls.find((url) => url.name === infoSlug)?.url

  const [markdown, setMarkdown] = useState("")
  const [toc, setToc] = useState<TOCItem[]>([]) // Use the TOCItem type
  const [htmlContent, setHtmlContent] = useState("")

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

  useEffect(() => {
    const fetchData = async () => {
      const htmlContent = await marked(markdown)
      const { toc, updatedHtmlContent } = generateTOC(htmlContent)
      setToc(toc)
      setHtmlContent(updatedHtmlContent)
    }
    fetchData()
  }, [markdown])

  return (
    <BaseLayout>
      <Header />
      <Box position="sticky" top="4" textAlign="right" mr="16px" mt="4px">
        <IconButton
          aria-label="Table of Contents"
          title="Table of Contents"
          icon={<FaList />}
          onClick={onOpen}
          color="#9a0019"
        />
      </Box>
      <Box textAlign={"center"} w="90%" mt="60px" p="4" mx="auto">
        <MarkdownViewer htmlContent={htmlContent} />
      </Box>
      <TableOfContents
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef as RefObject<HTMLButtonElement>}
        toc={toc}
      />
    </BaseLayout>
  )
}
