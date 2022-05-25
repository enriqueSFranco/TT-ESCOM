import React from "react";
import styles from "./Filter.module.css";

const FilterHomeOffice = ({ onChange }) => {

  return (
      <div className={`${styles.select} ${styles.selectModalityJob}`}>
      <select name="business" id="business" onChange={onChange}>
        <option value={1}>Presencial</option>
        <option value={2}>Remoto</option>
        <option value={3}>Hibrido</option>
      </select>
    </div>
  );
};

export default FilterHomeOffice;
