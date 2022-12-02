import React from 'react';
import { numberFormat, formatDate } from 'utils';
import Chip from 'components/Chip/Chip'
import './ApplicationJobStudent.css';

function replaceBackSpace(string) {
  return string.replace(' ', '-').toLowerCase()
}

const ApplicationJobStudent = ({nameJob, salary, modality, dateApplication, experience, state}) => {

  return (
    <article className={`wrapper`}>
      <div>
        <h2 className='nameJob'>{nameJob}</h2>
      </div>
      <div className='tags'>
        <Chip label={`$${numberFormat(salary).slice(4,)}`} bg='var(--bg-color_1)' color='var(--color_1)' />
        <Chip label={modality ? "Presencial" : "Remoto"} bg='var(--bg-color_2)' color='var(--color_2)' />
        <Chip label={`Experiencia:${experience}`} bg='var(--bg-color_3)' color='var(--color_3)' />
      </div>
      <div className='flex_container'>
        <span className='applicationDate'>Fecha de postulacion: {formatDate(dateApplication)}</span>
        <span className={`${replaceBackSpace(state)} tag-state`}>Postulacion: {state}</span>
      </div>
      {/* <p className='paragraph'>Horario: <span>{workingHours}</span></p> */}
    </article>
  )
};

export default ApplicationJobStudent;
