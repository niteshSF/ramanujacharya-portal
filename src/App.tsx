import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SutraPage from "./pages/sri-bhashyam/SutraPage"
import SriBhashyamPage from "./pages/sri-bhashyam/SriBhashyamPage"

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/sri-bhashyam" element={<SriBhashyamPage />} />
      <Route path="/sri-bhashyam/ixatyadhikaranam" element={<SutraPage />} />
    </Routes>
  )
}
