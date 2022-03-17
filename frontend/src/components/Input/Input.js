import styles from "./Styles.module.css";
import React from "react";

const Input = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder=" "
      className={styles.inputField}
      value={value}
      onChange={onChange}
    />

  )
}

export default Input;