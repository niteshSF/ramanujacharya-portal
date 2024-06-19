import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import InfoPage from "./pages/InfoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info/:infoSlug" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
