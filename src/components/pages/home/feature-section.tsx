import Heading from "../../common/heading";
import { CbsNews, Abc, Fox, Nbc } from "../../../assets/icons";
const ICONS = [CbsNews, Abc, Fox, Nbc];
import Slider from "react-slick";
const FeatureSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 space-y-4 lg:space-y-0 ">
      <p className="text-primary text-base font-thin uppercase">As Seen</p>
      <div className="flex flex-col lg:flex-row  justify-between lg:items-center space-y-4 lg:space-y-0">
        <Heading>Featured On</Heading>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        <div className="w-full lg:w-1/2 ">
          <Slider {...settings}>
            {ICONS.map((Icon, index) => (
              <img
                key={index}
                src={Icon}
                alt=""
                className=" w-12 h-12 md:w-16 md:h-16"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
