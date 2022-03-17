import styles from "./Styles.module.css";
import React from "react";
const Span = ({ content }) => {
  return (
    <span className={styles.inputLabel}>{content}</span>
  )
};

export default Span;