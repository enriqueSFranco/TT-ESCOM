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
  getRecruiter
} from "services";
import Loader from "components/Loader/Loader";
import { Input } from "components/Input/Input";
import TextEditor from "components/TextEditor/TextEditor";
import { Autocomplete, TextField } from "@mui/material";
import { MdLanguage, MdOutlineErrorOutline } from "react-icons/md";

import {
  Button,
  SubGroupInput,
  Form,
  GroupInput,
  Select,
  WrapperSelect,
  ContainerForm,
  TitleH1,
} from "./styled-componets/FormPostJobStyled";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t200_job: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,255}$/,
    t200_min_salary: /^[0-9]+$/,
    // t200_cp: /^[0-9]+$/,
  };

  if (!form.t200_job.trim())
    errors.t200_job = "El campo 'Titulo de la vacante' es requerido";
  else if (!regex.t200_job.test(form.t200_job.trim()))
    errors.t200_job =
      "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

  // if (!form.t200_min_salary.trim())
  //   errors.t200_min_salary = "El campo 'Titulo de la vacante' es requerido";
  // else if (!regex.t200_min_salary.test(form.t200_min_salary.trim()))
  //   errors.t200_min_salary =
  //     "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

  // if (!form.t200_cp.trim())
  //   errors.t200_cp = "El campo 'Titulo de la vacante' es requerido";
  // else if (!regex.t200_cp.test(form.t200_cp.trim()))
  //   errors.t200_cp =
  //     "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";
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
    fontSize: ".8em",
  },
};

const FormPostJob = ({
  top,
  isEdition,
  vacantId,
  dataToEdit,
  nameJob,
}) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { languages } = useLanguage();
  const { form, errors, setForm, handleChange, handleValidate } = useForm(
    POST_NEW_JOB,
    validateForm
  );
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
  const habilidadesRequeridas = recuperarHabilidades(requeridas);
  const lagnguageId = recuperarIdiomaId(requiredLanguage);
  let newObject = {
    ...form,
    t200_description: body,
    t200_street: place,
    t301_id_recruiter: token?.user?.user_id,
    t300_id_company:company[0]?.t300_id_company?.t300_id_company,
    mandatory: habilidadesRequeridas,
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
      setForm(dataToEdit)
    } else {
      setForm(newObject)
    }
  }, [dataToEdit])


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
    updateVacant(vacantId)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  };

  const onSubmitPostJob = (e) => {
    e.preventDefault();

    // CREAR VACANTE
    if (form.t200_id_vacant === null) {
      console.log("crear vacante");
      createJob();
    } else {
      updateJob();
    }
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

  return (
    <ContainerForm top={top}>
      <TitleH1>{isEdition ? `Editar la vacante ${nameJob}` : 'Agregar nueva vacante'}</TitleH1>
      <Form onSubmit={onSubmitPostJob}>
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
                  <MdOutlineErrorOutline />
                  {errors.t200_job}
                </span>
              )}
            </div>
            <Input
              label="Numero de plazas"
              id="t200_vacancy"
              name="t200_vacancy"
              value={form.t200_vacancy}
              onChange={handleChange}
            />
          </GroupInput>
        </section>

        {/* Ubicacion */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              "font-size": ".9em",
              "font-weight": "400",
              margin: "0 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Ubicación:
          </h3>
          <GroupInput>
            <Input
              label="Código postal"
              id="cp"
              name="cp"
              value={cp ? parseInt(cp) : ""}
              onChange={handleLocality}
              onKeyDown={function (e) {
                let charCode = e.which ? e.which : e.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57))
                  e.preventDefault();
              }}
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
              label="Calle y Número"
              id="t200_street"
              name="t200_street"
              value={form.t200_street}
              onChange={handleChange}
            />
          </GroupInput>
        </section>

        {/* Perfil del candidato */}
        <section style={{ width: "800px" }}>
          <h3
            style={{
              "font-size": ".9em",
              "font-weight": "400",
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
            />
            <Input
              label="Salario máximo"
              id="t200_max_salary"
              name="t200_max_salary"
              value={form?.t200_max_salary}
              onChange={handleChange}
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
              "font-size": ".9em",
              "font-weight": "400",
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
              "font-size": ".9em",
              "font-weight": "400",
              margin: "1rem 0 1rem .5rem",
              color: "#9BA1A6",
            }}
          >
            Horario:
          </h3>
          <GroupInput>
              <Input
                label="Horario laboral"
                width="500px"
                id="t200_working_hours"
                name="t200_working_hours"
                value={form?.t200_working_hours}
                onChange={handleChange}
              />
            </GroupInput>

          {/* Modalidad */}
          <h3
            style={{
              "font-size": ".9em",
              "font-weight": "400",
              margin: "1rem 0 1rem .5rem",
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
            <SubGroupInput>
              <Autocomplete
                id="requeridas"
                sx={{ width: 350, maxWidth: "100%" }}
                name="requeridas"
                value={requeridas}
                onChange={(event, newValue) => setRequeridas(newValue)}
                multiple={true}
                options={data}
                getOptionLabel={({ c116_description }) => c116_description}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Conocimiento Requerido"
                    placeholder="Selecciona "
                  />
                )}
              />
            
            </SubGroupInput>
            <SubGroupInput>
              <Autocomplete
                id="opcionales"
                sx={{ width: 350, maxWidth: "100%" }}
                name="opcionales"
                value={opcionales}
                onChange={(event, newValue) => setOpcionales(newValue)}
                multiple
                options={data}
                getOptionLabel={(option) => option.c116_description}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Conocimiento Opcional"
                    placeholder="Selecciona "
                  />
                )}
              />
              {/* <Tooltip title="Agregar una nueva habilidad">
                  <Button>+</Button>
                </Tooltip> */}
            </SubGroupInput>
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
            <SubGroupInput>
              <Autocomplete
                disablePortal
                id="language"
                name="language"
                multiple
                options={languages}
                getOptionLabel={(option) => option.c111_description}
                value={requiredLanguage}
                onChange={(event, newValue) => setRequiredLanguage(newValue)}
                filterSelectedOptions
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Idioma/Dialecto" />
                )}
              />
            </SubGroupInput>
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
        <Button type="submit">
          <span className="send">Enviar a Revisión</span>
          {loading && <Loader width="18px" height="18px" color="#fff" />}
          {/* {!loading && <BiCheck style={{'font-size': '25px'}} />} */}
        </Button>
      </Form>
    </ContainerForm>
  );
};

export default FormPostJob;
