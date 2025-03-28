import { UsaImage } from "../../../assets/images";
import { MapPin } from "../../../assets/icons";
import Heading from "../../common/heading";
import UsaMap from "../../common/usa-map";

const LocationSection = () => {
  return (
    <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <p className="text-primary text-center text-base font-thin uppercase">
          As Seen
        </p>
        <Heading className="text-center ">Currently Serve</Heading>
        <p className="text-center w-full lg:w-3/4">
          We believe everyone should have access to treatment and care. That’s
          why we’re teaming up with providers all over the country. Click on a
          green state to see the insurance companies we currently accept and to
          learn more about online Suboxone doctors in your area.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 my-8">
        <div className="space-y-2">
          <img
            src={UsaImage}
            alt="usa"
            className="w-full h-full object-cover"
          />
          <h2 className="font-bold text-3xl">Toronto</h2>
          <div className=" flex items-center text-lg gap-2 text-primary font-medium">
            <MapPin className="w-4 h-4" />
            <p>Ottawa St. and Homer Waston Blvd.</p>
          </div>
        </div>
               <div className="w-full md:w-1/2">
          <UsaMap />
        </div>

      </div>
    </div>
  );
};

export default LocationSection;
