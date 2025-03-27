import { HeroImage } from "../../../assets/images";

const HeroSection = () => {
  return (
    <section className="">
      <img
        src={HeroImage}
        alt="hero"
        className="w-full h-screen absolute top-0  rounded-md object-cover"
      />
      <div className="absolute top-0 w-full h-screen z-1">
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <div></div>
          <h1 className="text-6xl font-bold">Welcome to our site</h1>
          <p className="text-xl">We are a team of professionals</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
