import React, { useRef, useState } from "react";
import { slideIn } from "../../utils/motion";
import { styles } from "../../style";
import { motion } from "framer-motion";
import { API_POST_URL } from "./baseUrl";
import axios from "axios";
import { SectionComponant } from "../HOC";
import Feedbacks from "../Feedbacks";
const FeedbackForm = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_POST_URL}`,

        form
      );

      // Handle the response as needed
      console.log("Server response:", response.data);
      alert(`${form.name} sent feedback succesfully...`);
      setForm({
        name: "",
        email: "",
        feedback: "",
      });
      // You can reset the form and show a success feedback to the user here.
    } catch (error) {
      alert("Error submitting form:", error);
      // Handle the error, e.g., show an error feedback to the user.
    }

    setLoading(false);
  };

  return (
    <div>
      <motion.div
        variants={slideIn("left", "tween ", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}> Write A Feedback </p>
        <h3 className={styles.sectionHeadText}> Feedback. </h3>
        <form
          onSubmit={handleSubmit}
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
            <span className="text-white font-medium mb-4">Your feedback</span>
            <textarea
              rows="7"
              value={form.feedback}
              onChange={handleChange}
              placeholder="Type Your feedback"
              name="feedback"
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
      </motion.div>
    </div>
  );
};

export default SectionComponant(FeedbackForm, "feedback");
