import FeatureSection from "../components/pages/home/feature-section";
import GetAppSection from "../components/pages/home/get-app-section";
import HeroSection from "../components/pages/home/hero-section";
import SectionOne from "../components/pages/home/section-one";
import SectionTwo from "../components/pages/home/section-two";
import TestimonialsSection from "../components/pages/home/testimonials-section";
import SuboxoneSection from "../components/pages/home/suboxone-section";
import LocationSection from "../components/pages/home/location-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <TestimonialsSection />
      <SuboxoneSection />
      <FeatureSection />
      <LocationSection />
      <GetAppSection />
    </>
  );
};

export default Home;
