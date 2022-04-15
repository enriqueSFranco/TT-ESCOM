// Objetos que inicializan los formularios
let now = new Date();


export const studentInitialForm = {
  t100_name: "",
  t100_boleta: "",
  t100_email: "",
  password: "",
};

export const updateStudentInitialForm = {
  t100_name: "",
  t100_phonenumber: "",
  t100_residence: "",
  t100_speciality: "",
  t100_travel: false,
};

export const companyInitialForm = {
  t300_name: "",
  t300_rfc: "",
  t300_nss: 0,
  t300_email: "",
  t300_bussiness_name: "",
  t300_web_page: "https://www.company.com.mx/",
  t300_mision: "",
  t300_vision: "",
  t300_objective: "",
  t300_logo: null,
  t300_banner: null,
  t400_id_admin: "",
  t300_create_date: "2022-03-24",
};

export const postJobInitialForm = {
  t200_job: "",
  t200_description: "",
  t200_requirements: "",
  t200_benefits: "",
  t200_check_time: "00:00:00",
  t200_closing_hour: "00:00:00",
  t200_work_days: "0000000",
  t200_min_salary: 0,
  t200_max_salary: 0,
  t200_gross_salary: false,
  t200_home_ofice: false,
  t200_publish_date:
    now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
  t200_close_date:
    now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
  t300_id_company: 1,
  c207_id_experience: 1,
  c206_id_profile: 1,
  c204_id_vacant_status: 1,
  t301_id_recruiter: 1,
  t400_id_admin: null,
};

