import React from "react";
import { useForm } from "../../hooks/useForm";
import styles from "./FormUpdateDataStudent.module.css";

let initialForm = {
  name: "",
  specialty: "",
  phone: undefined,
  location: "",
  travel: undefined,
  cv: undefined,
  socialNetworks: {
    email: undefined,
    github: undefined,
    gitlab: undefined,
    linkedin: undefined,
  },
};

const FormUpdateDataStudent = () => {
  const { form, handleChange, handleChecked } = useForm(initialForm);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>editar informacion</h1>
        <form>
            <label htmlFor="name" className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                name="name"
                placeholder=" "
                value={form.name}
                id="name"
                onChange={handleChange}
              />
              <span className={styles.inputLabel}>Nombre</span>
            </label>
            <label htmlFor="specialty" className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                name="specialty"
                id="specialty"
                placeholder=" "
                value={form.specialty}
                onChange={handleChange}
              />
              <span className={styles.inputLabel}>Puesto</span>
            </label>
          <div>
          </div>
          <div>
            <label htmlFor="location" className={styles.input}>
              <input
                className={styles.inputField}
                type="text"
                name="location"
                placeholder=" "
                value={form.location}
                onChange={handleChange}
              />
              <span className={styles.inputLabel}>Donde vives</span>
            </label>
            <label htmlFor="travel">Disponibilidad para viajar</label>
            <input
              type="checkbox"
              name="travel"
              id="travel"
              value={form.travel}
              onChange={handleChecked}
            />
          </div>
          <div>
            <label htmlFor="phone" className={styles.input}>
              <input
                className={styles.inputField}
                type="tel"
                name="phone"
                id="phone"
                placeholder=" "
                value={form.phone}
                onChange={handleChange}
              />
              <span className={styles.inputLabel}>Telefono/Whatsapp</span>
            </label>
          </div>
          <div>
            <label htmlFor="cv">cv</label>
            <input
              type="file"
              name="cv"
              id="cv"
              value={form.cv}
              onChange={handleChange}
            />
          </div>
          <div>{/* links de redes sociales */}</div>
        </form>
        <div className="container w-100 my-5">
          <div className="row">
            <div className="col">
              <button className="btn btn-outline-primary w-100 my-1">
                <div className="row align-items-center">
                  <div className="col-12 col-md-10 text-center">Aceptar</div>
                </div>
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-danger w-100 my-1">
                <div className="row align-items-center">
                  <div className="col-12 col-md-10 text-center">Cancelar</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUpdateDataStudent;
