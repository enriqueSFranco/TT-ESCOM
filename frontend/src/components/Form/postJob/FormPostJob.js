import React, { useState, useContext, useEffect } from "react";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
import FormPostJobLocation from "./FormPostJobLocation";
import FormPostJobDetails from "./FormPostJobDetails";
import styles from "./FormPostJob.module.css";
import AuthContext from "context/AuthContext";
import { useFetch } from "hooks/useFetch";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t200_min_salary: /^[0-9]+$/,
    t200_job: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,255}$/,
  };

  if (!form.t200_job.trim())
    errors.t200_job = "El campo 'Titulo de la vacante' es requerido";
  else if (!regex.t200_job.test(form.t200_job.trim()))
    errors.t200_job =
      "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

  if(!form.t200_cp)
    errors.t200_cp = "El código postal es incorrecto"

  return errors;
};

const FormPostJob = ({idCompany}) => {
  const [step, setStep] = useState(1);
  const { token } = useContext(AuthContext);
  const { data } = useFetch("/api/catalogues/CatalogueSkills/");
  const [ vacantSkills, setVacantSkills ] = useState([]);
  const { 
    form, 
    errors, 
    handleChange, 
    handleChecked, 
    onSubmitPostJob 
  } = useForm({...postJobInitialForm, 
    t301_id_recruiter : token?.user?.user_id,
    t300_id_company : idCompany},validateForm);
  
  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);
  
  console.log(form);
  //console.log(form?.t300_id_company);
  //console.log(idCompany);  
    

  if (step === 1) {
    return (
      <div className={`container ${styles.wrapper}`}>
        <FormPostJobLocation
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleChecked={handleChecked}
          nextStep={nextStep}
        />
      </div>
    );
  } else if (step === 2) {
    return (
      <FormPostJobDetails
        form={form}
        handleChange={handleChange}
        onSubmit={onSubmitPostJob}
        prevStep={prevStep}
        skills = {data}
        vacantSkills = {vacantSkills} 
        setVacantSkills = {setVacantSkills}
      />
    );
  }
};

export default FormPostJob;
