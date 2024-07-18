import Tree from "@/components/Tree"
import BaseLayout from "@/layouts/BaseLayout"
import works from "@/data/works"

export default function HomePage() {
  return (
    <BaseLayout>
      <Tree treeData={works} />
    </BaseLayout>
  )
}
