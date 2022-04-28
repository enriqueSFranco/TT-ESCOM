// Objetos que inicializan los formularios
let now = new Date();


export const loginFormCompany = {
  t301_email: "",
  password: "",
};

export const studentInitialForm = {
  t100_name: "",
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
  t300_name:"",
  t300_rfc:"",
  t300_bussiness_name:"",
  t300_create_date:"2022-04-15",
  t301_name:"",
  t301_last_name:"",
  t301_email:"",    
  t301_phonenumber:""
}

export const postJobInitialForm = {
    t300_id_company : "",
    t200_job : "",
    t200_description : "",
    t200_requirements : "",
    t200_benefits : "",
    t200_check_time : "00:00:00",
    t200_closing_hour : "00:00:00",
    t200_work_days : "",
    c207_id_experience : 1,
    t200_min_salary : "",
    t200_max_salary : "",
    t200_gross_salary : "",
    t200_home_ofice : "",
    c206_id_profile : 1,
    c204_id_vacant_status : 1,
    t200_publish_date : 
      now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
    t200_close_date : 
      now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
    t200_state : "",
    t200_mucipality : "",
    t200_locality : "",
    t200_street : "",
    t200_cp : "",
    t200_interior_number : "",
    t200_exterior_number : "",
    t200_vacancy : "1",
    t200_contract_type : "",
    t301_id_recruiter : "",
    t400_id_admin : ""
};
