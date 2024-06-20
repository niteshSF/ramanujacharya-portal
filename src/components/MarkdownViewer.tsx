import { useState, useEffect } from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import "./markdown.css"
import { Box } from "@chakra-ui/react"

const MarkdownViewer = ({ url }: { url: string }) => {
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(url)
        setMarkdown(response.data)
      } catch (error) {
        console.error("Error fetching markdown:", error)
      }
    }

    fetchMarkdown()
  }, [url])

  return (
    <Box textAlign={"center"}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
    </Box>
  )
}

export default MarkdownViewer
