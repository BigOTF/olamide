"use client";

import { motion } from "framer-motion";

export function ScrollDownArrow() {
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={handleClick}
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="cursor-pointer"
    >
      <img src={"/scroll.svg"} />
    </motion.button>
  );
}