import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm, useFetch, useLanguage } from "hooks";
import { POST_NEW_JOB } from "types/newJob";
import LayoutHome from "Layout/LayoutHome";
import {
  postJob,
  getLocality,
  getAllCatalogueExperience,
  getAllContracTypes,
  getAllCandidateProfile,
} from "services";
import Input from "components/Input/Input";
import TextEditor from "components/TextEditor/TextEditor";
import { Autocomplete, TextField } from "@mui/material";
import { MdLanguage, MdWork, MdOutlineErrorOutline } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {
  Button,
  SubGroupInput,
  Form,
  GroupInput,
  Select,
  WrapperSelect,
  ContainerForm,
} from "./styled-componets/FormPostJobStyled";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t200_job: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,255}$/,
    t200_min_salary: /^[0-9]+$/,
    t200_cp: /^[0-9]+$/,
  };

  if (!form.t200_job.trim())
    errors.t200_job = "El campo 'Titulo de la vacante' es requerido";
  else if (!regex.t200_job.test(form.t200_job.trim()))
    errors.t200_job =
      "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

  if (!form.t200_min_salary.trim())
    errors.t200_min_salary = "El campo 'Titulo de la vacante' es requerido";
  else if (!regex.t200_min_salary.test(form.t200_min_salary.trim()))
    errors.t200_min_salary =
      "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";

  if (!form.t200_cp.trim())
    errors.t200_cp = "El campo 'Titulo de la vacante' es requerido";
  else if (!regex.t200_cp.test(form.t200_cp.trim()))
    errors.t200_cp =
      "El campo 'Titulo de la vacante' solo acepta letras y espacios en blanco.";
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

const FormPostJob = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { languages } = useLanguage();
  const { form, errors, handleChange, handleValidate } = useForm(
    POST_NEW_JOB,
    validateForm
  );
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);
  const [body, setBody] = useState("");
  const [expList, setExpList] = useState(null);
  const [cp, setCP] = useState("");
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
    t200_street: place,
    t301_id_recruiter: token?.user?.id,
    mandatory: habilidadesRequeridas,
    optional: habilidadesOpcionales,
    language: lagnguageId,
  };

  const onSubmitPostJob = (e) => {
    e.preventDefault();
    postJob(newObject)
      .then((response) => {
        // toast.success(response)
        console.log(response);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((error) => console.error(error));
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
    <LayoutHome>
      <ContainerForm>
        <h2
          style={{
            fontSize: "1rem",
            fontFamily: "System",
            fontWeight: "700",
            margin: "1rem 0 0 0",
          }}
        >
          Agregar nueva vacante
        </h2>
        <Form onSubmit={onSubmitPostJob}>
          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <MdWork style={{ color: "#397AFD" }} /> Titulo de la vacante
            </h2>
            <GroupInput>
              <div style={styles.containerError}>
                <Input
                  label="Titulo de la vacante"
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

          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <HiLocationMarker style={{ color: "red" }} /> Ubicacion
            </h2>
            <GroupInput>
              <Input
                label="Codigo postal"
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
                fontSize: "1rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <ImProfile /> Perfil del candidato
            </h2>
            <GroupInput>
              <WrapperSelect>
                <Select
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

              <WrapperSelect>
                <Select
                  name="c208_id_contract"
                  id="c208_id_contract"
                  value={form.c208_id_contract}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Tipo de contratacion
                  </option>
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
          </section>

          {/* <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <FcMoneyTransfer /> Sueldo por mes y Modalidad de empleo
            </h2>
            <GroupInput>
              <Input
                label="Sueldo minimo"
                id=""
                name=""
                value=""
                onChange={handleChange}
              />
              <Input
                label="Sueldo minimo"
                id=""
                name=""
                value=""
                onChange={handleChange}
              />
            <WrapperSelect>
                <Select
                  name="c208_id_contract"
                  id="c208_id_contract"
                  value={form.c208_id_contract}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Tipo de contratacion
                  </option>
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
          </section> */}

          {/* HABILIDADES REQUERIDAS Y OPCIONALES */}
          <section style={{ width: "800px" }}>
            <h2
              style={{
                fontSize: "1rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <FaBrain style={{ color: "#5A2889" }} /> Agregar las habilidades
              requeridas y opcionales para la vacante
            </h2>
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
                      label="Agregar nueva habilidad"
                      placeholder="Selecciona "
                    />
                  )}
                />
                {/* <Tooltip title="Agregar una nueva habilidad">
                  <Button>+</Button>
                </Tooltip> */}
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
                      label="Agregar nueva habilidad"
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
              <MdLanguage style={{ color: "blue" }} /> Idioma/Dialecto
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
            <h2
              style={{
                fontSize: "1rem",
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
          <Button type="submit">Enviar a revision</Button>
        </Form>
      </ContainerForm>
    </LayoutHome>
  );
};

export default FormPostJob;
