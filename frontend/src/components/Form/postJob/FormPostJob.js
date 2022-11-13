import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { postJob } from "services/jobs/index";
import { POST_NEW_JOB } from "types/newJob";
import LayoutHome from "Layout/LayoutHome";
import {
  getLocality,
  getAllCatalogueExperience,
  getAllContracTypes,
  getAllCandidateProfile,
} from "services/catalogs";
import Input from "components/Input/Input";
// import Switch from "components/Switch/Switch";
import TextEditor from "components/TextEditor/TextEditor";
import { Autocomplete, TextField } from "@mui/material";
import Tooltip from "components/Tooltip/Tooltip";
import { MdLanguage, MdWork } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'
import { FaBrain } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import {
  Button,
  SubGroupInput,
  Form,
  GroupInput,
  Select,
  WrapperSelect,
  ContainerForm,
} from "./styled-componets/FormPostJobStyled";

// const validateForm = (form) => {
//   let errors = {};
//   let regex = {
//     t200_min_salary: /^[0-9]+$/,
//     t200_job: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,255}$/,
//   };

//   if (!form.t200_job.trim())
//     errors.t200_job = "El campo 'Titulo de la vacante' es requerido";
//   else if (!regex.t200_job.test(form.t200_job.trim()))
//     errors.t200_job =
//       "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

//   if (!form.t200_cp) errors.t200_cp = "El código postal es incorrecto";

//   return errors;
// };

const FormPostJob = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [body, setBody] = useState("");
  const { form, handleChange } = useForm(POST_NEW_JOB);
  const [exp, setExp] = useState("");
  const [expList, setExpList] = useState(null);
  const [cp, setCP] = useState("");
  const [localities, setLocalities] = useState(null);
  const [place, setPlace] = useState("");
  const [typeContract, setTypeContract] = useState("");
  const [typeContractList, setTypeContractList] = useState(null);
  const [profileCandidate, setProfileCandidate] = useState("");
  const [profileCandidateList, setProfileCandidateList] = useState(null);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    getAllCatalogueExperience()
      .then((res) => {
        setExpList(res);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getAllContracTypes()
      .then((res) => {
        setTypeContractList(res);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getAllCandidateProfile()
      .then((res) => {
        setProfileCandidateList(res);
      })
      .catch((error) => console.error(error));
  }, []);

  let newObject = {
    ...form,
    t200_description: body,
    t200_locality: place,
    t200_cp: cp,
    t301_id_recruiter: token?.user?.id,
  };

  // const handleVisible = (e) => setVisible(e.target.checked);

  const onSubmitPostJob = (e) => {
    e.preventDefault();
    postJob(newObject)
      .then((response) => {
        console.log(response);
        navigate("/dashboard");
      })
      .catch((error) => console.error(error));
  };

  const handleLocality = (e) => {
    const { value } = e.target;
    setCP(value);

    if (value !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
        })
        .catch((error) => console.error(error));
    }
  };

  if (!expList) return null;

  return (
    <LayoutHome>
      <ContainerForm>
        <h2
          style={{
            fontSize: "1.3rem",
            fontFamily: "System",
            margin: "1rem 0 0 0",
          }}
        >
          Agregar nueva vacante
        </h2>
        <Form onSubmit={onSubmitPostJob}>
          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <MdWork /> Titulo de la vacante
            </h2>
            <GroupInput>
              <Input
                label="Titulo de la vacante"
                width="500px"
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
          </section>

          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <HiLocationMarker /> Ubicacion
            </h2>
            <GroupInput>
              <Input
                label="Codigo postal"
                id="t200_cp"
                name="t200_cp"
                value={cp ? parseInt(cp) : ""}
                onChange={handleLocality}
              />
              <WrapperSelect>
                <Select
                  name="place"
                  id="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                >
                  <option value="" disabled>
                    Seleccione una localidad
                  </option>
                  {localities &&
                    localities?.map((township) => (
                      <option
                        key={`localities-id-${crypto.randomUUID()}`}
                        value={township.c222_locality}
                      >
                        {township.c222_locality}
                      </option>
                    ))}
                </Select>
              </WrapperSelect>
              <Input
                label="Calle"
                id="t200_street"
                name="t200_street"
                value={form.t200_street}
                onChange={handleChange}
              />
            </GroupInput>
          </section>

          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <ImProfile /> Perfil del candidato
            </h2>
            <GroupInput>
              <WrapperSelect>
                <Select
                  name="profileCandidate"
                  id="profileCandidate"
                  value={profileCandidate}
                  onChange={(e) => setProfileCandidate(e.target.value)}
                >
                  <option value="" disabled>
                    Perfil del candidato
                  </option>
                  {profileCandidateList &&
                    profileCandidateList?.map((el) => (
                      <option
                        key={`profile-candidate-${crypto.randomUUID()}`}
                        value={el.c206_description}
                      >
                        {el.c206_description}
                      </option>
                    ))}
                </Select>
              </WrapperSelect>

              <WrapperSelect>
                <Select
                  name="exp"
                  id="exp"
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                >
                  <option value="" disabled>
                    Nivel de Experiencia
                  </option>
                  {expList &&
                    expList?.map((el) => (
                      <option
                        key={`exp-${crypto.randomUUID()}`}
                        value={el.c207_description}
                      >
                        {el.c207_description}
                      </option>
                    ))}
                </Select>
              </WrapperSelect>

              <WrapperSelect>
                <Select
                  name="typeContract"
                  id="typeContract"
                  value={typeContract}
                  onChange={(e) => setTypeContract(e.target.value)}
                >
                  <option value="" disabled>
                    Tipo de contratacion
                  </option>
                  {typeContractList &&
                    typeContractList?.map((el) => (
                      <option
                        key={`type-contract${crypto.randomUUID()}`}
                        value={el.c208_description}
                      >
                        {el.c208_description}
                      </option>
                    ))}
                </Select>
              </WrapperSelect>
            </GroupInput>
          </section>

          {/* HABILIDADES REQUERIDAS Y OPCIONALES */}
          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <FaBrain /> Agregar las habilidades requeridas y opcionales para la vacante
            </h2>
            <GroupInput>
              <SubGroupInput>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Habilidades requeridas" />
                  )}
                />
                <Tooltip title="Agregar una nueva habilidad">
                  <Button>+</Button>
                </Tooltip>
              </SubGroupInput>
              <SubGroupInput>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Habilidades opcionales" />
                  )}
                />
                <Tooltip title="Agregar una nueva habilidad">
                  <Button>+</Button>
                </Tooltip>
              </SubGroupInput>
            </GroupInput>
          </section>

          {/* IDIOMAS */}
          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <MdLanguage /> Idioma/Dialecto
            </h2>
            <GroupInput>
              <SubGroupInput>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Idioma/Dialecto" />
                  )}
                />
              </SubGroupInput>
            </GroupInput>
          </section>
          {/* <GroupInput>
            <Switch label='Fecha de cierre' name='visible' id='visible' value={visible} onChange={handleVisible} />
            {visible && <input type="date" />}
          </GroupInput> */}
          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              Detalles de la vacante
            </h2>
            <TextEditor
              id="body"
              name="body"
              onChange={(newValue) => setBody(newValue)}
              value={body}
            />
          </section>
          {/* <Button type="submit">Enviar a revision</Button> */}
        </Form>
      </ContainerForm>
    </LayoutHome>
  );
};

export default FormPostJob;
