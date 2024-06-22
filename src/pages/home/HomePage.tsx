import BackgroundLayer from "../../components/BackgroundLayer/BackgroundLayer"
import Header from "../../components/Header/Header"
import Tree from "../../components/Tree/Tree"
import BaseLayout from "../../layouts/BaseLayout"

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      <Tree />
      <BackgroundLayer />
    </BaseLayout>
  )
}
