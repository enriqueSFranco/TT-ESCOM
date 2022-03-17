import styles from "./Styles.module.css";
import React from "react";
const Label = ({ children, htmlFor }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={styles.input}
    >
      {children}
    </label>
  );
};

export default Label;