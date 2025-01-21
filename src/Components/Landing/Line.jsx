import {motion} from 'motion/react';

const Line = () => {

  return (
    <motion.div  initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
    style={{transformOrigin: "left"}}
    viewport={{ once: true, amount: 0.5 }} className="bg-gradient-to-r from-[#95E362] to-[#AAE6E7] w-12 h-1"></motion.div>
  );
};

export default Line;
