import { Button } from "../../ui/material-tailwind";
import Heading from "../../common/heading";
import { ArrowUpRight } from "../../../assets/icons";
import SuboxoneCard from "../../common/suboxone-card";
const SUBOXONE_STEP = [
  {
    id: 1,
    title: "Step 1 - Download The App",
    description: "Click the link to download our app to get started.",
  },
  {
    id: 2,
    title: "Step 2 - Complete Onboarding Process & Documents",
    description: "Provide medical history and sign treatment forms.",
  },
  {
    id: 3,
    title: "Step 3 - Schedule Your First Visit",
    description:
      "Our onboarding team will send you a link to book your first meeting. Many times, this is the same day.",
  },
  {
    id: 4,
    title: "Step 4 - Meet With Licensed Provider",
    description:
      "At the time of your appointment, open the app on your phone to have your visit.",
  },
];
const SuboxoneSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-primary/50 min-h-screen relative">
      <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 space-y-4 lg:space-y-0 ">
        <p className="text-primary text-base font-thin uppercase">
          Get same-day online
        </p>
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center space-y-4 lg:space-y-0">
          <Heading>Suboxone Treatment In 10 Minutes</Heading>
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

        <div className="suboxone-img z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-4 gap-4 relative lg:top-32">
            <div className="lg:col-span-2 lg:row-span-2 space-y-6 lg:space-y-20">
              {SUBOXONE_STEP.slice(0, 2).map((step) => (
                <SuboxoneCard key={step.id} {...step} />
              ))}
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-4 space-y-6 lg:space-y-20">
              {SUBOXONE_STEP.slice(2, 4).map((step) => (
                <SuboxoneCard key={step.id} {...step} />
              ))}
            </div>

            <div className="lg:col-span-3 lg:row-span-1 lg:col-start-2 lg:row-start-3 mt-10">
              <SuboxoneCard
                title="Step5 - Pick Up Medication"
                description="Your script will be sent to your pharmacy of choice for pick up the same day."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuboxoneSection;
