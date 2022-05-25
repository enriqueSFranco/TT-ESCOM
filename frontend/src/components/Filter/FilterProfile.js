import React from 'react';
import styles from "./Filter.module.css";

const FilterProfile = ({onChange}) => {
  return (
    <div className={`${styles.select} ${styles.selectProfile}`}>
      <select name="profile" id="profile" onChange={onChange}>
        <option value="allProfile">Perfil</option>
        <option value={1}>Cursando</option>
        <option value={2}>Trunco</option>
        <option value={3}>En proceso de Titulacion</option>
        <option value={4}>Pasante</option>
        <option value={5}>Titulado</option>
      </select>
    </div>
  )
}

export default FilterProfile;