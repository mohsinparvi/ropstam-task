import {
  FeatureSection,
  GetAppSection,
  HeroSection,
  SectionOne,
  SectionTwo,
  TestimonialsSection,
  SuboxoneSection,
  LocationSection,
} from "../components/pages/home";

const Home = () => {
  return (
    <main className=" space-y-7 lg:space-y-14 overflow-hidden">
      <div>
        <HeroSection />
        <SectionOne />
      </div>
      <SectionTwo />
      <TestimonialsSection />
      <SuboxoneSection />
      <FeatureSection />
      <LocationSection />
      <GetAppSection />
    </main>
  );
};

export default Home;
