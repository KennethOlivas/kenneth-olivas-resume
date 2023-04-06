import { FC } from "react";

interface Props {
  title: string;
}
const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className="mb-1 text-2xl font-bold text-gray-700 tracking-wider uppercase dark:text-neutral-50">
      {title}
    </h1>
  );
};

export default Title;
