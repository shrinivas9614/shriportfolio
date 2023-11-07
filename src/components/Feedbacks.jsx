import React, { useEffect, useState } from "react";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionComponant } from "./HOC";
import axios from "axios";
import { API_GET_URL } from "./FeedbackForm/baseUrl";
import { Tilt } from "react-tilt";
import { styles } from "../style";

const FeedbackCard = ({ index, name, email, feedback }) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full"
      >
        <div className="grid gap-4 ">
          <div className="bg-[#915eff] flex justify-center h-[3rem] mb-5 w-[3rem] rounded-3xl">
            <p className="text-white font-semibold text-[2rem]">
              {name[0].toUpperCase()}
            </p>
          </div>
          <span className="blue-text-gradient">{name} </span>
          <span className="text-sm opacity-30"> {email} </span>
        </div>
        <div className="mt-4">
          <p className="text-white tracking-wider text-[18px]">{feedback}</p>
        </div>
      </motion.div>
    </>
  );
};

const Feedbacks = () => {
  const [data, setData] = useState([]);
  const [feedbackCount, setFeedbackCount] = useState(0);

  const getUserData = () => {
    axios
      .get(`${API_GET_URL}`)
      .then((response) => {
        console.log("user data", response.data);
        setData(response.data);
        setFeedbackCount(response.data.length); // Set the feedback count
      })
      .catch((error) => {
        error; // handle any errors
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()} className="mt-4 mb-4">
          <p className={styles.sectionSubText}>What others say About Me</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <p className="text-[30px] mb-10">
          {feedbackCount} Feedbacks Received From People
        </p>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {data.map((userData, index) => {
          return (
            <FeedbackCard key={userData.name} index={index} {...userData} />
          );
        })}
      </div>
    </div>
  );
};

export default SectionComponant(Feedbacks, "testimonials");
