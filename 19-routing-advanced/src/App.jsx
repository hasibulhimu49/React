import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CoursesDetails from "./pages/CoursesDetails";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/product" element={<Product />}>
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
            <Route path="kids" element={<Kids />} />
          </Route>

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursesDetails/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
