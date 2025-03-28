import { Button } from "../../ui/material-tailwind";
// import { HeroImage } from "../../../assets/images";
import { ArrowUpRight } from "../../../assets/icons";
import Heading from "../../common/heading";

const HeroSection = () => {
  return (
    <section className="hero-imge bg-cover bg-center relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 xl:px-0">
        <div className="relative  z-2  top-0  xl:top-24  max-w-xl lg:max-w-2xl px-4">
          <div className=" items-center xl:justify-start xl:items-start xl:h-[62dvh] mt-52 flex-col text-white">
            <p className="mb-4  text-sm sm:text-base font-extralight xl:text-start ">
              No Lines. Less hassle, Lower Costs.
            </p>
            <Heading className="text-white text-4xl lg:text-6xl leading-[3rem] lg:leading-[4rem] my-4 font-normal ">
              Easy Online Suboxone Treatment for Opioid Addiction
            </Heading>

            <Button
              className="flex items-center gap-2 bg-primary normal-case hover:bg-primary/80 text-sm text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out px-2 py-2 "
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
    </section>
  );
};

export default HeroSection;
