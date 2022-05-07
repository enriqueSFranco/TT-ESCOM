import React, { useState } from "react";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
import FormPostJobLocation from "./FormPostJobLocation";
import FormPostJobDetails from "./FormPostJobDetails";
import styles from "./FormPostJob.module.css";

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

const FormPostJob = () => {
  const [step, setStep] = useState(1);
  const { 
    form, 
    errors, 
    handleChange, 
    handleChecked, 
    onSubmitPostJob 
  } = useForm(postJobInitialForm, validateForm);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

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

export default FormPostJob;
