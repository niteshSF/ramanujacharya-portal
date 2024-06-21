import parse from "html-react-parser"
import "./markdown.css"
import { Box } from "@chakra-ui/react"

const MarkdownViewer = ({ htmlContent }: { htmlContent: string }) => {
  return <Box className="markdown-content">{parse(htmlContent)}</Box>
}

export default MarkdownViewer
