import { PlayButton } from "../../../assets/icons";
import { HeroImage } from "../../../assets/images";
import Heading from "../../common/heading";
const SectionTwo = () => {
  return (
    <section>
      <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start  md:gap-8">
          <div className="max-w-lg md:max-w-none space-y-4">
            <p className="text-primary text-base font-thin uppercase">
              Welcome To Recovery Delivered
            </p>
            <Heading>Your Fully Online Suboxone Treatment Platform</Heading>

            <p className="mt-4 text-text text-sm sm:text-base font-extralight ">
              100% online opioid treatment with licensed buprenorphine providers
              starts at just $99/month.
            </p>

            <p className="mt-4 text-text text-sm sm:text-base font-extralight">
              With monthly and weekly meetings based on where you are in your
              recovery. Get a same-day appointment and script.
            </p>
          </div>

          <div className="relative flex items-center justify-center w-full h-full max-w-lg md:max-w-none">
            <img src={HeroImage} className="rounded-2xl" alt="" />
            <img src={PlayButton} className=" cursor-pointer absolute" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
