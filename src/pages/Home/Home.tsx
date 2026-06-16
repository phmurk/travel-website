import Hero from "../../components/Home/Hero/Hero";
import Newsletter from "../../components/About/Newsletter/Newsletter";
import PopularDestinations from "../../components/Home/Popular/PopularDestinations";
import HotOffer from "../../components/Home/HotOffer/HotOffer";
import FeaturedTours from "../../components/Home/FeaturedTours/FeaturedTours";
import WhyUs from "../../components/Home/WhyUs/WhyUs";
import BlogPreview from "../../components/Home/BlogPreview/BlogPreview";

function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <HotOffer />
      <FeaturedTours />
      <WhyUs />
      <BlogPreview />
      <Newsletter />
    </>
  );
}

export default Home;
