import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "hooks/useForm";
import { useModal } from "hooks/useModal";
import { helpHttp } from "utils/helpHttp";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "components/Modal/Modal";
import Label from "components/Element/Label/Label";
import Input from "components/Element/Input/Input";
import Span from "components/Element/Span/Span";
import FormLocationJob from "components/Form/postJob/FormLocationJob";
import styles from "./PageAddJob.module.css";

let now = new Date();

let initialForm = {
  t200_job: "",
  t200_description: "",
  t200_requirements: "",
  t200_benefits: "",
  t200_check_time: "00:00:00",
  t200_closing_hour: "00:00:00",
  t200_work_days: "0000000",
  t200_min_salary: 0,
  t200_max_salary: 0,
  t200_gross_salary: false,
  t200_home_ofice: false,
  t200_publish_date:
    now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
  t200_close_date:
    now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
  t300_id_company: 1,
  c207_id_experience: 1,
  c206_id_profile: 1,
  c204_id_vacant_status: 1,
  t301_id_recruiter: 1,
  t400_id_admin: null,
};

const PageAddJob = () => {
  const { form, handleChange, handleChecked } = useForm(initialForm);
  const [profiles, setProfiles] = useState(null); // Estado para los perfiles buscados
  const [experience, setExperience] = useState(null); // Estado para el catalogo de experiencia
  //console.log(useFetch("/api/catalogues/CatalogueExperience/"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        let profilesCatalogue = `/api/catalogues/CatalogueCandidateProfile/`;
        let experienceURL = `/api/catalogues/CatalogueExperience/`;
        const [profileResponse, experienceResponse] = await Promise.all([
          axios.get(profilesCatalogue),
          axios.get(experienceURL),
        ]);
        setProfiles(profileResponse.data);
        setExperience(experienceResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!form && !profiles) return null;

  // console.log("Profiles-------------");
  // console.log(profiles);

  if (!experience) return null;
  // console.log("Experience-------------");
  // console.log(experience);

  /*console.log(options[2]['c116_description']);
  let datos = new Array();
  let hard = new Array();
  options.map((dato)=> {
    if (dato['c116_type']=='H'){
    hard.push(dato); }
  }  );
  console.log(hard);  */

  console.log(form);
  const createJob = (e) => {
    // console.log("Creando vacante");
    console.log(form);
    e.preventDefault();
    const endpoint = "/api/Vacants/";
    let options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: form,
    };
    console.log(options);
    helpHttp()
      .POST(endpoint, options)
      .then((response) => {
        if (!response.err) {
          console.log(response);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Publicar vacante</h1>
        <form onSubmit={createJob} className={styles.form}>
          <h3>Titulo de la vacante y Ubicacion</h3>
          <div className={styles.inputGroup}>
            <Label>
              <Input
                type="text"
                id="t200_job"
                name="t200_job"
                placeholder=" "
                value={form.nameJob}
                onChange={handleChange}
              />
              <Span content="Titulo de la vacante" />
            </Label>

            <Label>
              <Input
                type="text"
                id="t200_location"
                name="t200_location"
                placeholder=" "
                value=""
                onChange={handleChange}
              />
              <Span content="Ubicacion del empleo" />
            </Label>
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
                <option value="">Perfil del Canditado</option>
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
                onChange={handleChange}
              />
              <Span content="Salario mínimo" />
            </Label>
            <span className={styles.to}> a </span>
            <Label>
              <Input
                type="text"
                id="t200_min_salary"
                name="t200_min_salary"
                placeholder=" "
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
              value={form.initHour}
              onChange={handleChange}
            />
            <Input
              type="time"
              name="t200_closing_hour"
              id="t200_closing_hour"
              value={form.endHour}
              onChange={handleChange}
            />
          </div>

          <FormControlLabel
            control={<Checkbox />}
            label="Salario neto"
            name="t200_gross_salary"
            id="t200_gross_salary"
            onChange={handleChecked}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Trabajo remoto"
            name="t200_home_ofice"
            id="t200_home_ofice"
            onChange={handleChecked}
          />
          <br />
          <TextareaAutosize
            className={styles.textArea}
            name="t200_description"
            id="t200_description"
            aria-label="empty textarea"
            placeholder="Detalles de la vacante"
            minRows={4}
            style={{ width: 500 }}
            onChange={handleChange}
          />
          <div className={`${styles.groudButton}`}>
            <button type="submit" className={`${styles.btn} btn btn-primary`}>
              Publicar Vacante
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PageAddJob;
