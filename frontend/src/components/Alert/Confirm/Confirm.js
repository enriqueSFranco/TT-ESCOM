import React from 'react';
import { Link } from 'react-router-dom';
import burrito from 'images/emoji_cool.jpg'
import styles from './Confirm.module.css';

/**
 * @param {Function} applyJob es la funcion que desencadenara la accion de postularte a una vacante.
 **/
const Confirm = ({ applyJob, isApplyJob, job }) => {

  console.log(isApplyJob);
  //TODO: corregir casos del mensaje
  let message = '';
  if (isApplyJob.message==="Aplicación registrada correctamente.")
    message = "Mucho exito!!!";
  else if (isApplyJob.message === "Ya hay una postulación activa")
    message = "Ya te has postulado a esta vacante";
  
  return (
    <div className={styles.wrapper}>
    {
      Object.keys(isApplyJob).length === 0 ? (
        <>
          <h1 className={styles.title}>Estas seguro de aplicar a la vacante {job}?</h1>
          <button className={styles.btnApplyJob} onClick={applyJob}>Postularme</button>
        </>
      ) : (
        <>
          <p className={styles.message}>{isApplyJob.message}</p>
          <p className={styles.message}>{message}</p>
          <img src={burrito} alt="burrito_ipn" className={styles.imgBurrito} />
          <Link to="/mis-postulaciones" className={styles.goToApplicationJob}>ir a mis postulaciones</Link>
        </>
      )
    }
  </div>
  )
}

export default Confirm;