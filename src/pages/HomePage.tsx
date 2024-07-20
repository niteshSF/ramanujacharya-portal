import Tree from "@/components/Tree"
import BaseLayout from "@/layouts/BaseLayout"
import works from "@/data/works"
import RamanujaBg from "@/components/RamanujaBg"

export default function HomePage() {
  return (
    <BaseLayout>
      <Tree treeData={works} />
      <RamanujaBg />
    </BaseLayout>
  )
}
