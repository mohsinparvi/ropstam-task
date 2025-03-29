import { FC, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const Heading: FC<HeadingProps> = ({
  children,
  className = "text-text text-3xl ms:text-4xl font-medium ",
}) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export default Heading;
