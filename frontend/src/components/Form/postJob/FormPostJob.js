import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm, useFetch, useLanguage } from "hooks";
import { POST_NEW_JOB } from "types/newJob";
import {
  postJob,
  getLocality,
  getAllCatalogueExperience,
  getAllContracTypes,
  getAllCandidateProfile,
  updateVacant,
  getRecruiter,
} from "services";
import { Input } from "components/Input/Input";
import TextEditor from "components/TextEditor/TextEditor";
import { Autocomplete, TextField } from "@mui/material";
import { MdOutlineErrorOutline } from "react-icons/md";

import {
  Button,
  Form,
  GroupInput,
  Select,
  WrapperSelect,
  ContainerForm,
  TitleH1,
} from "./styled-componets/FormPostJobStyled";
import InputTag from "components/Input/InputTag";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t200_job: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,255}$/,
    t200_street: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9,.\s]{1,255}$/,
    t200_vacancy: /[0-9]/,
    t200_working_hours: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,255}$/,
    cp: /[0-9]/,
  };

  if (!form.t200_job.trim())
    errors.t200_job = "El campo 'Titulo de la vacante' es requerido";
  else if (!regex.t200_job.test(form.t200_job.trim()))
    errors.t200_job =
      "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

  if (!form.t200_vacancy)
    errors.t200_vacancy = "El campo 'Numero de plazas' es requerido";
  else if (!regex.t200_vacancy.test(form.t200_vacancy.trim()))
    errors.t200_vacancy =
      "El campo 'Numero de plazas' solo acepta letras y espacios en blanco.";

  if (!regex.t200_working_hours.test(form.t200_working_hours.trim()))
    errors.t200_working_hours = "El campo 'Horario Laboral' es requerido.";

  if (!regex.cp.test(form.cp.trim()))
    errors.cp = "El Código postal es requerido.";

  if (!regex.t200_street.test(form.t200_street.trim()))
    errors.t200_street = "El campo 'Calle y Número' es requerido.";

  return errors;
};

function recuperarHabilidades(array) {
  let arrayAuxiliar = [];
  array.forEach((el) => arrayAuxiliar.push(el.c116_description));
  return arrayAuxiliar;
}

function recuperarIdiomaId(array) {
  let arrayAuxiliar = [];
  array.forEach((el) => arrayAuxiliar.push(el.c111_id_language));
  return arrayAuxiliar;
}

const styles = {
  containerError: {
    display: "flex",
    flexDirection: "column",
    gap: ".3em",
  },
  textError: {
    color: "red",
    display: "flex",
    alignItems: "center",
    gap: ".3em",
    fontSize: "13px",
  },
};

const FormPostJob = ({ top, isEdition, vacantId, dataToEdit, nameJob }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { languages } = useLanguage();
  const { form, errors, setForm, handleChange, handleValidate } = useForm(
    POST_NEW_JOB,
    validateForm
  );
  const [textRequiredSkills, setTextRequiredSkills] = useState("");
  const [textOptionalSkills, setTextOptionalSkills] = useState("");
  const [textLanguages, setTextLanguages] = useState("")
  const [loading, setLoading] = useState(false);
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);
  const [body, setBody] = useState("");
  const [expList, setExpList] = useState(null);
  const [cp, setCP] = useState("");
  const [company, setCompany] = useState("");
  const [localities, setLocalities] = useState(null);
  const [place, setPlace] = useState("");
  const [typeContractList, setTypeContractList] = useState(null);
  const [profileCandidateList, setProfileCandidateList] = useState(null);
  const [requeridas, setRequeridas] = useState([]);
  const [opcionales, setOpcionales] = useState([]);
  const [requiredLanguage, setRequiredLanguage] = useState([]);
  const habilidadesOpcionales = recuperarHabilidades(opcionales);
  // const habilidadesRequeridas = recuperarHabilidades(requeridas);
  const lagnguageId = recuperarIdiomaId(requiredLanguage);
  let newObject = {
    ...form,
    t200_description: body,
    t200_street: place,
    t301_id_recruiter: token?.user?.user_id,
    t300_id_company: company[0]?.t300_id_company?.t300_id_company,
    mandatory: requeridas,
    optional: habilidadesOpcionales,
    language: lagnguageId,
  };

  useEffect(() => {
    getAllCatalogueExperience()
      .then((res) => {
        setExpList(res);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getRecruiter(token?.user?.user_id)
      .then((res) => {
        setCompany(res);
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

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(newObject);
    }
  }, [dataToEdit]);

  const createJob = () => {
    setLoading(true);
    postJob(newObject)
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          navigate("/dashboard");
        }, 3000);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };


  const updateJob = () => {
    console.log("actualizar vacante", vacantId);
    updateVacant(vacantId, dataToEdit)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const onSubmitPostJob = (e) => {
    if (form.t200_id_vacant === null) {
      console.log("crear vacante");
      createJob();
    } else {
      updateJob();
    }
  };

  const handleValidateNumber = (e) => {
    let charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault();
  };

  const handleLocality = (e) => {
    const { value } = e.target;

    setCP(value);

    if (parseInt(value) !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
        })
        .catch((error) => console.error(error));
    }
  };

  if (!expList || !data || !languages) return null;

  console.log(dataToEdit);

  return (
    <ContainerForm top={top}>
      <TitleH1>
        {isEdition ? `Editar la vacante ${nameJob}` : "Agregar nueva vacante"}
      </TitleH1>
      <Form>
        {/* titulo de la vacante y numero de plazas */}
        <section style={{ width: "800px" }}>
          <h2
            style={{
              fontSize: "1.1em",
              fontFamily: "sans-serif",
              fontWeight: "600",
              margin: ".5rem 0 1rem 0",
            }}
          >
            Sobre la vacante
          </h2>
          <GroupInput>
            <div style={styles.containerError}>
              <Input
                label="Título de la vacante"
                width="500px"
                id="t200_job"
                name="t200_job"
                value={newObject.t200_job}
                onChange={handleChange}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
              />
              {errors.t200_job && (
                <span style={styles.textError}>
                  <MdOutlineErrorOutline style={{ fontSize: "15px" }} />
                  {errors.t200_job}
                </span>
              )}
            </div>
            <div style={styles.containerError}>
              <Input
                label="Numero de plazas"
                id="t200_vacancy"
                name="t200_vacancy"
                value={form.t200_vacancy}
                onChange={handleChange}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
              />
              {errors.t200_vacancy && (
                <span style={styles.textError}>
                  <MdOutlineErrorOutline style={{ fontSize: "15px" }} />
                  {errors.t200_vacancy}
                </span>
              )}
            </div>
          </GroupInput>
        </section>

        {/* Ubicacion */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              fontSize: ".9em",
              fontWeight: "400",
              margin: "0 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Ubicación:
          </h3>
          <GroupInput>
            <div
              style={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <Input
                label="Código postal"
                id="cp"
                name="cp"
                value={cp ? parseInt(cp) : ""}
                onChange={handleLocality}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
                onKeyDown={function (e) {
                  let charCode = e.which ? e.which : e.keyCode;
                  if (charCode > 31 && (charCode < 48 || charCode > 57))
                    e.preventDefault();
                }}
              />
              {errors.cp && (
                <span style={styles.textError}>
                  <MdOutlineErrorOutline style={{ fontSize: "15px" }} />
                  {errors.cp}
                </span>
              )}
            </div>
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
            <div
              style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <Input
                label="Calle y Número"
                id="t200_street"
                name="t200_street"
                value={form.t200_street}
                onChange={handleChange}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
              />

              {errors.t200_street && (
                <span style={styles.textError}>
                  <MdOutlineErrorOutline style={{ fontSize: "15px" }} />
                  {errors.t200_street}
                </span>
              )}
            </div>
          </GroupInput>
        </section>

        {/* Perfil del candidato */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              fontSize: ".9em",
              fontWeight: "400",
              margin: "0 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Perfil del candidato:
          </h3>
          <GroupInput>
            <WrapperSelect>
              <Select
                width="390px"
                name="c206_id_profile"
                id="c206_id_profile"
                value={form.c206_id_profile}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Perfil del candidato
                </option>
                {profileCandidateList &&
                  profileCandidateList?.map((el) => (
                    <option
                      key={`profile-candidate-${crypto.randomUUID()}`}
                      value={el.c206_id_profile}
                    >
                      {el.c206_description}
                    </option>
                  ))}
              </Select>
            </WrapperSelect>

            <WrapperSelect>
              <Select
                width="390px"
                name="c207_id_experience"
                id="c207_id_experience"
                value={form.c207_id_experience}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Nivel de Experiencia
                </option>
                {expList &&
                  expList?.map((el) => (
                    <option
                      key={`exp-${crypto.randomUUID()}`}
                      value={el.c207_id_experience}
                    >
                      {el.c207_description}
                    </option>
                  ))}
              </Select>
            </WrapperSelect>
          </GroupInput>
        </section>

        {/* Salario minimo y maximo */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              fontSize: "1.1em",
              fontFamily: "sans-serif",
              fontWeight: "600",
              margin: "0 0 1rem 0",
            }}
          >
            Salario mensual
          </h3>
          <GroupInput>
            <Input
              label="Salario mínimo"
              id="t200_min_salary"
              name="t200_min_salary"
              value={form?.t200_min_salary}
              onChange={handleChange}
              onKeyDown={handleValidateNumber}
            />
            <Input
              label="Salario máximo"
              id="t200_max_salary"
              name="t200_max_salary"
              value={form?.t200_max_salary}
              onChange={handleChange}
              onKeyDown={handleValidateNumber}
            />
          </GroupInput>
        </section>

        {/* Mas informacion sobre la vacante */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              fontSize: "1.1em",
              fontFamily: "sans-serif",
              fontWeight: "600",
              margin: "0 0 1rem 0",
            }}
          >
            Cuéntanos más sobre la vacante
          </h3>

          <h3
            style={{
              fontSize: ".9em",
              fontWeight: "400",
              margin: "1rem 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Tipo de contratación:
          </h3>
          <GroupInput>
            <WrapperSelect>
              <Select
                width="500px"
                name="c208_id_contract"
                id="c208_id_contract"
                value={form.c208_id_contract}
                onChange={handleChange}
              >
                {typeContractList &&
                  typeContractList?.map((el) => (
                    <option
                      key={`type-contract${crypto.randomUUID()}`}
                      value={el.c208_id_contract}
                    >
                      {el.c208_description}
                    </option>
                  ))}
              </Select>
            </WrapperSelect>
          </GroupInput>

          {/* Horario */}
          <h3
            style={{
              fontSize: ".9em",
              fontWeight: "400",
              margin: "1rem 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Horario:
          </h3>
          <GroupInput style={styles.containerError}>
            <Input
              label="Horario laboral"
              width="500px"
              id="t200_working_hours"
              name="t200_working_hours"
              value={form?.t200_working_hours}
              onChange={handleChange}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
            />
            {errors.t200_working_hours && (
              <span style={styles.textError}>
                <MdOutlineErrorOutline style={{ fontSize: "15px" }} />
                {errors.t200_working_hours}
              </span>
            )}
          </GroupInput>

          {/* Modalidad */}
          <h3
            style={{
              fontSize: ".9em",
              fontWeight: "400",
              margin: "2rem 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Modalidad de empleo:
          </h3>
          <GroupInput>
            <WrapperSelect>
              <Select
                width="500px"
                name="c214_id_modality"
                id="c214_id_modality"
                value={form.c214_id_modality}
                onChange={handleChange}
              >
                <option value="1" defaultValue={"1"}>
                  Presencial
                </option>
                <option value="2">Desde Casa</option>
                <option value="3">Híbrido</option>
              </Select>
            </WrapperSelect>
          </GroupInput>
        </section>

        {/* HABILIDADES REQUERIDAS Y OPCIONALES */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontFamily: "System",
              margin: "0 0 .4rem 0",
            }}
          >
            ¿Necesitas que el candidato tenga conocimiento de algun tema en
            especial?
          </h3>
          <GroupInput>
            <InputTag
              id={`textRequiredSkills`}
              name={`textRequiredSkills`}
              placeholder={`Conocimiento Requerido`}
              value={textRequiredSkills}
              setValue={setTextRequiredSkills}
              setTypeSkills={setRequeridas}
              onChange={(e) => setTextRequiredSkills(e.target.value)}
              width="fit-content"
            />
            <InputTag
              id={`textOptionalSkills`}
              name={`textOptionalSkills`}
              placeholder={`Conocimiento Opcional`}
              value={textOptionalSkills}
              setValue={setTextOptionalSkills}
              setTypeSkills={setTextOptionalSkills}
              onChange={(e) => setTextOptionalSkills(e.target.value)}
              width="fit-content"
            />
          </GroupInput>
        </section>

        {/* IDIOMAS */}
        <section style={{ width: "800px" }}>
          <h2
            style={{
              fontSize: "1rem",
              fontFamily: "System",
              margin: "0 0 .4rem 0",
            }}
          >
            Idioma/Dialecto
          </h2>
          <GroupInput>
            <InputTag
              id={`textLanguages`}
              name={`textLanguages`}
              placeholder={`Conocimiento Requerido`}
              value={textLanguages}
              setValue={setTextLanguages}
              setTypeSkills={setTextLanguages}
              onChange={(e) => setTextLanguages(e.target.value)}
              width="fit-content"
            />
          </GroupInput>
        </section>
        <section style={{ width: "800px" }}>
          <h3
            style={{
              fontSize: "1.1em",
              fontFamily: "sans-serif",
              fontWeight: "600",
              margin: "0 0 1rem 0",
            }}
          >
            Descripción de la vacante
          </h3>
          <TextEditor
            id="body"
            name="body"
            onChange={(newValue) => setBody(newValue)}
            value={body}
          />
        </section>
      </Form>
      <Button onClick={onSubmitPostJob}>Enviar a Revisión</Button>
    </ContainerForm>
  );
};

export default FormPostJob;
