import React from "react";

import { useForm } from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
import { $ajax } from "../utils/$ajax";
import { numberFormat } from "../utils/numberFormat";
import Modal from "../components/Modal/Modal";
import Label from "../components/Input/Label";
import Input from "../components/Input/Input";
import Span from "../components/Input/Span";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./PageAddJob.module.css";
import FormLocationJob from "../components/Form/FormLocationJob";

let now = new Date();

let initialForm = {
  t200_job: "",
  jobLocation: "",
  exp: "",
  profileJob: "",
  t200_max_salary: null,
  initHour: now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
  endHour: "",
  t200_description: "",
};

const PageAddJob = () => {
  const { form, handleChange } = useForm(initialForm);
  const [isOpen, closeModal] = useModal();
  console.log(form.initHour);
  let options = {
    heders: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: form,
  };
  console.log(form);

  const createJob = (e) => {
    e.preventDefault();
    $ajax()
      .POST("/api/Vacants/", options)
      .then((response) => {
        if (!response.err) {
          console.info(response);
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
                  id="nameJob"
                  name="nameJob"
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
                <option value="becario">Becario</option>
                <option value="pasante">Pasante</option>
                <option value="titulado">Titulado</option>
                <option value="estudiante">Estudiante</option>
              </select>
            </div>
            <div className={styles.select}>
              <select
                defaultValue=""
                name="exp"
                onChange={handleChange}
                className={styles.select}
              >
                <option value="" disabled>
                  Experiencia
                </option>
                <option value="1">6 meses a 1 año</option>
                <option value="2">2 años</option>
                <option value="3">3 años</option>
                <option value="4">mas de 4 años</option>
              </select>
            </div>
          </div>
          <div className={styles.flexWrapper}>
            <Label htmlFor="t200_max_salary">
              <input 
                type="text"
                value={form.t200_max_salary}
                onChange={handleChange}
                name="t200_max_salary"
                id="t200_max_salary"
              />
              {/* <NumberFormatCustom
                placeholder=" "
              /> */}
              {/* <Span content="Sueldo" /> */}
            </Label>
            <div className={`${styles.wrapperHourWork} `}>
              <Input
                type="time"
                name="initHour"
                id="initHour"
                value={form.initHour}
                onChange={handleChange}
              />
              <Input
                type="time"
                name="endHour"
                id="endHour"
                value={form.endHour}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.flexWrapper}>
            <TextareaAutosize
              className={styles.textArea}
              name="requirements"
              id="requirements"
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
