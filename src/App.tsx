import BackgroundLayer from "./components/BackgroundLayer"
import Header from "./components/Header"
import BaseLayout from "./layouts/BaseLayout"

export default function App() {
  return (
    <BaseLayout>
      <Header />
      <BackgroundLayer />
    </BaseLayout>
  )
}
