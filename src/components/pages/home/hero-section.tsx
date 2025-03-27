import { Button } from "@material-tailwind/react";
import { HeroImage } from "../../../assets/images";
import { ArrowUpRight } from "../../../assets/icons";

const HeroSection = () => {
  return (
    <section className="h-[100dvh]">
      <img
        src={HeroImage}
        alt="hero"
        className="absolute inset-0 h-fill w-full object-cover rounded-md"
      />
      <div className="relative z-10 ml-0 md:ml-10 lg:ml-48 md:top-10 lg:top-44 max-w-2xl px-4">
        <div className="flex h-screen mt-52 flex-col text-white">
          <p className="mb-4 text-xl font-light">
            No Lines. Less hassle, Lower Costs.
          </p>
          <h1 className="mb-8 text-6xl font-normal leading-tight">
            Easy Online Suboxone Treatment for Opioid Addiction
          </h1>
          <Button
            className="flex items-center gap-2 bg-primary  hover:bg-primary/80 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out px-3 py-3 max-w-[230px]"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Download The App Today</span>
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
