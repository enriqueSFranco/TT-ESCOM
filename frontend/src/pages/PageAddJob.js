import React from "react"

import { useForm } from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
import Modal from "../components/Modal/Modal";
import Input from "../components/Input/Input";
import NumberFormatCustom from "../components/Input/NumberFormatCustom";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import * as FaIcon from "react-icons/fa";
import styles from "./PageAddJob.module.css";
import FormLocationJob from "../components/Form/FormLocationJob";

let initialForm = {
  nameJob: "",
  jobLocation: "",
  exp: "",
  profileJob: "",
  salary: "",
  initHour: "",
  endHour: "",
  requirements: "",
};

const PageAddJob = () => {
  const { form, handleChange } = useForm(initialForm);
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Publicar vacante</h1>
        <div className={styles.separator}></div>
        <form className={styles.form}>
          <div className={styles.flexWrapper}>
            <Input
              type="text"
              id="nameJob"
              name="nameJob"
              placeholder="Nombre de la vacante"
              className={`${styles.input} ${styles.ti_16}`}
              value={form.nameJob}
              onChange={handleChange}
            />
            <div className={`${styles.containerInput}`}>
              <i className={styles.iconLeft} onClick={openModal}>
                <FaIcon.FaLocationArrow />
              </i>
              <Input
                type="text"
                name="jobLocation"
                id="jobLocation"
                placeholder="Ubicación"
                className={`${styles.input} ${styles.ti24}`}
                value={form.jobLocation}
                onChange={handleChange}
              />
            </div>
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
            <TextField
              label="Sueldo"
              value={form.salary}
              onChange={handleChange}
              name="salary"
              id="salary"
              variant="standard"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
            <div className={`${styles.wrapperHourWork} `}>
              <Input
                type="time"
                name="initHour"
                id="initHour"
                className={styles.input}
                value={form.initHour}
                onChange={handleChange}
              />
              <Input
                type="time"
                name="endHour"
                id="endHour"
                className={styles.input}
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
      </div>
      <div className={`${styles.groudButton}`}>
        <button className={`${styles.btn} btn btn-outline-success`}>
          Publicar Vacante
        </button>
        <button className={`${styles.btn} btn btn-outline-secondary`}>
          Limiar Formulario
        </button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <FormLocationJob />
      </Modal>
    </section>
  );
};

export default PageAddJob;
