import React from 'react';
import { Link } from 'react-router-dom';
import burrito from 'images/emoji_cool.jpg'
import styles from './Confirm.module.css';

/**
 * @param {Function} deleteJob es la funcion que desencadenara la accion de postularte a una vacante.
 **/
const Confirm = ({ deleteJob, isDeletedJob, job }) => {
  let message = "";
  console.log(isDeletedJob);

  return (
    <div className={styles.wrapper}>
    {
      Object.keys(isDeletedJob).length === 0 ? (
        <>
          <h1 className={styles.title}>Estas seguro de eliminar la vacante {job}?</h1>
          <button className={styles.btndelateJob} onClick={deleteJob}>Borrar</button>
        </>
      ) : (
        <>
          <p className={styles.message}>{isDeletedJob.message}</p>
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