import styles from "./Styles.module.css";

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