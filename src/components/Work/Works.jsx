import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../style";
import { SectionComponant } from "../HOC";
import { projects } from "./workData";
import { Tilt } from "react-tilt";
import { github } from "../../assets";

const ProjectsCard = ({
  index,
  name,
  tags,
  description,
  source_code_link,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative wfull h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end mt-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]"> {name} </h3>
          <p className="mt-2 text-secondary text-[14px]"> {description} </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <div key={tag.name} className={`text-[14px ] ${tag.color}`}>
              #{tag.name}
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.dev varients={textVariant()}>
        <p className={styles.sectionSubText}>This Are My Projects</p>
        <h2 className={styles.sectionHeadText}> Projects </h2>
      </motion.dev>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3  text-secondary text-[20px] max-w-3xl leading-[30px]"
        >
          The following projects i created with my learning experience. This
          projects are based on the real time funcationalities. You can see this
          projects, all the projects source code is available to you
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectsCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionComponant(Works, "work");
