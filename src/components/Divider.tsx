import React from 'react';
import { motion } from 'framer-motion';
import useDarkMode from 'use-dark-mode';
import "@/styles/Divider.css";

const Divider = () => {
  const darkMode = useDarkMode(false);

  return (
    <motion.div
      className={`${darkMode.value ? 'bg-yellow-700' : 'bg-orange-300'} h-2 w-full animation-divide`}
    ></motion.div>
  );
};

export default Divider;
