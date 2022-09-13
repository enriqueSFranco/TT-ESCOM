import React from 'react';
import { numberFormat } from 'utils/numberFormat';
import Chip from 'components/Chip/Chip'
import styles from './ApplicationJobStudent.module.css';

const ApplicationJobStudent = ({nameJob, salary, modality, experience, nameBusisness, state, workingHours}) => {

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.nameJob}>{nameJob}</h1>
      <div className={styles.tags}>
        <Chip label={`$${numberFormat(salary).slice(4,)}`} bg='var(--bg-color_1)' color='var(--color_1)' />
        <Chip label={modality ? "Presencial" : "Remoto"} bg='var(--bg-color_2)' color='var(--color_2)' />
        <Chip label={`Experiencia:${experience}`} bg='var(--bg-color_3)' color='var(--color_3)' />
      </div>
      <p className={styles.paragraph}>Empresa: <span>{nameBusisness}</span></p>
      <p className={styles.paragraph}>Horario: <span>{workingHours}</span></p>
      <p className={styles.state}> Estado de postulacion: <span className={`${state === "Abierta" ? `${styles.green}` : null}`}>{state}</span></p>
    </article>
  )
};

export default ApplicationJobStudent;
