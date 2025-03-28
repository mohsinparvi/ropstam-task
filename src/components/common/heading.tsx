import { FC, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const Heading: FC<HeadingProps> = ({ children, className = "text-text" }) => {
  return (
    <h1
      className={`font-medium text-3xl sm:text-4xl md:text-5xl  ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
