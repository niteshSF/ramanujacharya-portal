import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkToc from "remark-toc"
import "./markdown.css"
import { Box } from "@chakra-ui/react"

const MarkdownViewer = ({ markdown }: { markdown: string }) => {
  return (
    <Box className="markdown-content">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkToc]}
        children={markdown}
      />
    </Box>
  )
}

export default MarkdownViewer
