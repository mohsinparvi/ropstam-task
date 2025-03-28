import { Button } from "../../ui/material-tailwind";
import { HeroImage } from "../../../assets/images";
import { ArrowUpRight } from "../../../assets/icons";

const HeroSection = () => {
  return (
    <>
      <img
        src={HeroImage}
        alt="hero"
        // className="absolute inset-0 h-fill w-full object-cover rounded-md"
        className="absolute inset-0 h-screen w-full object-cover rounded-md"
      />
      <div className="container mx-auto px-4 lg:px-8 xl:px-0">
        <div className="relative  z-10  top-0  xl:top-20 lg:max-w-2xl px-4">
          <div className="flex justify-center items-center xl:justify-start xl:items-start xl:h-[64dvh] mt-52 flex-col text-white">
            <p className="mb-4  text-base font-extralight xl:text-start ">
              No Lines. Less hassle, Lower Costs.
            </p>
            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl text-center xl:text-start font-normal leading-[100px] ">
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
      </div>
    </>
  );
};

export default HeroSection;
