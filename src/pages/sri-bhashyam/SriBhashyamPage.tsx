import Tree from "@/components/Tree"
import BaseLayout from "@/layouts/BaseLayout"
import { sriBhashyam } from "@/data/sriBhashyam"
import RamanujaBg from "@/components/RamanujaBg"

export default function SriBhashyamPage() {
  return (
    <BaseLayout>
      <Tree treeData={sriBhashyam} />
      <RamanujaBg />
    </BaseLayout>
  )
}
