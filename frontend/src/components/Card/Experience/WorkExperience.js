import React from 'react';
import styles from './Experience.module.css';

const WorkExperience = ({setTypeProject}) => {

  const handleClick = () => setTypeProject(null);

  return (
    <div className={styles.wrapperForm}>
      <h2 className={styles.titleModal}>Experiencia por experiencia laboral</h2>
      <form className={styles.formWorkExperience}>
        <input type="text" placeholder='nombre de la empresa en la que laboraste' />
        <input type="text" placeholder='puesto' />
        <div className={styles.wrapperInput}>
          <div>
            <h4>Fecha en la que entraste</h4>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <h4>Fecha en la que saliste</h4>
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='descripcion de tu proyecto'></textarea>
        <input type="submit" value="Agregar" />
      </form>
      <button onClick={handleClick}>Regresar</button>
    </div>
  )
}

export default WorkExperience