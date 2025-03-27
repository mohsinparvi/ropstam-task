import { HeroImage } from "../../../assets/images";

const HeroSection = () => {
  return (
    <section>
      <img
        src={HeroImage}
        alt="hero"
        className="w-full h-screen absolute top-0  rounded-md object-cover"
      />
    </section>
  );
};

export default HeroSection;
