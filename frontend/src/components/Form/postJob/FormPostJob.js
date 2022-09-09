import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { postJob } from "services/jobs/index";
import { POST_NEW_JOB } from "types/newJob";
import { getLocality } from "services/catalogs";
import Input from "components/Input/Input";
import TextEditor from "components/TextEditor/TextEditor";
import { Button, Form, GroupInput, Select, WrapperSelect } from './styled-componets/FormPostJobStyled'


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

const FormPostJob = () => {
  const navigate = useNavigate()
  const { token } = useAuth();
  const [body, setBody] = useState("");
  const { form, handleChange } = useForm(POST_NEW_JOB);
  const [cp, setCP] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [place, setPlace] = useState(null)
  
  let newObject = { ...form, t200_description: body, t301_id_recruiter: token?.user?.id };

  const onSubmitPostJob = (e) => {
    e.preventDefault();
    postJob(newObject)
      .then((response) => {
        console.log(response);
        navigate("/mis-vacantes");
      })
      .catch((error) => console.error(error));
  };

  const handleLocality = (e) => {
    const { value } = e.target
    setCP(value);

    if (value !== "") {
      getLocality(value)
        .then((response) => {
          const [c222_state, c222_municipality] = response;
          setPlace(response);
          setState(c222_state);
          setTown(c222_municipality);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Form onSubmit={onSubmitPostJob}>
      <GroupInput>
        <Input
          label="Titulo de la vacante"
          width='500px'
          id="t200_job"
          name="t200_job"
          value={newObject.t200_job}
          onChange={handleChange}
        />
        <Input
          label="# de plazas"
          // id="t200_job"
          // name="t200_job"
          // value={newObject.t200_job}
          // onChange={handleChange}
        />
      </GroupInput>
      <GroupInput>
        <Input
          label="Codigo postal"
          id="t200_cp"
          name="t200_cp"
          value={cp ? parseInt(cp) : ''}
          onChange={handleLocality}
        />
        <WrapperSelect>
          <Select value={town} onChange={handleChange}>
            <option>Seleccione una localidad</option>
            {
              place && place?.map(township => (
                <option>{township.c222_locality}</option>
              ))
            }
          </Select>
        </WrapperSelect>
        <Input
          label="Calle"
          // id="t200_job"
          // name="t200_job"
          // value={newObject.t200_job}
          // onChange={handleChange}
        />
      </GroupInput>
      <GroupInput>
        <Input
            label="Perfil del candidato"
            // id="t200_job"
            // name="t200_job"
            // value={newObject.t200_job}
            // onChange={handleChange}
          />
          <Input
            label="Experiencia"
            // id="t200_job"
            // name="t200_job"
            // value={newObject.t200_job}
            // onChange={handleChange}
          />
          <Input
            label="Tipo de contratacion"
            // id="t200_job"
            // name="t200_job"
            // value={newObject.t200_job}
            // onChange={handleChange}
          />
      </GroupInput>
      <div>
        <TextEditor
          id="body"
          name="body"
          onChange={(newValue) => setBody(newValue)}
          value={body}
        />
      </div>
      <Button type="submit">Enviar a revision</Button>
    </Form>
  );
};

export default FormPostJob;
