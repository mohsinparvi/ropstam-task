import Heading from "../../common/heading";
import { CbsNews, Abc, Fox, Nbc } from "../../../assets/icons";
const ICONS = [CbsNews, Abc, Fox, Nbc];
const FeatureSection = () => {
  return (
    <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 space-y-4 lg:space-y-0 ">
      <p className="text-primary text-base font-thin uppercase">As Seen</p>
      <div className="flex flex-col lg:flex-row  justify-between lg:items-center space-y-4 lg:space-y-0">
        <Heading>Featured On</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ICONS.map((Icon, index) => (
            <img
              key={index}
              src={Icon}
              alt=""
              // className="h-8 w-8 rounded-full border-2 border-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
