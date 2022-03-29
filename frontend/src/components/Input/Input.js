import React from "react"

import styles from "./Styles.module.css";

const Input = ({
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  text
}) => {
  return (
    <input
      type={type}
      autoComplete="off"
      id={id}
      name={name}
      placeholder=" "
      className={styles.inputField}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >{text}</input>

  )
}

export default Input;