import { PlayButton } from "../../../assets/icons";
import { HeroImage } from "../../../assets/images";
const SectionTwo = () => {
  return (
    <section>
      <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start  md:gap-8">
          <div className="max-w-lg md:max-w-none space-y-4">
            <p className="text-primary text-base font-thin uppercase">
              Welcome To Recovery Delivered
            </p>
            <h2 className="text-4xl font-medium text-text-700">
              Your Fully Online Suboxone Treatment Platform
            </h2>

            <p className="mt-4 text-text">
              100% online opioid treatment with licensed buprenorphine providers
              starts at just $99/month.
            </p>

            <p className="mt-4 text-text">
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
