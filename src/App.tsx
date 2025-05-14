// import { Route, Routes } from "react-router-dom"
// import HomePage from "./pages/HomePage"
// import SutraPage from "./pages/sri-bhashyam/SutraPage"
// import SriBhashyamPage from "./pages/sri-bhashyam/SriBhashyamPage"
// import LandingPage from "./pages/LandingPage"
// import FirstPage from "./pages/FirstPage"
// import SecondPage from "./pages/SecondPage"

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<FirstPage />} />
//       <Route path="/second" element={<SecondPage />} />
//       <Route path="/landing" element={<LandingPage />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="/sri-bhashyam" element={<SriBhashyamPage />} />
//       <Route path="/sri-bhashyam/sutras" element={<SutraPage />} />

//     </Routes>
//   )
// }

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SutraPage from "./pages/sri-bhashyam/SutraPage";
import SriBhashyamPage from "./pages/sri-bhashyam/SriBhashyamPage";
import LandingPage from "./pages/LandingPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import VaravaramuniPage from "./pages/VaravaramuniPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/landing" element={<LandingPage />} />

      <Route path="/varavaramuni" element={<VaravaramuniPage />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/sri-bhashyam" element={<SriBhashyamPage />} />
      <Route path="/sri-bhashyam/sutras" element={<SutraPage />} />
    </Routes>
  );
}
