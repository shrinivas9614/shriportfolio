// import React from "react";

// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionComponant } from "../HOC";
import { styles } from "../../style";

import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "./aboutData";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] px-12 py-5 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("feedback");

    if (contactSection) {
      // Calculate the scroll position to bring the contact section into view
      const yOffset = contactSection.getBoundingClientRect().top - 80;

      // Use window.scrollTo to scroll to the contact section
      window.scrollTo({
        top: yOffset,
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };
  return (
    <>
      <motion.dev varients={textVariant()}>
        <p className={styles.sectionSubText}>Brif Introduction</p>
        <h2 className={styles.sectionHeadText}> About Me </h2>
      </motion.dev>
      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, I am Shrinivas, a passionate frontend developer with expertise in
        React.js. I am dedicated to crafting seamless and engaging user
        experiences through my proficiency in web development. With a strong
        foundation in modern web technologies, I thrive on turning creative
        concepts into interactive, responsive, and user-friendly web
        applications. I am committed to staying at the forefront of the
        ever-evolving frontend landscape to deliver cutting-edge solutions. Lets
        build the future of the web together!
      </motion.p>
      <motion.div
        variants={fadeIn("right", "spring", 0.5)}
        className="mt-10 flex justify-start "
      >
        <button
          onClick={() => scrollToContact()}
          className="px-8 space-y-8 bg-[#151030] w-auto h-[3rem] rounded-xl hover:bg-[#262145] text-[15px] font-semibold text-white-100 "
          style={{ letterSpacing: "3px" }}
        >
          CONTACT ME.
        </button>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionComponant(About, "about");
