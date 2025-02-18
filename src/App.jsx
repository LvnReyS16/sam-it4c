
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from './pages/Hero'
import AboutUs from "./pages/About-us";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>} /> 
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="settings" element={<div> SETTINGS </div>} />
      </Routes>
    </div>
  )
}

export default App
