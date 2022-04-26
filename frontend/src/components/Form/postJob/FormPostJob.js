import React, { useState, useEffect, useRef  } from "react";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "hooks/useForm";
import { postJobInitialForm } from "../schemes";
import {
  getAllCatalogueExperience,
  getAllCandidateProfile,
  getLocalities
} from "services/catalogs/index";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControlLabel from "@mui/material/FormControlLabel";
import Label from "components/Element/Label/Label";
import Input from "components/Element/Input/Input";
import Span from "components/Element/Span/Span";
import styles from "./FormPostJob.module.css";
import * as BiIcon from "react-icons/bi";
import * as IoIcon from "react-icons/io";

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
  display: "flex",
  flexDirection: "column",
};

const CP = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      format="#####"
    />
  );
});

CP.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


const FormPostJob = () => {
  const [checked, setChecked] = useState(false);

  const checkChanged = (state) => {
    setChecked(!checked);
  };

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
<<<<<<< HEAD
    <div className={styles.wrapper}>
      <form onSubmit={handlePostJob} className={styles.form}>
        <div className={styles.boxForm}>
        <h3>Titulo de la vacante y Ubicacion</h3>
        <div className={styles.inputGroup}>
          <div style={flex}>
            <Label>
              <Input
                type="text"
                id="t200_job"
                name="t200_job"
                placeholder=" "
=======
    <div className={styles.container}>
      <div><h4>Publicar vacante</h4></div>
      <div className={styles.containerform}>
        <form>
          <div className={styles.form1}>
            <div className={styles.inputGroup}>
              <TextField
                label="Titulo de la vacante"
>>>>>>> e8e8da7891e82345f92bf379417b448928a449cb
                value={form.t200_job}
                onChange={handleChange}
                name="t200_job"
                id="t200_job"
                sx={{ width: 500, maxWidth: "100%" , marginRight:2}}
              />
              {errors.t200_job && <Alert severity="error">{errors.t200_job}</Alert>}
            </div>
            <div className={styles.inputGroup}>
              <TextField
                label="# Plazas"
                type="number"
                sx={{ width: 100, maxWidth: "100%" , marginRight:2}}
                /*value={}
                onChange={handleChange}
                name="t200_"
                id="t200_"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}*/
              />
            </div>
          </div>

            <div >
              <div><BiIcon.BiCurrentLocation/>Ubicación</div>
              {/*<div className={styles.form2}>
                <div className={styles.inputGroup}>
                  <TextField
                    label="Código Postal"
                    value={form.c222_cp}
                    onChange={handleChange}
                    name="c222_cp"
                    id="c222_cp"
                    sx={{ width: 200, maxWidth: "100%" , marginRight:2}}
                    InputProps={{
                      inputComponent: CP,
                    }}
                  />
                </div>

                <div className={styles.inputCheckbox}>
                  Vacante remota?
                  <Checkbox
                    value={(form.t200_home_ofice = checked)}
                    checked={checked}
                    onChange={checkChanged}
                    size="small"
                  />
                </div>

                  </div>*/}
                <div className={styles.form1}>
                  <div className={styles.inputGroup}>
                    <TextField
                      label="Estado"
                      value={form.c222_state}
                      onChange={handleChange}
                      name="c222_state"
                      id="c222_state"
                      sx={{ width: 350, maxWidth: "100%"}}
                    
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <TextField
                      label="Municipio"
                      value={form.c222_municipality}
                      onChange={handleChange}
                      name="c222_municipality"
                      id="c222_municipality"
                      sx={{ width: 350, maxWidth: "100%"}}
                      
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <TextField
                      label="Localidad"
                      value={form.c222_locality}
                      onChange={handleChange}
                      name="c222_locality"
                      id="c222_locality"
                      sx={{ width: 350, maxWidth: "100%"}}
                    />
                  </div>
                </div>

                <div>
                  <div><BiIcon.BiUser/>La vacante va dirijida a</div>
                  <div className={styles.form1}>
                    <div className={styles.inputGroup}>
                      <Autocomplete            
                        id="c206_id_profile"
                        name="c206_id_profile"
                        value={form.c206_id_profile}
                        onChange={handleChange}         
                        freeSolo
                        options={profiles.map((option) => option.c206_description)}
                        renderInput={(params) => <TextField {...params} label="Perfil del Canditado" />}
                        sx={{ width: 350}}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <Autocomplete            
                        id="c207_id_experience"
                        name="c207_id_experience"
                        value={form.c207_id_experience}
                        onChange={handleChange}         
                        freeSolo
                        options={experience.map((option) => option.c207_description)}
                        renderInput={(params) => <TextField {...params} label="Experiencia" />}
                        sx={{ width: 350}}
                      />
                    </div>
                  </div>

                  <div>Rango salarial y Horario</div>
                  <div className={styles.form1}>
                    <div className={styles.inputGroup}>
                      <TextField
                        label="Salario Mínimo"
                        name="t200_min_salary"
                        id="t200_min_salary"
                        inputProps={{ min: 7000, max: 99999, type: "number" }}
                        value={form.t200_min_salary}
                        onChange={handleChange}
                        sx={{ width: 150}}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <TextField
                        label="Salario máximo"
                        name="t200_max_salary"
                        id="t200_max_salary"
                        inputProps={{ min: 7000, max: 99999, type: "number" }}
                        value={form.t200_max_salary}
                        onChange={handleChange}
                        sx={{ width: 150}}
                      />
                    </div>

                    <div className={`${styles.inputGroup} `}>
                      De:
                      <TextField
                        label="Entrada"
                        type="time"
                        name="t200_check_time"
                        id="t200_check_time"
                        value={form.t200_check_time}
                        onChange={handleChange}
                        sx={{ width: 150,marginRight:2}}
                      />
                    </div>

                    <div className={`${styles.inputGroup} `}>
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

              <div className={styles.form2}>
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

            </div>

        
          
        </form>
        
        
      </div>
      <div className={styles.form2}>
        <div className={`${styles.groudButton}`}>
          <button type="submit" className={`${styles.btn} btn btn-primary`}>
            Publicar Vacante
          </button>
        </div>
<<<<<<< HEAD
        </div>
      </form>
=======

        </div>
      
>>>>>>> e8e8da7891e82345f92bf379417b448928a449cb
    </div>
  );
};

export default FormPostJob;
