import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import InfoPage from "./pages/info/InfoPage"
import LandingPage from "./pages/landing/LandingPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/info/:infoSlug" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
