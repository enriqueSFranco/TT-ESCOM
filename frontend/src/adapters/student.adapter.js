/* Usado para crear cuenta de Candidato */
export const createCandidate = (candidate) => {
  const formatterCandidate = {
    t100_email: candidate.t100_email,
    password: candidate.password
  }
  return formatterCandidate
}

/* Usado para actualizar información del candidato */
export const updateCandidate = (candidate) => {
  const formatterCandidate = {
    t100_boleta : candidate.t100_boleta,
    t100_name : candidate.t100_name,
    t100_last_name : candidate.t100_last_name,
    t100_username : candidate.t100_username,
    t100_cv : candidate.t100_cv,
    t100_email : candidate.t100_email,
    t100_gender : candidate.t100_gender,
    t100_date_of_birth : candidate.t100_date_of_birth,
    t100_personal_objectives : candidate.t100_personal_objectives,
    t100_speciality : candidate.t100_speciality,
    t100_phonenumber : candidate.t100_phonenumber,
    t100_residence : candidate.t100_residence,
    t100_modalities : candidate.t100_modalities,
    t100_target_salary : candidate.t100_target_salary,
    t100_travel : candidate.t100_travel,
    t100_interest_job : candidate.t100_interest_job,
    t100_profile_picture : candidate.t100_profile_picture,
    is_active : candidate.is_active
  }
  return formatterCandidate
}

/* Usado para registrar nuevo */
export const createLink = (data) => {
  const formatterLink = {
    t113_link : data.t113_link,
    t100_id_student : data.t100_id_student,
    c115_id_plataform : data.c115_id_plataform
  }
  return formatterLink
}

/* Usado para registrar historial academico */
export const createAcademicHistory = (data) => {
  const formatterHistorial = {
    t104_academic_unit : data.t104_academic_unit,
    t104_carreer : data.t104_carreer,
    t104_start_date : data.t104_start_date,
    t104_end_date : data.t104_end_date,
    t100_id_student : data.t100_id_student,
    c107_id_academic_level : data.c107_id_academic_level,
    c109_id_academic_state : data.c109_id_academic_state
  }
  return formatterHistorial
}

/* Usado para registrar historial laboral */
export const createLaboralHistory = (data) => {
  const formatterHistorial = {
    t103_corporation:data.t103_corporation,
    t103_employment:data.t103_employment,
    t103_description:data.t103_description,
    t103_start_date:data.t103_start_date,
    t103_end_date:data.t103_end_date,
    t100_id_student:data.t100_id_student
  }
  return formatterHistorial
}

/* Usado para registrar idiomas */
export const createLanguage = (data) => {
  const formatterLanguage = {
    t110_level : data.t110_level,
    c120_id_level : data.c120_id_level,
    t100_id_student : data.t100_id_student,
    c111_id_language : data.c111_id_language
  }
  return formatterLanguage
}

/* Usado para registrar proyectos */
export const createProyect = (data) => {
  const formatterProyect = {
    t117_project_name: data.t117_project_name,
    t117_group: data.t117_group,
    t117_job: data.t117_job,
    t117_link: data.t117_link,
    t117_description: data.t117_description,
    t117_start_date: data.t117_start_date,
    t117_end_date: data.t117_end_date,
    t100_id_student: data.t100_id_student,
    c118_project_type: data.c118_project_type
  }
  return formatterProyect
}

/* Usado para registrar certificaciones */
export const createCertification = (data) => {
  const formatterCertification = {
    t119_certification : data.t119_certification,
    t119_company : data.t119_company,
    t119_start_date : data.t119_start_date,
    t119_end_date : data.t119_end_date,
    t119_in_course : data.t119_in_course,
    t119_voucher_link : data.t119_voucher_link,
    t100_id_student : data.t100_id_student
  }
  return formatterCertification
}