import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
