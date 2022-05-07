import React from "react";
import { useForm } from "../../../hooks/useForm";
import Input from "../../Element/Input/Input";
import * as MdIcon from "react-icons/md";
import styles from "./FormLocation.module.css";

let initialForm = {
  street: "",
  numInt: "",
  numExt: "",
  postalCode: "",
  suburb: "",
  town: "",
  federalEntity: "",
};

const FormLocationJob = () => {
  const { form, handleChange } = useForm(initialForm);

  console.log(form);

  return (
    <div className={styles.container}>
      <div className={`${styles.title}`}>
        <MdIcon.MdLocationPin />
        <span>ubicacion</span>
      </div>
      <form>
        <div className={styles.containerFlex}>
          <Input
            type="text"
            name="street"
            id="street"
            placeholder="Calle"
            className={`${styles.input} ${styles.ti_16}`}
            value={form.street}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="numInt"
            id="numInt"
            placeholder="No.Int"
            className={`${styles.input} ${styles.w100}`}
            value={form.numInt}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="numExt"
            id="numExt"
            placeholder="No.Ext"
            className={`${styles.input} ${styles.w100}`}
            value={form.numExt}
            onChange={handleChange}
          />
        </div>
        <div className={styles.containerFlex}>
          <Input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Codigo Postal"
            className={`${styles.input} ${styles.ti_16}`}
            value={form.postalCode}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="suburb"
            id="suburb"
            placeholder="Colonia"
            className={`${styles.input} ${styles.ti_16}`}
            value={form.suburb}
            onChange={handleChange}
          />
        </div>
        <div className={styles.containerFlex}>
          <Input
            type="text"
            name="town"
            id="town"
            placeholder="Alcaldia/Municipio"
            className={`${styles.input} ${styles.ti_16}`}
            value={form.town}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="federalEntity"
            id="federalEntity"
            placeholder="No.Int"
            className={`${styles.input} ${styles.ti_16}`}
            value={form.federalEntity}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid p-3">
          <button type="submit" className="btn btn-primary">
            Publicar Vacante
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLocationJob;
