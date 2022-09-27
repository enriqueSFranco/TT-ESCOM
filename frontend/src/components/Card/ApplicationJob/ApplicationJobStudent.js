import React from 'react';
import { numberFormat } from 'utils/numberFormat';
import Chip from 'components/Chip/Chip'
import './ApplicationJobStudent.css';

function replaceBackSpace(string) {
  return string.replace(' ', '-').toLowerCase()
}

const ApplicationJobStudent = ({nameJob, salary, modality, experience, state, workingHours}) => {

  return (
    <article className='wrapper'>
      <h1 className='nameJob'>{nameJob}</h1>
      <div className='tags'>
        <Chip label={`$${numberFormat(salary).slice(4,)}`} bg='var(--bg-color_1)' color='var(--color_1)' />
        <Chip label={modality ? "Presencial" : "Remoto"} bg='var(--bg-color_2)' color='var(--color_2)' />
        <Chip label={`Experiencia:${experience}`} bg='var(--bg-color_3)' color='var(--color_3)' />
      </div>
      <p className='paragraph'>Horario: <span>{workingHours}</span></p>
      <p className='state'>Postulacion: <span className={`${replaceBackSpace(state)} tag-state`}>{state}</span></p>
    </article>
  )
};

export default ApplicationJobStudent;
