import React from "react";
import styles from "./Filter.module.css";

const FilterHomeOffice = ({ value, onChange }) => {

  return (
    <>
      <label className={styles.wrapperSwitch}>
        <input
          className={styles.inputSwitch}
          type="checkbox"
          name="homeOffice"
          id="homeOffice"
          value={value}
          onChange={onChange}
        />
        <span className={`${styles.sliderSwitch} ${styles.check}`}></span>
        <span className={styles.label}>Remoto</span>
      </label>
    </>
  );
};

export default FilterHomeOffice;
