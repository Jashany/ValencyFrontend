/* eslint-disable react/prop-types */
import {motion} from "motion/react";

const FlowElement = ({ title, size = "big" }) => {
  const fontSize = size === "big" ? "text-3xl px-20 py-10" : "text-lg px-12 py-5";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
    viewport={{ once: true, amount: 0.5 }} className="text-center bg-gradient-to-r from-[#AAE6E7] to-[#95E362] rounded-lg p-0.5">
      <span
        className={`flex w-full bg-[#1D1D1D] text-white ${fontSize} rounded-md`}
      >
        <p className={`break-words`}>{title}</p>
      </span>
    </motion.div>
  );
};

export default FlowElement;
