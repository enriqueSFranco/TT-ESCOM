import styles from "./Styles.module.css";

const Span = ({ content }) => {
  return (
    <span className={styles.inputLabel}>{content}</span>
  )
};

export default Span;