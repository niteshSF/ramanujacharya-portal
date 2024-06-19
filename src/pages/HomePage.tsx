import BackgroundLayer from "../components/BackgroundLayer"
import Header from "../components/Header"
import Tree from "../components/Tree"
import BaseLayout from "../layouts/BaseLayout"

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      <Tree />
      <BackgroundLayer />
    </BaseLayout>
  )
}
