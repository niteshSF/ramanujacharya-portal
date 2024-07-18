import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SutraPage from "./pages/sri-bhashyam/SutraPage"
import SriBhashyamPage from "./pages/sri-bhashyam/SriBhashyamPage"
import PadaPage from "./pages/sri-bhashyam/PadaPage"
import AdhikaranaPage from "./pages/sri-bhashyam/AdhikaranaPage"
import AdhyayaPage from "./pages/sri-bhashyam/AdhyayaPage"

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/sri-bhashyam" element={<SriBhashyamPage />} />
      <Route path="/sri-bhashyam/:adhyaya" element={<AdhyayaPage />} />
      <Route path="/sri-bhashyam/:adhyaya/:pada" element={<PadaPage />} />
      <Route
        path="/sri-bhashyam/:adhyaya/:pada/:adhikarna"
        element={<AdhikaranaPage />}
      />
      <Route
        path="/sri-bhashyam/:adhyaya/:pada/:adhikarna/:sutra"
        element={<SutraPage />}
      />
    </Routes>
  )
}
