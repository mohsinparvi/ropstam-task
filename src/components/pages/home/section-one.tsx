import { Heading } from "../../common";

const CARD_ITEMS = [
  {
    id: 1,
    count: "500+",
    title: "Patients Treated",
  },
  {
    id: 2,
    count: "300+%",
    title: "Centers Nationwide",
  },
  {
    id: 3,
    count: "4.9/5",
    title: "Patients Satisfaction",
  },
];
const SectionOne = () => {
  return (
    <section className="section-one py-12">
      <div className="container  mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 w-full lg:w-1/3">
            <Heading>Breaking Barriers to Recovery</Heading>
            <h2 className="text-2xl font-bold mb-8"></h2>
            <p className="text-sm sm:text-base font-extralight">
              Our mission is to make Medication Assisted Treatment accessible to
              people in both major cities and rural communities. We’re deeply
              committed to removing obstacles to recovery, ensuring our clients
              get the support they need.
            </p>
          </div>
          <div className="space-y-4 w-full lg:w-1/2">
            <p className="text-sm sm:text-base font-extralight">
              We’re not just offering a service; we’re creating a lifeline. Our
              platform is designed to eliminate the challenges that often stand
              in the way of recovery—whether it’s stigma, inconvenience, or lack
              of access to quality care
            </p>

            <div className="flex items-start justify-normal gap-4 ">
              {CARD_ITEMS.map((item) => (
                <div key={item.id} className="space-y-4 ">
                  <h2 className=" text-primary  flex items-start ">
                    <span className="text-3xl font-medium">{item.count}</span>
                  </h2>
                  <p className="text-sm font-normal">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
