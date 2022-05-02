import React from "react";
import styles from "./Filter.module.css";

const FilterHomeOffice = ({ value, handleChecked }) => {

  return (
    <>
      <label className={styles.wrapperSwitch}>
        <input
          className={styles.inputSwitch}
          type="checkbox"
          name="t200_home_ofice"
          id="t200_home_ofice"
          value={value}
          onChange={handleChecked}
        />
        <span className={`${styles.sliderSwitch} ${styles.check}`}></span>
        <span className={styles.label}>Remoto</span>
      </label>
    </>
  );
};

export default FilterHomeOffice;
