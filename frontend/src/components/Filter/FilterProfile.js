import React from 'react';
import styles from "./Filter.module.css";

const FilterProfile = ({value, onChange}) => {
  return (
    <div className={`${styles.select} ${styles.selectProfile}`}>
      <select name="profile" id="profile" onChange={onChange}>
        <option value="allProfile">Perfil</option>
        <option value={value}>Cursando</option>
        <option value={value}>Trunco</option>
        {/* <option value={3}>En proceso de Titulacion</option> */}
        <option value={value}>Pasante</option>
        <option value={value}>Titulado</option>
      </select>
    </div>
  )
}

export default FilterProfile;