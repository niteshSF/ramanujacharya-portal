import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"
import { RefObject } from "react"
import "./toc.css"

interface TOCItem {
  level: number
  text: string
  id: string
}

interface TableOfContentsProps {
  isOpen: boolean
  onClose: () => void
  btnRef: RefObject<HTMLButtonElement>
  toc: TOCItem[]
}

export default function TableOfContents({
  isOpen,
  onClose,
  btnRef,
  toc,
}: TableOfContentsProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader textAlign="center">Table of Contents</DrawerHeader>
        <DrawerBody>
          {toc.map((item, index) => (
            <UnorderedList
              key={index}
              style={{ marginLeft: (item.level - 1) * 20 }}
              className="toc-link"
              listStyleType="none"
            >
              <ListItem>
                <a href={`#${item.id}`}>{item.text}</a>
              </ListItem>
            </UnorderedList>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
