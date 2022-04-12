import React from "react";
import Objects from "./Objects";
import Interests from "./Interests";
import Languajes from "./Languajes";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.conteiner}>
      <Objects />
      <Interests />
      <Languajes />
    </div>
  );
};
export default AboutMe;
