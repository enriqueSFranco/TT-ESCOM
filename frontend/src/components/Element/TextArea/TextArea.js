import React from "react"

import styles from "../Styles.module.css";

const TextArea = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange
}) => {
  return (
    <textarea
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

export default TextArea;