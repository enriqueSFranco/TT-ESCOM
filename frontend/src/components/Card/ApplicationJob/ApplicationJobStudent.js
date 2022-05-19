import React from 'react';
import { numberFormat } from 'utils/numberFormat';
import Chip from '@mui/material/Chip';
import {GiMoneyStack} from 'react-icons/gi';
// import { IoBusiness } from 'react-icons/io5';
import { MdBusinessCenter, MdHomeWork } from 'react-icons/md';
import styles from './ApplicationJobStudent.module.css';

const ApplicationJobStudent = ({nameJob, salary, modality, nameBusisness, workingHours}) => {

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.nameJob}>{nameJob}</h1>
      <div className={styles.tags}>
        <Chip label={numberFormat(salary).slice(4,)} size="small" icon={<GiMoneyStack style={{color: "green"}} />} />
        <Chip label={modality ? "Presencial" : "Remoto"} size="small" icon={modality ? <MdBusinessCenter style={{color: "#78909c"}} /> : <MdHomeWork style={{color: "#028dd4"}} />} />
        {/* <Chip label={typeBusiness} size="small" icon={<IoBusiness style={{color: "#78909c"}} />} /> */}
      </div>
      <p className={styles.paragraph}>Empresa: {nameBusisness}</p>
      <p className={styles.paragraph}>Horario: {workingHours}</p>
      {/* <p className={styles.state}> Estado: <span className={`${vacantState === "Abierta" ? `${styles.green}` : null}`}>{vacantState}</span></p> */}
    </article>
  )
};

export default ApplicationJobStudent;
