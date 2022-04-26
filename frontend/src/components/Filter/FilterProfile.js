import React from 'react';
import styles from "./Filter.module.css";

const FilterProfile = ({onChange}) => {
  return (
    <div className={styles.select}>
      <select name="profile" id="profile" onChange={onChange}>
        <option value="allProfile" disabled>Perfil</option>
        <option value="Estudiante">Estudiante</option>
        <option value="Becario">Becario</option>
        <option value="Titulado">Titulado</option>
        <option value="No definido">No definido</option>
      </select>
    </div>
  )
}

export default FilterProfile;