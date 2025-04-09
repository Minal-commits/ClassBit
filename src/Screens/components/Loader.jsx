import { IconLoader } from "@tabler/icons-react";
import { motion } from "motion/react"
import React from "react";

const Loader = () => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <IconLoader/>
    </motion.div>
  );
};

export default Loader;
