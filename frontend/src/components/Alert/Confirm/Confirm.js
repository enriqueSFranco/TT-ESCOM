import React from 'react';
import styles from './Confirm.module.css';

/**
 * @param {Function} applyJob es la funcion que desencadenara la accion de postularte a una vacante.
 **/
const Confirm = ({ applyJob, job }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Estas seguro de aplicar a la vacante {job}?</h1>
      <button className={styles.btnApplyJob} onClick={applyJob}>Postularme</button>
      {/* <button onClick={closeModal}>Cancelar</button> */}
    </div>
  )
}

export default Confirm;