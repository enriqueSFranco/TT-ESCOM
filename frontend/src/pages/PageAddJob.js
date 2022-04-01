import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
import { helpHttp } from "../utils/helpHttp";
import Modal from "../components/Modal/Modal";
import Label from "../components/Input/Label";
import Input from "../components/Input/Input";
import Span from "../components/Input/Span";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLocationJob from "../components/Form/FormLocationJob";
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
  c206_id_profile:1,
  c204_id_vacant_status: 1,
  t301_id_recruiter: 1,
  t400_id_admin: null,
};

const PageAddJob = () => {
  const { form, handleChange, handleChecked } = useForm(initialForm);
  const [isOpen, closeModal] = useModal();
  const [profiles, setProfiles] = useState(null); // Estado para los perfiles buscados
  const [experience, setExperience] = useState(null); // Estado para los perfiles buscados
  //console.log(useFetch("/api/catalogues/CatalogueExperience/"));

  useEffect(() => {
    const fetchData = async () => {
      try {                
        let profilesCatalogue = `/api/catalogues/CatalogueCandidateProfile/`;
        let experienceURL = `/api/catalogues/CatalogueExperience/`;
        const [profileResponse,experienceResponse] = await Promise.all([
          axios.get(profilesCatalogue),
          axios.get(experienceURL),
        ]);
        setProfiles(profileResponse.data);
        setExperience(experienceResponse.data);
      } catch (error) {
        console.error(error)
      }
    };
    fetchData();
    }, []);

  
  if(!form && !profiles)
    return null;

  console.log("Profiles-------------")
  console.log(profiles);
  
  if(!experience)
    return null;
  console.log("Experience-------------")
  console.log(experience);
  
    /*console.log(options[2]['c116_description']);
  let datos = new Array();
  let hard = new Array();
  options.map((dato)=> {
    if (dato['c116_type']=='H'){
    hard.push(dato); }
  }  );
  console.log(hard);  */  

  console.log(form)
  const createJob = (e) => {
    console.log("Creando vacante");
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
        <div className={styles.separator}></div>
        <form onSubmit={createJob} className={styles.form}>
          <div className={styles.flexWrapper}>
            <div>
              <Label>
                <Input
                  type="text"
                  id="t200_job"
                  name="t200_job"
                  placeholder=" "
                  value={form.nameJob}
                  onChange={handleChange}
                />
                <Span content="Nombre de la vacante" />
              </Label>
            </div>
          </div>
          <div className={styles.flexWrapper}>
            <div className={styles.select}>
              <select
                defaultValue=""
                className={styles.select}
                name="c206_id_profile"
                id="c206_id_profile"
                onChange={handleChange}
              >
                <option value="">Perfil del Canditado</option>
              {profiles.map((option) =>
                (<option key={option['c206_description']} value={option['c206_id_profile']}>{option['c206_description']}</option>))}
              </select>
            </div>
            <div className={styles.select}>
              <select
                name="c207_id_experience"
                id="c207_id_experience"
                onChange={handleChange}
                className={styles.select}                
              >
                <option value="" disabled>Experiencia</option>
                {experience.map((option) =>
                (<option key={option['c207_description']} value={option['c207_id_experience']}>{option['c207_description']}</option>))}                
              </select>
            </div>
          </div>
          <div className={styles.flexWrapper}>
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
            <div className={`${styles.wrapperHourWork} `}>
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
          </div>
          <div className={styles.flexWrapper}>
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
            onChange={handleChecked} />
          </div>
          <div className={styles.flexWrapper}>
            <TextareaAutosize
              className={styles.textArea}
              name="t200_description"
              id="t200_description"
              aria-label="empty textarea"
              placeholder="Descripción de la vacante"
              style={{ width: 500, height: 300 }}
              onChange={handleChange}
            />
            <TextareaAutosize
              className={styles.textArea}
              name="t200_requirements"
              id="t200_requirements"
              aria-label="empty textarea"
              placeholder="Escribe los requerimientos de la vacante"
              style={{ width: 500, height: 300 }}
              onChange={handleChange}
            />
          </div>
          <div className={styles.flexWrapper}>
            <TextareaAutosize
              className={styles.textArea}
              name="t200_benefits"
              id="t200_benefits"
              aria-label="empty textarea"
              placeholder="Escribe las prestaciones de la vacante"
              style={{ width: 500, height: 300 }}
              onChange={handleChange}
            />
          </div>
        {/* </form>      */}
        <div className={`${styles.groudButton}`}>
          <button
            type="submit"
            className={`${styles.btn} btn btn-outline-success`}
          >
            Publicar Vacante
          </button>
          <button className={`${styles.btn} btn btn-outline-secondary`}>
            Limiar Formulario
          </button>
        </div>
        </form>      
      </div>
      {/* mostramos la modal para ponder los datos de ubicacion */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <FormLocationJob />
      </Modal>
    </section>
  );
};

export default PageAddJob;
