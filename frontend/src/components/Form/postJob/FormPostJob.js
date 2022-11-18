import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm, useFetch } from "hooks";
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
// import Tooltip from "components/Tooltip/Tooltip";
import { MdLanguage, MdWork, MdOutlineErrorOutline } from "react-icons/md";
import { ImProfile } from "react-icons/im";
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
  return errors;
};

function recuperarHabilidades(array) {
  let arrayAuxiliar = [];
  array.forEach((el) => arrayAuxiliar.push(el.c116_description));
  return arrayAuxiliar;
}

const styles = {
  containerError: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.3em',
  },
  textError: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    gap: '.3em',
    fontSize: '.8em'
  }
}

const FormPostJob = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [body, setBody] = useState("");
  const { form, errors, handleChange, handleValidate } = useForm(POST_NEW_JOB, validateForm);
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);
  const [exp, setExp] = useState("");
  const [expList, setExpList] = useState(null);
  const [cp, setCP] = useState("");
  const [localities, setLocalities] = useState(null);
  const [place, setPlace] = useState("");
  const [typeContract, setTypeContract] = useState("");
  const [typeContractList, setTypeContractList] = useState(null);
  const [profileCandidate, setProfileCandidate] = useState("");
  const [profileCandidateList, setProfileCandidateList] = useState(null);
  const [requeridas, setRequeridas] = useState([]);
  const [opcionales, setOpcionales] = useState([]);
  const habilidadesOpcionales = recuperarHabilidades(opcionales)
  const habilidadesRequeridas = recuperarHabilidades(requeridas)

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
    mandatory: habilidadesRequeridas,
    opcionales: habilidadesOpcionales
  };

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
    console.log(value)
    setCP(value);

    if (parseInt(value) !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
        })
        .catch((error) => console.error(error));
    }
  };


  if (!expList || !data) return null;

  return (
    <LayoutHome>
      <ContainerForm>
        <h2
          style={{
            fontSize: "1.3rem",
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
                fontSize: "1.3rem",
                fontFamily: "System",
                margin: "0 0 .4rem 0",
              }}
            >
              <MdWork /> Titulo de la vacante
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
                  // onKeyDown={function(e) {
                  //   if (e.keyCode < '48' || e.keyCode > '57') e.preventDefault()
                  // }}
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
              <FaBrain /> Agregar las habilidades requeridas y opcionales para
              la vacante
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
                  id=""
                  name=""
                  multiple
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
          <Button type="submit">Enviar a revision</Button>
        </Form>
      </ContainerForm>
    </LayoutHome>
  );
};

export default FormPostJob;
