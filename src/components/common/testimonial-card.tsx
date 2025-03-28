import { FC } from "react";

type Props = {
  description: string;
  name: string;
  image: string;
};

const TestimonialCard: FC<Props> = ({ description, name, image }) => {
  return (
    <div className="border border-primary shadow-md rounded-lg space-y-4 p-4 h-full flex flex-col">
      <div className="flex mt-8 space-x-2">
        <StarIcon filled={true} />
        <StarIcon filled={true} />
        <StarIcon filled={true} />
        <StarIcon filled={true} />
        <StarIcon filled={true} />
      </div>
      <p className="text-base font-extralight text-text flex-grow line-clamp-4">
        {description}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <img
          src={image}
          alt="Client's Image"
          className="rounded-full w-10 h-10 object-cover"
        />
        <p className="text-base font-semibold text-text">- {name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <g clipPath="url(#clip0_1959_35)">
        <path
          d="M12.0005 17.27L18.1805 21L16.5405 13.97L22.0005 9.24L14.8105 8.63L12.0005 2L9.19049 8.63L2.00049 9.24L7.46049 13.97L5.82049 21L12.0005 17.27Z"
          fill={filled ? "#EECE43" : "text-gray-300"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1959_35">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
