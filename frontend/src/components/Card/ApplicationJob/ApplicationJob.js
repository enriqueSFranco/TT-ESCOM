import React from 'react';
import { numberFormat } from 'utils/numberFormat';
import Chip from '@mui/material/Chip';
import {GiMoneyStack} from 'react-icons/gi';
import { MdBusinessCenter, MdHomeWork } from 'react-icons/md';
import styles from './ApplicationJob.module.css';

const ApplicationJob = ({nameJob, salary, modality, nameBusisness, typeBusiness, workingHours}) => {
  return (
    <article className={styles.wrapper}>
      <h1 className={styles.nameJob}>{nameJob}</h1>
      <div className={styles.tags}>
        <Chip label={numberFormat(salary).slice(4,)} size="small" icon={<GiMoneyStack />} />
        <Chip label={modality ? "Remoto" : "Presencial"} size="small" icon={modality ? <MdHomeWork /> : <MdBusinessCenter />} />
        <Chip label="tipo de empresa" size="small" />
      </div>
      <p className={styles.paragraph}>Empresa: {nameBusisness}</p>
      <p className={styles.paragraph}>Horario: {workingHours}</p>
    </article>
  )
};

export default ApplicationJob;
