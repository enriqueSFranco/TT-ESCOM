import React from 'react';
import styles from "./Filter.module.css";

const FilterProfile = () => {
  return (
    <div className={styles.select}>
      <select name="profile" id="profile">
        <option value="estudiante">Estudiante</option>
        <option value="pasante">Pasante</option>
        <option value="titulado">Titulado</option>
      </select>
    </div>
  )
}

export default FilterProfile;