import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SutraPage from "./pages/sri-bhashyam/SutraPage"
import SriBhashyamPage from "./pages/sri-bhashyam/SriBhashyamPage"
import LandingPage from "./pages/LandingPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sri-bhashyam" element={<SriBhashyamPage />} />
      <Route path="/sri-bhashyam/ixatyadhikaranam" element={<SutraPage />} />
    </Routes>
  )
}
