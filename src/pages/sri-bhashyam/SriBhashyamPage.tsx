import Tree from "@/components/Tree"
import BaseLayout from "@/layouts/BaseLayout"
import { sriBhashyam } from "@/data/sriBhashyam"

export default function SriBhashyamPage() {
  return (
    <BaseLayout>
      <Tree treeData={sriBhashyam} />
    </BaseLayout>
  )
}
