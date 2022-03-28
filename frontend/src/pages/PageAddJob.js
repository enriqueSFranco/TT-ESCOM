import React from "react";

import { useForm } from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
import { $ajax } from "../utils/$ajax";
// import { numberFormat } from "../utils/numberFormat";
import Modal from "../components/Modal/Modal";
import Label from "../components/Input/Label";
import Input from "../components/Input/Input";
import Span from "../components/Input/Span";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import styles from "./PageAddJob.module.css";
import FormLocationJob from "../components/Form/FormLocationJob";

let now = new Date();

let initialForm = {
  t200_job: "",
  t200_description: "",
  t200_check_time: "00:00:00",
  t200_closing_hour: "00:00:00",
  t200_work_days: "0000000",
  t200_min_salary: 0,
  t200_max_salary: 0,
  t200_gross_salary: false,
  t200_home_ofice: false,
  t200_publish_date: now.getFullYear()+"-"+now.getMonth()+"-"+now.getDay(), 
  t200_close_date: now.getFullYear()+"-"+now.getMonth()+"-"+now.getDay(),
  t300_id_company: 1,
  c207_id_experience: 1,
  c204_id_vacant_status: 1,
  t301_id_recruiter: 1,
  t400_id_admin: null,
};

  
  //  t200_job: "",
  //jobLocation: "",
  //exp: "",
  //profileJob: "",
  //t200_max_salary: null,
  //initHour: now.getHours() + ":" + now.getMinutes(), //+ ":" + now.getSeconds(),
  //endHour: "",
  //t200_description: "",

const PageAddJob = () => {
  const { form, handleChange } = useForm(initialForm);
  const [isOpen, closeModal] = useModal();
  console.log(form.t200_publish_date);
  console.log("-------------------------")  
  console.log(form);
  console.log(form.t200_publish_date);
  
  
  if (form == null) return;

  const createJob = (e) => {
    //const { form, handleChange } = useForm(initialForm);
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
    $ajax()
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
        <form className={styles.form}>
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
            {/* drop down */}
          </div>
          <div className={styles.flexWrapper}>
            <div className={styles.select}>
              <select
                defaultValue=""
                className={styles.select}
                name="profileJob"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Perfil del empleado
                </option>
                <option value="3">Becario</option>
                <option value="4">Pasante</option>
                <option value="5">Titulado</option>
                <option value="2">Estudiante</option>
              </select>
            </div>
            <div className={styles.select}>
              <select
                defaultValue="1"
                name="c207_id_experience"
                id="c207_id_experience"
                onChange={handleChange}
                className={styles.select}
              >
                <option value="" disabled>
                  Experiencia
                </option>
                <option value="3">6 meses a 1 año</option>
                <option value="4">2 años</option>
                <option value="5">3 años</option>
                <option value="6">mas de 4 años</option>
                {/*Hacer peticion
                vARIABLE DE ESTADO
                Iterar con el map
                
                conditional render*/}
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
            control={<Checkbox />} label="Salario neto" 
            name="t200_gross_salary"
            id="t200_gross_salary"
            onChange={handleChange}
            />
            <FormControlLabel 
            control={<Checkbox />} label="Trabajo remoto" 
            />
          </div>
          <div className={styles.flexWrapper}>
            <TextareaAutosize
              className={styles.textArea}
              name="t200_description"
              id="t200_description"
              aria-label="empty textarea"
              placeholder="Escribe los requerimientos de la vacante"
              style={{ width: 500, height: 300 }}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className={`${styles.groudButton}`}>
          <button
            onClick={createJob}
            className={`${styles.btn} btn btn-outline-success`}
          >
            Publicar Vacante
          </button>
          <button className={`${styles.btn} btn btn-outline-secondary`}>
            Limiar Formulario
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <FormLocationJob />
      </Modal>
    </section>
  );
};

export default PageAddJob;
