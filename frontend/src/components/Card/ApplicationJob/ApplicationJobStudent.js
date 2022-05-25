import React from 'react';
import { numberFormat } from 'utils/numberFormat';
import Chip from '@mui/material/Chip';
import {GiMoneyStack, GiSkills} from 'react-icons/gi';
import { MdBusinessCenter, MdHomeWork } from 'react-icons/md';
import styles from './ApplicationJobStudent.module.css';

const ApplicationJobStudent = ({nameJob, salary, modality, experience, nameBusisness, state, workingHours}) => {

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.nameJob}>{nameJob}</h1>
      <div className={styles.tags}>
        <Chip label={`$${numberFormat(salary).slice(4,)}`} size="small" icon={<GiMoneyStack style={{color: "green"}} />} />
        <Chip label={modality ? "Presencial" : "Remoto"} size="small" icon={modality ? <MdBusinessCenter style={{color: "#78909c"}} /> : <MdHomeWork style={{color: "#028dd4"}} />} />
        <Chip label={`Experiencia:${experience}`} size="small" icon={<GiSkills style={{color: "#78909c"}} />} />
      </div>
      <p className={styles.paragraph}>Empresa: <span>{nameBusisness}</span></p>
      <p className={styles.paragraph}>Horario: <span>{workingHours}</span></p>
      <p className={styles.state}> Estado de postulacion: <span className={`${state === "Abierta" ? `${styles.green}` : null}`}>{state}</span></p>
    </article>
  )
};

export default ApplicationJobStudent;
