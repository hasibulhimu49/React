import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App;