import React from "react"

import styles from "../Styles.module.css";

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