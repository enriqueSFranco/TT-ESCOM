import React from "react";
import styles from "./AboutMe.module.css";
import Objects from "./Objects";
import Interests from "./Interests";
import Languajes from "./Languajes";
import { motion } from "framer-motion/dist/framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      className={styles.conteiner}
    >
      <Objects />
      <Interests />
      <Languajes />
    </motion.div>
  );
};
export default AboutMe;
