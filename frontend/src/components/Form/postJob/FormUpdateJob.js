import React, { useState, useContext, useEffect } from "react";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../../types/schemes";
import FormPostJobLocation from "./FormPostJobLocation";
import { getJob } from "services/jobs/index";
import FormPostJobDetails from "./FormPostJobDetails";
import styles from "./FormPostJob.module.css";
import AuthContext from "context/AuthContext";
import { getRecruiterInfo } from "services/recruiter/index";


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
    errors.t200_cp = "El códigó postal es incorrecto"

  return errors;
};

const FormUpdateJob = ({job}) => {
  const [step, setStep] = useState(1);
  const { user, token } = useContext(AuthContext);
  const [recruiter, setRecruiter] = useState([]);
  const [jobInfo, setJobInfo] = useState(job);
  const { 
    form, 
    errors, 
    setJobData,
    handleChange, 
    handleChecked, 
    onSubmitPostJob 
  } = useForm({...postJobInitialForm,
            t200_job : jobInfo[0]?.t200_job,
            t200_description : jobInfo[0]?.t200_description,
            t200_benefits : jobInfo[0]?.t200_benefits,
            t200_check_time : jobInfo[0]?.t200_check_time,
            t200_closing_hour : jobInfo[0]?.t200_closing_hour,
            t200_work_days : jobInfo[0]?.t200_work_days,
            c207_id_experience : jobInfo[0]?.c207_id_experience?.c207_id_experience,
            t200_min_salary : jobInfo[0]?.t200_min_salary,
            t200_max_salary : jobInfo[0]?.t200_max_salary,
            t200_gross_salary : jobInfo[0]?.t200_gross_salary,
            t200_salary_negotiable : jobInfo[0]?.t200_salary_negotiable,
            c214_id_modality : jobInfo[0]?.c214_id_modality?.c214_id_modality,
            c206_id_profile : jobInfo[0]?.c206_id_profile?.c206_id_profile,
            c204_id_vacant_status : jobInfo[0]?.c204_id_vacant_status?.c204_id_vacant_status,
            c208_id_contract : jobInfo[0]?.c208_id_contract?.c208_id_contract,
            t200_publish_date : jobInfo[0]?.t200_publish_date,
            t200_close_date : jobInfo[0]?.t200_close_date,
            t200_state : jobInfo[0]?.t200_state,
            t200_municipality : jobInfo[0]?.t200_municipality,
            t200_locality : jobInfo[0]?.t200_locality,
            t200_street : jobInfo[0]?.t200_street,
            t200_cp : jobInfo[0]?.t200_cp,
            t200_interior_number : jobInfo[0]?.t200_interior_number,
            t200_exterior_number : jobInfo[0]?.t200_exterior_number,
            t200_vacancy : jobInfo[0]?.t200_vacancy,
  }, validateForm);

  /*useEffect(() => {
    getRecruiterInfo(token?.user?.user_id)
      .then((response) => {
        setRecruiter(response);
        form.t301_id_recruiter = token?.user?.user_id;
        form.t300_id_company  = recruiter[0]?.t300_id_company?.t300_id_company;
      })
      .catch((error) => console.error(error));
  }, []);

  /*useEffect(() => {
    if (idJob) {
      getJob(idJob)
        .then((response) => {
          console.log(response);
          setJobInfo(response);          
          setJobData(jobInfo[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [idJob]);*/

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  console.log(form);
  console.log(jobInfo);
  //console.log(token);
  //console.log(recruiter);
  console.log(job);

  if (job && !form)
    return null;

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
      />
    );
  }
};

export default FormUpdateJob;
