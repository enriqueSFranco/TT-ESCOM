import React, { useState, useEffect } from "react";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
import {
  getAllCatalogueExperience,
  getAllCandidateProfile,
  getLocality,
} from "services/catalogs/index";
import { uuid } from "utils/uuid";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select from "@mui/material/Select";
import { BiCurrentLocation, BiUser } from "react-icons/bi";
import { MdPublish, MdOutlineWork, MdAttachMoney, MdOutlineErrorOutline } from "react-icons/md";
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


const FormPostJob = () => {
  const [cp, setCP] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [profiles, setProfiles] = useState([]); // Estado para los perfiles buscados
  const [experience, setExperience] = useState([]); // Estado para el catalogo de experiencia
  const [localities, setLocalities] = useState([]); // Estado para el catalogo de localidades por CP
  const { form, errors, handleChange, handleChecked, onSubmitPostJob } = useForm(
    postJobInitialForm,
    validateForm
  );

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
          console.log(response);
          setLocalities(response);
          setState(response[0]?.c222_state);
          setTown(response[0]?.c222_municipality);
        })
        .catch((error) => console.error(error));
    }
  };

  if (!form || !profiles || !experience) return null;

  return (
    <div className={`container ${styles.wrapper}`}>
      <form className={styles.form} onSubmit={onSubmitPostJob}>
        <h3 className={styles.title}><MdOutlineWork /> Detalles de la vacante</h3>
        <div className={styles.groupFormTitleJob}>
          <TextField
            label="Titulo de la vacante"
            value={form.t200_job}
            onChange={handleChange}
            name="t200_job"
            id="t200_job"
            sx={{ width: 400, maxWidth: "100%", marginRight: 2 }}
          />
          {errors.t200_job && (
            <span className={styles.error}><MdOutlineErrorOutline />{errors.t200_job}</span>
          )}
          <TextField
            label="# Plazas"
            type="number"
            sx={{ width: 100, maxWidth: "100%", marginRight: 2 }}
            value={form.t200_vacancy}
            onChange={handleChange}
            name="t200_vacancy"
            id="t200_vacancy"
          />
          <FormControlLabel control={<Checkbox value={form.t200_home_ofice} onChange={handleChecked} size="small" />} label="Vacante Remota" />
        </div>
        <div>
          <h3 className={styles.title}><BiCurrentLocation /> Ubicación</h3>
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
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="c222_localit">Localidad</InputLabel>
              <Select
                labelId="c222_localit"
                id="c222_localit"
                defaultValue=""
                label="Localidad"
                onChange={handleChange}
              >
                <MenuItem disabled>Seleccione una localidad</MenuItem>
                {localities?.map((township) => (
                  <MenuItem key={uuid()} value={township?.c222_locality}>
                    {township?.c222_locality}
                  </MenuItem>
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
              <h3 className={styles.title}><BiUser /> La vacante va dirijida a</h3>
              <div className={styles.inputGroup}>
                <FormControl sx={{ width: 300 }}>
                  <InputLabel id="c206_id_profile">Perfil</InputLabel>
                  <Select
                    id="c206_id_profile"
                    name="c206_id_profile"
                    defaultValue=""
                    onChange={handleChange}
                    label="Perfil"
                  >
                    {profiles?.map((profile) => (
                      <MenuItem key={uuid()} value={profile?.c206_description}>
                        {profile?.c206_description}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ width: 300 }}>
                  <InputLabel id="c207_description">Experiencia</InputLabel>
                  <Select
                    id="c207_description"
                    name="c207_description"
                    defaultValue=""
                    onChange={handleChange}
                    label="Experiencia"
                  >
                    {experience?.map((exp) => (
                      <MenuItem key={uuid()} value={exp?.c207_description}>
                        {exp?.c207_description}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3 className={styles.title}><MdAttachMoney/> Rango salarial y Horario</h3>
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
                {/* dias laborales */}
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
