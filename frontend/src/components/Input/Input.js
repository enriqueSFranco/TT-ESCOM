import React from "react"

import styles from "./Styles.module.css";

const Input = ({
  type,
  id,
  name,
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