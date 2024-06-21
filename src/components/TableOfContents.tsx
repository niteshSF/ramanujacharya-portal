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

import "./toc.css"

export default function TableOfContents({
  isOpen,
  onClose,
  btnRef,
  toc,
}: {
  isOpen: boolean
  onClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  btnRef: any
  toc: { level: number; text: string; id: string }[]
}) {
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
        <DrawerHeader textAlign={"center"}>Table of Contents</DrawerHeader>

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
