import React from 'react';
import './JobCard.css';

const JobCard = () => {
  return (
    <article className='card'>
      <div className='card_details'>
        <h2 className='title_company'>Google</h2>
        <h3 className='title_job'>Titulo de la vacante</h3>
        <div className='description_job'>Descripcion de la vacante</div>
        <div className='tag'>
          <span className='tag_salary'>Salario:</span>
          <br />
          <span className='tag_time'>Tiempo completo</span>
          <br />
          <span className='tag_location'>Ubicacion:</span>
        </div>
      </div>
    </article>
  )
}

/**
 * id: int
 * company_url: string
 * company: string
 * company_logo: img
 * location: string
 * title_job: string
 * description: string
 * full-time or middle time: string
 ***/

export default JobCard;