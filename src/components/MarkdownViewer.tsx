import { useState, useEffect } from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import "./markdown.css"

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

  return <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
}

export default MarkdownViewer
