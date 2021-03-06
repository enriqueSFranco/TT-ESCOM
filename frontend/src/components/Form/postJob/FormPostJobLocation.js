import React, { useEffect, useState } from "react";
import { uuid } from "utils/uuid";
import {
  getLocality,
  getAllCatalogueExperience,
  getAllCandidateProfile,
} from "services/catalogs/index";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import { BiCurrentLocation, BiUser } from "react-icons/bi";
import {
  MdOutlineWork,
  MdAttachMoney,
  MdOutlineErrorOutline,
} from "react-icons/md";
import styles from "./FormPostJob.module.css";

const FormPostJobLocation = ({ form, errors, handleChecked, handleChange, nextStep }) => {
  const [cp, setCP] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [experience, setExperience] = useState([]);
  const [localities, setLocalities] = useState([]);

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
          form.t200_cp = input;
          form.t200_state = response[0]?.c222_state;
          form.t200_municipality = response[0]?.c222_municipality;          
          console.log(form);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>
        <MdOutlineWork /> Detalles de la vacante
      </h3>
      <div className={styles.groupFormTitleJob}>
        <TextField
          label="Titulo de la vacante"
          value={form.t200_job}
          onChange={handleChange}
          name="t200_job"
          id="t200_job"
          sx={{ width: 500, maxWidth: "100%", marginRight: 2 }}
        />
        {errors.t200_job && (
          <span className={styles.error}>
            <MdOutlineErrorOutline />
            {errors.t200_job}
          </span>
        )}
        <TextField
          label="# Plazas"
          type="number"
          name="t200_vacancy"
          id="t200_vacancy"
          sx={{ width: 100, maxWidth: "100%", marginRight: 2 }}
          value={form.t200_vacancy}
          onChange={handleChange}
        />
      </div>
      <div className={styles.wrapperGroupInput}>
        <h3 className={styles.title}>
          <BiCurrentLocation /> Ubicaci??n
        </h3>
        <div className={styles.wrapperCP}>
          <TextField
            label="Codigo postal"
            id="t200_cp"
            name="t200_cp"
            value={cp ? parseInt(cp) : ""}
            onChange={getLocalityData}
            sx={{ width: 130, marginRight: 2 }}
          />{errors.t200_cp && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t200_cp}
            </span>
          )}
          <FormControlLabel
            control={
              <Checkbox
                value={form.t200_home_ofice}
                onChange={handleChecked}
                size="small"
              />
            }
            label="Vacante Remota"
          />
        </div>
        <div className={styles.wrapperTown}>
          <TextField
            label="Estado"
            onChange={handleChange}
            name="t200_state"
            id="t200_state"
            value={state ? state : ""}
            sx={{ width: 200, maxWidth: "100%" }}
          />
          <TextField
            label="Municipio"
            name="t200_municipality"
            id="t200_municipality"
            value={town ? town : ""}
            sx={{ width: 200, maxWidth: "100%" }}
          />
          <FormControl sx={{ width: 250 }}>
            <InputLabel id="t200_locality">Localidad</InputLabel>
            <Select
              name = "t200_locality"
              labelId="t200_locality"
              id="t200_locality"
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
        <div className={styles.wrapperNumberLocation}>
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
          <h3 className={styles.title}>
            <BiUser /> La vacante va dirijida a
          </h3>
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
                  <MenuItem key={uuid()} value={profile?.c206_id_profile}>
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
                  <MenuItem key={uuid()} value={exp?.c207_id_experience}>
                    {exp?.c207_description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          <h3 className={styles.title}>
            <MdAttachMoney /> Rango salarial y Horario
          </h3>
        </div>
        <div className={styles.form1}>
          <div className={styles.inputGroup}>
            <TextField
              label="Salario M??nimo"
              name="t200_min_salary"
              id="t200_min_salary"
              inputProps={{ min: 7000, max: 99999, type: "number" }}
              value={form.t200_min_salary}
              onChange={handleChange}
              sx={{ width: 150 }}
            />
            <TextField
              label="Salario m??ximo"
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
      <div className={styles.btnNextForm}>
        <button onClick={nextStep}>Siguiente</button>
      </div>
    </div>
  );
};

export default FormPostJobLocation;
