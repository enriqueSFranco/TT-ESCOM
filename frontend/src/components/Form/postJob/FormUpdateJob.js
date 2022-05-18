import React, { useState, useContext, useEffect } from "react";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
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
  const [jobInfo, setJobInfo] = useState([]);
  const { 
    form, 
    errors, 
    setJobData,
    handleChange, 
    handleChecked, 
    onSubmitPostJob 
  } = useForm(postJobInitialForm, validateForm);

  useEffect(() => {
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
  //console.log(token);
  //console.log(recruiter);
  console.log(job);
  console.log(jobInfo);

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