import Content from "@/interfaces/Content";
import { FC } from "react";

const Content: FC<Content> = ({
  title,
  date,
  description,
  location,
  company,
}) => {
  return (
    <div>
      <h4 className="capitalize pb-0.5 font-semibold text-lg dark:text-neutral-100">
        {company} {company && "/"} {title}
      </h4>
      <span className="text-neutral-600 pb-0.5 dark:text-neutral-400">
        {date} / {location}
      </span>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
};

export default Content;
