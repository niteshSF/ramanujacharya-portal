import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import "./markdown.css"
import { Box } from "@chakra-ui/react"

const MarkdownViewer = ({ markdown }: { markdown: string }) => {
  return (
    <Box className="markdown-content">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
    </Box>
  )
}

export default MarkdownViewer
