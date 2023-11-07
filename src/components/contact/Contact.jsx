import React, { useRef, useState } from "react";
import { SectionComponant } from "../HOC";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { styles } from "../../style";
import { EarthCanvas } from "../canvas";
import * as bs from "react-icons/bs";
import emailjs from "@emailjs/browser";

const icons = [
  {
    icon: <bs.BsGithub />,
    color: "blue",
    link: "https://github.com/shrinivas9614",
  },
  {
    icon: <bs.BsLinkedin />,
    color: "blue",
    link: "https://www.linkedin.com/in/shrinivaskamlapurkar/",
  },
];

const Button = ({ index, icon, link }) => {
  return (
    <motion.div
      className="flex justify-center bg-[#171239] rounded-3xl cursor-pointer hover:bg-[#2a2739] hover:shadow-xl hover:shadow-[#2a2739] hover:delay-300  "
      variants={slideIn("left", "tween ", 0.2, 1)}
    >
      <div className="px-5 py-5  " onClick={() => window.open(link, "_blank")}>
        {icon}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    // template_wokh92n
    // service_w3woi6u
    // r61OLJb2yaKIILjfC
    emailjs
      .send(
        "service_w3woi6u",
        "template_wokh92n",
        {
          from_name: form.name,
          to_name: "Shrinivas Kamlapurkar",
          from_email: form.email,
          to_email: "shrikamlapurkar9614@gmail.com",
          message: form.message,
        },
        "r61OLJb2yaKIILjfC"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            `Thank You ${form.name}. I will get in touch with you as soon as possible`
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(`${form.name} something went Worng, pleas try again`);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween ", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}> Get in touch </p>
        <h3 className={styles.sectionHeadText}> Contact Me. </h3>
        <form
          onSubmit={handleClick}
          ref={formRef}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Full Name</span>
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              name="name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Full Email"
              name="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              value={form.message}
              onChange={handleChange}
              placeholder="Type Your Message"
              name="message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
        <div className="mt-16">
          <p className="text-white font-semibold text-2xl">
            Also You Can Get in touch ..{" "}
          </p>
          <motion.div className="mt-4 flex gap-[50px] rounded-3xl   ">
            {icons.map((ico, index) => {
              return <Button {...ico} index={index} key={ico} />;
            })}
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween ", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionComponant(Contact, "contact");
