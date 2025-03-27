import { FC, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const Heading: FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`font-medium text-5xl text-text ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
