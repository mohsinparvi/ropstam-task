import { FC } from "react";

type Props = {
  className?: string;
};
const Logo: FC<Props> = ({ className }) => {
  return (
    <h1
      className={`${
        className ? className : "text-white"
      }  text-3xl lg:text-5xl  font-bold uppercase  `}
    >
      Logo
    </h1>
  );
};

export default Logo;
