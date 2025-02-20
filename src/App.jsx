
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from './components/Hero';
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
      
    </div>
  )
}

export default App
