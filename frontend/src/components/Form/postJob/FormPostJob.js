import { useState, useEffect, useRef } from "react";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
import {
  getAllCatalogueExperience,
  getAllCandidateProfile,
  getLocalities
} from "services/catalogs/index";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControlLabel from "@mui/material/FormControlLabel";
import Label from "components/Element/Label/Label";
import Input from "components/Element/Input/Input";
import Span from "components/Element/Span/Span";
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

  return errors;
};

const flex = {
  // width: "400px",
  display: "flex",
  flexDirection: "column",
};

const FormPostJob = () => {
  const {
    form,
    errors,
    handleChange,
    handleValidate,
    handlePostJob,
    handleChecked,
  } = useForm(postJobInitialForm, validateForm);
  const [profiles, setProfiles] = useState(null); // Estado para los perfiles buscados
  const [experience, setExperience] = useState(null); // Estado para el catalogo de experiencia
  const minRef = useRef(null);

  useEffect(() => {
    getAllCandidateProfile()
      .then((response) => {
        setProfiles(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getAllCatalogueExperience()
      .then((response) => {
        setExperience(response);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!form || !profiles || !experience) return null;

  console.log(form);

  const getLocalityData = (e) =>{
    console.log("Aqui va el CP");
  };

  /*console.log(options[2]['c116_description']);
  let datos = new Array();
  let hard = new Array();
  options.map((dato)=> {
    if (dato['c116_type']=='H'){
    hard.push(dato); }
  }  );
  console.log(hard);  */

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   postJob(form)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Publicar vacante</h1>
      <form onSubmit={handlePostJob} className={styles.form}>
        <h3>Titulo de la vacante y Ubicacion</h3>
        <div className={styles.inputGroup}>
          <div style={flex}>
            <Label>
              <Input
                type="text"
                id="t200_job"
                name="t200_job"
                placeholder=" "
                value={form.t200_job}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
                onChange={handleChange}
              />
              <Span content="Titulo de la vacante" />
            </Label>
            {errors.t200_job && <Alert severity="error">{errors.t200_job}</Alert>}
          </div>
          {/* <Label>
            <Input
              type="text"
              id="t200_location"
              name="t200_location"
              placeholder=" "
              value=""
              onChange={handleChange}
            />
            <Span content="Ubicacion del empleo" />
          </Label> */}
        </div>

        <h3>Ubicación</h3>
        <div className={styles.inputGroup}>
          <div style={flex}>
            <Label>
              <Input
                type="text"
                id="c222_cp"
                name="c222_cp"
                placeholder=" "
                value={form.c222_cp}                
                onChange={getLocalityData/*handleChange*/}
              />
              <Span content="Código Postal"/>
            </Label>
            <FormControlLabel
              control={<Checkbox />}
              label="Trabajo remoto"
              name="t200_home_ofice"
              id="t200_home_ofice"
              value={form.t200_home_ofice}
              onChange={handleChecked}
            />
            <div className={`${styles.inputGroup}`}>
              <Input
                type="text"
                id="c222_state"
                name="c222_state"
                placeholder=" "
                value={form.c222_state}                
                onChange={handleChange}
              />
              <Span content="Estado"/>    
              <Input
                type="text"
                id="c222_municipality"
                name="c222_municipality"
                placeholder=" "
                value={form.c222_municipality}                
                onChange={handleChange}
              />
              <Span content="Municipio"/>
              <Input
                type="text"
                id="c222_locality"
                name="c222_locality"
                placeholder=" "
                value={form.c222_locality}                
                onChange={handleChange}
              />
              <Span content="Localidad"/>
            </div>
          </div>
          {/* <Label>
            <Input
              type="text"
              id="t200_location"
              name="t200_location"
              placeholder=" "
              value=""
              onChange={handleChange}
            />
            <Span content="Ubicacion del empleo" />
          </Label> */}
        </div>

        <h3>Perfil y Experiencia</h3>
        <div className={styles.inputGroup}>
          <div className={styles.select}>
            <select
              defaultValue=""
              className={styles.select}
              name="c206_id_profile"
              id="c206_id_profile"
              onChange={handleChange}
            >
              <option disabled>Perfil del Canditado</option>
              {profiles.map((option) => (
                <option
                  key={option["c206_description"]}
                  value={option["c206_id_profile"]}
                >
                  {option["c206_description"]}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.select}>
            <select
              name="c207_id_experience"
              id="c207_id_experience"
              onChange={handleChange}
              className={styles.select}
            >
              <option value="" disabled>
                Experiencia
              </option>
              {experience.map((option) => (
                <option
                  key={option["c207_description"]}
                  value={option["c207_id_experience"]}
                >
                  {option["c207_description"]}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Inputs para el salario */}
        <h3>Salario</h3>
        <div className={`${styles.inputGroup}`}>
          <Label>
            <Input
              type="text"
              id="t200_min_salary"
              name="t200_min_salary"
              placeholder=" "
              value={form.t200_min_salary}
              onChange={handleChange}
            />
            <Span content="Salario mínimo" />
          </Label>
          <span className={styles.to}> a </span>
          <Label>
            <Input
              type="text"
              id="t200_max_salary"
              name="t200_max_salary"
              value={form.t200_max_salary}
              placeholder=" "
              ref={minRef}
              onChange={handleChange}
            />
            <Span content="Salario máxino" />
          </Label>
        </div>
        <h3>Horario laboral</h3>
        <div className={`${styles.inputGroup} `}>
          <Input
            type="time"
            name="t200_check_time"
            id="t200_check_time"
            value={form.t200_check_time}
            onChange={handleChange}
          />
          <Input
            type="time"
            name="t200_closing_hour"
            id="t200_closing_hour"
            value={form.t200_closing_hour}
            onChange={handleChange}
          />
        </div>

        <FormControlLabel
          control={<Checkbox />}
          label="Salario neto"
          name="t200_gross_salary"
          id="t200_gross_salary"
          value={form.t200_gross_salary}
          onChange={handleChecked}
        />        
        <br />
        <TextareaAutosize
          className={styles.textArea}
          name="t200_description"
          id="t200_description"
          aria-label="maximum height"
          placeholder="Detalles de la vacante"
          minRows={5}
          style={{ width: "100%", height: 220 }}
          value={form.t200_description}
          onChange={handleChange}
        />
        <div className={`${styles.groudButton}`}>
          <button type="submit" className={`${styles.btn} btn btn-primary`}>
            Publicar Vacante
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPostJob;
