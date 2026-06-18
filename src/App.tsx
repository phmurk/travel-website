import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Auth = lazy(() => import("./components/Auth/Auth"));

const Home = lazy(() => import("./pages/Home/Home"));
const Tours = lazy(() => import("./pages/Tours/Tours"));
const About = lazy(() => import("./pages/About/About"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const TourDetail = lazy(() => import("./pages/Tours/TourDetail"));
const Cart = lazy(() => import("./pages/Cart/Cart"));

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
        <Route path="/login" element={<Auth />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
