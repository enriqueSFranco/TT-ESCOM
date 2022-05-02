import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import NumberFormat from "react-number-format";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
import {
  getAllCatalogueExperience,
  getAllCandidateProfile,
  getLocality,
} from "services/catalogs/index";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import * as BiIcon from "react-icons/bi";
import { MdPublish } from "react-icons/md";
import styles from "./FormPostJob.module.css";
import { Select } from "@mui/material";

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

// const CP = React.forwardRef(function NumberFormatCustom(props, ref) {
//   const { onChange, ...other } = props;

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={ref}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value,
//           },
//         });
//       }}
//       isNumericString
//       format="#####"
//     />
//   );
// });

// CP.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const FormPostJob = () => {
  // const [checked, setChecked] = useState(false);
  const [cp, setCP] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [profiles, setProfiles] = useState([]); // Estado para los perfiles buscados
  const [experience, setExperience] = useState([]); // Estado para el catalogo de experiencia
  const [localities, setLocalities] = useState([]); // Estado para el catalogo de localidades por CP
  const { form, errors, handleChange, handleChecked } = useForm(
    postJobInitialForm,
    validateForm
  );

  // const checkChanged = () => setChecked(!checked);

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

  const getLocalityData = (e) => {
    setCP(e.target.value);
    let input = e.target.value;

    if (input !== "") {
      getLocality(input)
        .then((response) => {
          console.log(response)
          setLocalities(response);
          setState(response[0]?.c222_state);
          setTown(response[0]?.c222_municipality)
        })
        .catch((error) => console.error(error));
    }
  };

  if (!form || !profiles || !experience) return null;

  console.log(localities);
  console.log(state);

  return (
    <div className={`container ${styles.wrapper}`}>
      <form className={styles.form}>
        <div className={styles.groupFormTitleJob}>
          <TextField
            label="Titulo de la vacante"
            value={form.t200_job}
            onChange={handleChange}
            name="t200_job"
            id="t200_job"
            sx={{ width: 400, maxWidth: "100%", marginRight: 2 }}
          />
          {errors.t200_job && <Alert severity="error">{errors.t200_job}</Alert>}
          <TextField
            label="# Plazas"
            type="number"
            sx={{ width: 100, maxWidth: "100%", marginRight: 2 }}
            value={form.t200_vacancy}
            onChange={handleChange}
            name="t200_vacancy"
            id="t200_vacancy"
          />
          <div className={styles.checkHomeOffice}>
            <Checkbox
              value={form.t200_home_ofice}
              onChange={handleChecked}
              size="small"
            />
            <span>Vacante Remota</span>
          </div>
        </div>
        <div>
          <BiIcon.BiCurrentLocation />
          <span>Ubicación</span>
          <div className={styles.inputGroup}>
            <TextField 
              label="Codigo postal"
              id="cp"
              name="cp"
              value={cp ? parseInt(cp) : ""}
              onChange={getLocalityData}
              sx={{ width: 130, marginRight: 2 }}
            
            />
            <TextField
              label="Estado"
              onChange={handleChange}
              name="c222_state"
              id="c222_state"
              value={state ? state : ""}
              sx={{ width: 300, maxWidth: "100%" }}
            />
            <TextField
              label="Municipio"
              name="c222_municipality"
              id="c222_municipality"
              value={town ? town : ""}
              sx={{ width: 300, maxWidth: "100%" }}
            />
            <FormControl sx={{width: 300}}>
              <InputLabel id="c222_localit">Localidad</InputLabel>
              <Select
                labelId="c222_localit"
                id="c222_localit"
                value={form.c222_localit}
                label="Localidad"
                onChange={handleChange}
              >
                {localities?.map(township => (
                  <MenuItem value={township?.c222_locality}>{township?.c222_locality}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={styles.form1}>
            <div className={styles.inputGroup}>
              <TextField
                label="Calle"
                value={form.t200_street}
                onChange={handleChange}
                name="t200_street"
                id="t200_street"
                sx={{ width: 300, maxWidth: "100%" }}
              />
              <TextField
                label="Num. Exterior"
                value={form.t200_exterior_number}
                onChange={handleChange}
                name="t200_exterior_number"
                id="t200_exterior_number"
                sx={{ width: 150, maxWidth: "50%" }}
              />
              <TextField
                label="Num. Interior"
                value={form.t200_interior_number}
                onChange={handleChange}
                name="t200_interior_number"
                id="t200_interior_number"
                sx={{ width: 150, maxWidth: "50%" }}
              />
            </div>
          </div>
          <div>
            <div className={styles.form1}>
              <BiIcon.BiUser />
              <span>La vacante va dirijida a</span>
              <div className={styles.inputGroup}>
                {/* <Autocomplete
                  id="c206_id_profile"
                  name="c206_id_profile"
                  value={form.c206_id_profile}
                  onChange={(event, newValue) => {
                    form.c206_id_profile = newValue.value;
                  }}
                  freeSolo
                  options={profiles.map((option) => option.c206_description)}
                  defaultValue={profiles[0]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Perfil del Canditado" />
                  )}
                  sx={{ width: 300 }}
                />
                <Autocomplete
                  id="c207_id_experience"
                  name="c207_id_experience"
                  value={form.c207_id_experience}
                  onChange={handleChange}
                  freeSolo
                  options={experience.map((option) => option.c207_description)}
                  renderInput={(params) => (
                    <TextField {...params} label="Experiencia" />
                  )}
                  sx={{ width: 300 }}
                /> */}
              </div>
            </div>
            <div>
              <span>Rango salarial y Horario</span>
            </div>
            <div className={styles.form1}>
              <div className={styles.inputGroup}>
                <TextField
                  label="Salario Mínimo"
                  name="t200_min_salary"
                  id="t200_min_salary"
                  inputProps={{ min: 7000, max: 99999, type: "number" }}
                  value={form.t200_min_salary}
                  onChange={handleChange}
                  sx={{ width: 150 }}
                />
                <TextField
                  label="Salario máximo"
                  name="t200_max_salary"
                  id="t200_max_salary"
                  inputProps={{ min: 7000, max: 99999, type: "number" }}
                  value={form.t200_max_salary}
                  onChange={handleChange}
                  sx={{ width: 150 }}
                />
                <TextField
                  label="Entrada"
                  type="time"
                  name="t200_check_time"
                  id="t200_check_time"
                  value={form.t200_check_time}
                  onChange={handleChange}
                  sx={{ width: 150, marginRight: 2 }}
                />
                <TextField
                  label="Salida"
                  type="time"
                  name="t200_closing_hour"
                  id="t200_closing_hour"
                  value={form.t200_closing_hour}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.inputGroup} `}>
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
        </div>
        <button type="submit" className={`${styles.btn} btn btn-primary`}>
          <MdPublish />
          Publicar Vacante
        </button>
      </form>
    </div>
  );
};

export default FormPostJob;
