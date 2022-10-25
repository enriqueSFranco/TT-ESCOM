/* Usado para crear vacante */
export const createVacant = (vacant) => {
  const formatterVacant = {
      t200_job : vacant.t200_job,
      t200_description : vacant.t200_description,
      t200_publish_date : vacant.t200_publish_date,
      t200_close_date : vacant.t200_close_date,
      t200_street : vacant.t200_street,
      t200_interior_number : vacant.t200_interior_number,
      t200_exterior_number : vacant.t200_exterior_number,
      t200_vacancy : vacant.t200_vacancy,
      t300_id_company : vacant.t300_id_company,
      c207_id_experience : vacant.c207_id_experience,
      c214_id_modality : vacant.c214_id_modality,
      c206_id_profile : vacant.c206_id_profile,
      c204_id_vacant_status : 1,
      c222_id_locality : vacant.c222_id_locality,
      c208_id_contract : vacant.c208_id_contract,
      t301_id_recruiter : vacant.t301_id_recruiter
  }
  return formatterVacant
}

/* Usada para actualizar vacante */
export const updateVacant = (vacant) => {
  const formatterVacant = {
      t200_job : vacant.t200_job,
      t200_description : vacant.t200_description,
      t200_publish_date : vacant.t200_publish_date,
      t200_close_date : vacant.t200_close_date,
      t200_street : vacant.t200_street,
      t200_interior_number : vacant.t200_interior_number,
      t200_exterior_number : vacant.t200_exterior_number,
      t200_vacancy : vacant.t200_vacancy,
      c207_id_experience : vacant.c207_id_experience,
      c214_id_modality : vacant.c214_id_modality,
      c206_id_profile : vacant.c206_id_profile,
      c204_id_vacant_status : vacant.c204_id_vacant_status,
      c222_id_locality : vacant.c222_id_locality,
      c208_id_contract : vacant.c208_id_contract
  }
  return formatterVacant
}

/* Usado para crear comunicados */
export const createCommunicate = (communicante) => {
  const formatterCommunicate = {
    t202_title: communicante.t202_title,
    t202_announcement: communicante.t202_announcement,
    t202_description: communicante.t202_description,
    t202_link: communicante.t202_link,
    t202_publish_date: communicante.t202_publish_date,
    t202_close_date: communicante.t202_close_date,
    t300_id_company: communicante.t300_id_company,
    t301_id_recruiter: communicante.t301_id_recruiter,
    t400_id_admin: communicante.t400_id_admin
  }
  return formatterCommunicate
}

/*Usado para solicitar filtrado de vacantes */
export const createFilter = (filter) => {
  const formatterFilter = {
    job: filter.job,
    company_name: filter.company_name,
    c206_id_profile: filter.c206_id_profile,
    id_modality: filter.id_modality
  }
  return formatterFilter
}