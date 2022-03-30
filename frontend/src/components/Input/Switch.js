import styles from "./Styles.module.css";

const Switch = ({ label, name, id, value, onChange, ...rest }) => {
  return (
    <>
      <label className={styles.wrapperSwitch}>
        <input
          className={styles.inputSwitch}
          type="checkbox" 
          name={name}
          id={id} 
          value={value} 
          onChange={onChange}
          {...rest}
        />
        <span className={`${styles.sliderSwitch} ${styles.check}`}></span>
      <span className={styles.label}>{label}</span>
      </label>
    </>
  )
};

export default Switch;