import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home/Home"));
const Tours = lazy(() => import("./pages/Tours/Tours"));
const About = lazy(() => import("./pages/About/About"));
const Blog = lazy(() => import("./pages/Blog/Blog"));

// import "./index.css";
// import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
