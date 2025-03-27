import Heading from "../../common/heading";
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
    <section className=" max-w-screen-xl mx-auto px-4 mt-56 lg:mt-28 xl:mt-0">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="space-y-4">
          <Heading>Breaking Barriers to Recovery</Heading>
          <h2 className="text-2xl font-bold mb-8"></h2>
          <p className="text-base font-normal">
            Our mission is to make Medication Assisted Treatment accessible to
            people in both major cities and rural communities. We’re deeply
            committed to removing obstacles to recovery, ensuring our clients
            get the support they need.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-base font-normal">
            We’re not just offering a service; we’re creating a lifeline. Our
            platform is designed to eliminate the challenges that often stand in
            the way of recovery—whether it’s stigma, inconvenience, or lack of
            access to quality care
          </p>

          <div className="flex items-start justify-normal gap-4 ">
            {CARD_ITEMS.map((item) => (
              <div key={item.id} className="space-y-4 ">
                <h2 className=" text-primary  flex items-start ">
                  <span className="text-3xl font-bold">{item.count}</span>
                </h2>
                <p className="text-sm font-normal">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
