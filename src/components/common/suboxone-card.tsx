import { FC } from "react";

type Props = {
  title: string;
  description: string;
};
const SuboxoneCard: FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border-2 border-primary shadow-sm">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default SuboxoneCard;
export { SuboxoneCard };
