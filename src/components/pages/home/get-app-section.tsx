import { Button } from "../../ui/material-tailwind";
import { Heading } from "../../common";
const GetAppSection = () => {
  return (
    <section className="relative get-app ">
      <div className="container mx-auto px-4 lg:px-8 xl:px-0">
        <div className="flex justify-center items-center">
          <div className="flex justify-center  items-center flex-col  my-16 lg:my-24 max-w-5xl space-y-4">
            <p className="text-black text-base font-thin uppercase">
              Get Your Meds Online Today
            </p>
            <Heading className="text-center text-3xl md:text-4xl font-medium text-black">
              Secure Access to Your Medications
            </Heading>
            <p className="mb-4 text-sm sm:text-base font-extralight text-black text-center max-w-2xl">
              We have partnered with RX-Outreach to provide mail order
              medications at a fraction of the price you may find in your local
              pharmacy. Meet your chronic illness provider online today and get
              your medication delivered as quickly as 24 hours later.
            </p>
            <Button
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="flex items-center gap-2  text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out px-3 py-3 max-w-[230px]"
            >
              <span className="flex items-center gap-2">
                Get The App
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.05029 14.9497L5.40385 14.5962M7.52517 12.4748L8.58583 11.4142M10.7071 9.29285L14.9498 5.05021"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.46445 5.05033H14.9497"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9498 13.5356V5.05036"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAppSection;
