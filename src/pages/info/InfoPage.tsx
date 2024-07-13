import Header from "../../components/Header/Header"
import BaseLayout from "../../layouts/BaseLayout"
import MarkdownViewer from "../../components/MarkdownViewer/MarkdownViewer"
import { getUrl } from "../../data/urls"
import { useParams } from "react-router-dom"
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { FaList } from "react-icons/fa"
import TableOfContents from "../../components/TableOfContents/TableOfContents"
import { marked } from "marked"
import { LuChevronDown } from "react-icons/lu"

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
type Lang = "sa" | "en" | "kn" | "te" | "ta"

const languages = [
  { value: "sa", label: "Devanagari" },
  { value: "en", label: "Roman Diacritics" },
  { value: "kn", label: "Kannada" },
  { value: "te", label: "Telugu" },
  { value: "ta", label: "Tamil" },
]

export default function InfoPage() {
  const { infoSlug } = useParams()

  const [lang, setLang] = useState(languages[0])

  const [markdown, setMarkdown] = useState("")
  const [toc, setToc] = useState<TOCItem[]>([]) // Use the TOCItem type
  const [htmlContent, setHtmlContent] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  useEffect(() => {
    const fetchMarkdown = async () => {
      console.log(lang)
      const url = getUrl(infoSlug || "", lang.value as Lang)
      try {
        const response = await axios.get(url || "")
        setMarkdown(response.data)
      } catch (error) {
        console.error("Error fetching markdown:", error)
      }
    }

    fetchMarkdown()
  }, [lang, infoSlug])

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
      <Flex justifyContent="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<LuChevronDown />} color="#9a0019">
            {lang.label}
          </MenuButton>
          <MenuList>
            {languages.map((option) => (
              <MenuItem
                key={option.value}
                color={option.value === lang.value ? "#9a0019" : "black"}
                onClick={() => setLang(option)}
              >
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      <Box textAlign={"center"} w="90%" mt="60px" p="4" mx="auto">
        <MarkdownViewer htmlContent={htmlContent} />
      </Box>
      <TableOfContents
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        toc={toc}
      />
    </BaseLayout>
  )
}
