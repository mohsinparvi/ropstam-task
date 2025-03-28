import GetAppSection from "../components/pages/home/get-app-section";
import HeroSection from "../components/pages/home/hero-section";
import SectionOne from "../components/pages/home/section-one";
import SectionTwo from "../components/pages/home/section-two";
import TestimonialsSection from "../components/pages/home/testimonials-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <TestimonialsSection />
      <GetAppSection />
    </>
  );
};

export default Home;
