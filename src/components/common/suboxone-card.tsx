import { FC } from "react";

type Props = {
  title: string;
  description: string;
};
const SuboxoneCard: FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border-2 border-primary shadow-sm re">
      <h3 className="font-medium text-sm  mb-2">{title}</h3>
      <p className="text-text text-sm  font-extralight">{description}</p>
    </div>
  );
};

export default SuboxoneCard;
export { SuboxoneCard };
