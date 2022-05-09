import React from 'react';
import styles from './Experience.module.css';

const PersonalExperience = ({ setTypeProject }) => {

  const handleClick = () => setTypeProject(null);

  return (
    <div className={styles.wrapperForm}>
      <h2 className={styles.titleModal}>Experiencia por proyecto</h2>
      <form className={styles.form}>
        <input type="text" placeholder='nombre de tu proyecto' />
        <textarea name="" id="" cols="30" rows="10" placeholder='descripcion de tu proyecto'></textarea>
        <input type="text" placeholder='enlace de tu proyecto' />
        <input type="submit" value="Agregar" />
      </form>
      <button onClick={handleClick}>Regresar</button>
    </div>
  )
}

export default PersonalExperience