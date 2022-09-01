import React, { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { POST_NEW_JOB } from "types/newJob";
import TextEditor from "components/TextEditor/TextEditor";

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

  if (!form.t200_cp) errors.t200_cp = "El código postal es incorrecto";

  return errors;
};

const FormPostJob = ({ idCompany }) => {
  const { token } = useAuth();
  const [body, setBody] = useState("");

  const { form, errors, handleChange, onSubmitPostJob } = useForm({
    ...POST_NEW_JOB,
    ...{
      t301_id_recruiter: token?.user?.user_id,
      t200_description: body,
      t300_id_company: idCompany,
    }
  },
    validateForm
  );
  

  // let result = {
  //   ...POST_NEW_JOB,
  //   ...{
  //     t301_id_recruiter: token?.user?.user_id,
  //     t200_description: body,
  //     t300_id_company: idCompany,
  //   }
  // }

  console.log('form: ',form.t200_description, ' => body',body);

  return (
    <form onSubmit={onSubmitPostJob}>
      <input
        type="text"
        id="t200_job"
        name="t200_job"
        value={form.t200_job}
        onChange={handleChange}
      />
      <TextEditor
        id="description"
        name="description"
        value={body}
        onChange={(newText) => setBody(newText)}
      />
      <input type="submit" value="enviar a revision" />
    </form>
  );
};

export default FormPostJob;
