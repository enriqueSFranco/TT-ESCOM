import React from 'react';
import { Link } from 'react-router-dom'
import { numberFormat, formatDate } from 'utils';
import Chip from 'components/Chip/Chip'
import { TiLocation } from 'react-icons/ti'
import { FaBrain } from 'react-icons/fa'
import './ApplicationJobStudent.css';

const ApplicationJobStudent = ({nameJob, salary, modality, dateApplication, experience, contract}) => {
  return (
    <article className={`wrapper`}>
      <div>
        <h2 className='nameJob'>{nameJob}</h2>
        <span>Contratacion: {contract}</span>
      </div>
      <div className='tags'>
        <Chip label={`$${numberFormat(salary).slice(4,)}`} bg='var(--bg-color_1)' color='var(--color_1)' />
        <Chip label={modality ? "Presencial" : "Remoto"} bg='var(--bg-color_2)' color='var(--color_2)' icon={<TiLocation style={{fontSize: "1rem"}} />} />
        <Chip label={`${experience}`} bg='var(--bg-color_3)' color='var(--color_3)' icon={<FaBrain style={{fontSize: "1rem"}} />} />
      </div>
      <div className='flex_container'>
        <span className='applicationDate'>Fecha de postulacion: {formatDate(dateApplication)}</span>
        <Link to="/mis-postulaciones">Ver detalles</Link>
      </div>
    </article>
  )
};

export default ApplicationJobStudent;
