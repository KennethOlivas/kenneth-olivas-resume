import { FC } from "react";
import Title from "./Title";
import educationData from "@/data/educationData";
import experienceData from "@/data/experienceData";
import Content from "./Content";

const Education: FC = () => {
  return (
    <section className="col-span-2 md:col-span-8">
      <Title title="experience" />
      <div className="flex flex-col space-y-4 mb-6">
        {experienceData.map((experience, index) => (
          <Content
            key={index}
            title={experience.title}
            date={experience.date}
            description={experience.description}
            location={experience.location}
            company={experience.company}
          />
        ))}
      </div>
      <Title title="experience" />
      <div className="flex flex-col space-y-4">
        {educationData.map((education, index) => (
          <Content
            key={index}
            title={education.title}
            date={education.date}
            description={education.description}
            location={education.location}
            company={education.company}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
