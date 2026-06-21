import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Auth = lazy(() => import("./components/Auth/Auth"));
const Home = lazy(() => import("./pages/Home/Home"));
const Tours = lazy(() => import("./pages/Tours/Tours"));
const About = lazy(() => import("./pages/About/About"));
const TourDetail = lazy(() => import("./pages/Tours/TourDetail"));
const Cart = lazy(() => import("./pages/Cart/Cart"));

const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogPost = lazy(() => import("./pages/Blog/BlogPost"));

const DiscussionsList = lazy(
  () => import("./pages/Discussion/DiscussionsList"),
);
const Discussion = lazy(() => import("./pages/Discussion/Discussion"));
const NewDiscussion = lazy(() => import("./pages/Discussion/NewDiscussion"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense
        fallback={
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", background: "#031414", color: "#beb69b" }}
          >
            Загрузка...
          </div>
        }
      ></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/discussions" element={<DiscussionsList />} />
        <Route path="/discussions/new" element={<NewDiscussion />} />
        <Route path="/discussions/:id" element={<Discussion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
