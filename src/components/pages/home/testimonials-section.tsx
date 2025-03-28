import { useRef } from "react";
import { ClientOne } from "../../../assets/images";
import Heading from "../../common/heading";
import TestimonialCard from "../../common/testimonial-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "../../../assets/icons";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Nicholas O.",
    description:
      "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed.  I was so surprised. Thank you Recovery Delivered!",
    image: ClientOne,
  },
  {
    id: 2,
    name: "Christine M.",
    description:
      "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
    image: ClientOne,
  },
  {
    id: 3,
    name: "Nicholas O.",
    description:
      "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
    image: ClientOne,
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-primary text-base font-thin uppercase">
            Our Client's
          </p>
          <div className="flex items-center justify-between">
            <Heading>Testimonials</Heading>
            <div className="flex items-center gap-4 lg:gap-8">
              <button
                onClick={previous}
                className="border-text-700 border rounded-full p-1"
              >
                <ArrowLeft />
              </button>
              <button onClick={next} className="bg-primary rounded-full p-1">
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          ref={sliderRef}
          className="testimonial-slider py-8 group/container"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
