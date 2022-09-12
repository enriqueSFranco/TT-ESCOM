/* Usado para realizar pre Registro de empresa */
export const createCompany = (company) => {
  const formatterCompany = {
    t300_name: company.t300_name,
    t300_rfc: company.t300_rfc,
    t300_bussiness_name: company.t300_bussiness_name,
    t300_create_date: company.t300_create_date,
    t301_name: company.t301_name,
    t301_last_name: company.t301_last_name,
    t301_email: company.t301_email,
    t301_phonenumber: company.t301_phonenumber
  }
  return formatterCompany
}

/* Usado para actualizar empresa */
export const updateCompany = (company) => {
  const formatterCompany = {
    t300_name: company.t300_name,
    t300_rfc: company.t300_rfc,
    t300_email: company.t300_email,
    t300_bussiness_name: company.t300_bussiness_name,
    t300_web_page: company.t300_web_page,
    t300_mision: company.t300_mision,
    t300_vision: company.t300_vision,
    t300_objective: company.t300_objective
  }
  return formatterCompany 
}

/* Usado para crear reclutador */
export const createRecruiter = (recruiter) => {
  const formatterRecruiter = {
    t301_name: recruiter.t301_name,
    t301_last_name: recruiter.t301_last_name,
    t301_email: recruiter.t301_email,
    t301_phonenumber: recruiter.t301_phonenumber,
    t300_id_company: recruiter.t300_id_company
  }
  return formatterRecruiter
}

/* Usado para actualizar reclutador */
export const updateRecruiter = (recruiter) => {
  const formatterRecruiter = {
    t301_name: recruiter.t301_name,
    t301_last_name: recruiter.t301_last_name,
    t301_user: recruiter.t301_user,
    t301_email: recruiter.t301_email,
    t301_phonenumber: recruiter.t301_phonenumber,
    is_active: recruiter.is_active
  }
  return formatterRecruiter
} 