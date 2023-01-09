import React from "react";
import { Input } from "components/Input/Input";
import { MdOutlineErrorOutline } from "react-icons/md";
import { TiArrowBackOutline } from "react-icons/ti";
import styles from "../Styles.module.css";

const FormRecruiterInfo = ({
  prevStep,
  form,
  errors,
  handleSubmitCompany,
  handleChange,
  handleValidate,
  isActive,
  setIsAcitve,
}) => {
  const handleClick = () => setIsAcitve(!isActive);

  return (
    <div className={styles.personalContact}>
      {!isActive ? (
        <h2
          className={styles.title}
          style={{ marginBottom: "22px", textAlign: "center" }}
        >
          Datos Personales del reclutador
        </h2>
      ) : (
        <h2
          className={styles.title}
          style={{ marginBottom: "10px", textAlign: "center" }}
        >
          Datos Personales
        </h2>
      )}
      <form onSubmit={handleSubmitCompany}>
        <div className={styles.inputGroup}>
          <Input
            label="Nombre(s)"
            type="text"
            id="t301_name"
            name="t301_name"
            width="500px"
            value={form.t301_name}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_name && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_name}
            </span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <Input
            label="Apellidos"
            id="t301_last_name"
            name="t301_last_name"
            width="500px"
            value={form.t301_last_name}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_last_name && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_last_name}
            </span>
          )}
        </div>
        {/* <div className={styles.inputGroup}>
          <Input
            label="Segundo Apellido"
            id="t301_second_surname"
            name="t301_second_surname"
            width="500px"
            value={form.t301_second_surname}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
        </div> */}
        <div className={styles.inputGroup}>
          <Input
            label="Correo electronico"
            id="t301_email"
            name="t301_email"
            width="500px"
            value={form.t301_email}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_email && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_email}
            </span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <Input
            label="Telefono"
            id="t301_phonenumber"
            name="t301_phonenumber"
            width="500px"
            value={form.t301_phonenumber}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_phonenumber && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_phonenumber}
            </span>
          )}
        </div>
        <div className={styles.wrapperButtons}>
          {!isActive ? (
            <button className={styles.btnBack} onClick={prevStep} type="button">
              <TiArrowBackOutline style={{ fontSize: "1.2rem" }} />
              Regresar
            </button>
          ) : (
            <button
              className={styles.btnBack}
              onClick={handleClick}
              type="button"
            >
              Regresar
            </button>
          )}
          <button className={styles.btnRegister} type="submit">
            Enviar Pre-Registro
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRecruiterInfo;
