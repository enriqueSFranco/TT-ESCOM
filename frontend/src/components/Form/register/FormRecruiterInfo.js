import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { BiUser } from "react-icons/bi";
import {
  MdOutlineMail,
  MdOutlineErrorOutline,
  MdLocalPhone,
} from "react-icons/md";
import styles from "../Styles.module.css";

const FormRecruiterInfo = ({
  prevStep,
  form,
  errors,
  handleSubmitCompany,
  handleChange,
  handleValidate,
  isActive,
  setIsAcitve
}) => {

  const handleClick = () => setIsAcitve(!isActive);

  console.log("isAcitve:",isActive)

  return (
    <div className={styles.personalContact}>
      {!isActive ? (
        <h2
          style={{
            margin: "1rem 0",
            color: "#028dd4",
          }}
        >
          Datos Personales
        </h2>
      ) : <h2 style={{color: "#028dd4", textAlign: "left"}}>Datos Personales</h2>}
      <form onSubmit={handleSubmitCompany}>
        <div className={styles.inputGroup}>
          <TextField
            label="Nombre(s)"
            type="text"
            id="t301_name"
            name="t301_name"
            sx={{ width: 490, maxWidth: "100%" }}
            value={form.t301_name}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
            InputProps={{
              startAdornment: form.t301_name && (
                <InputAdornment position="start">
                  <BiUser />
                </InputAdornment>
              ),
            }}
          />
          {errors.t301_name && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_name}
            </span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Apellidos"
            id="t301_last_name"
            name="t301_last_name"
            sx={{ width: 490, maxWidth: "100%" }}
            value={form.t301_last_name}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
            InputProps={{
              startAdornment: form.t301_last_name && (
                <InputAdornment position="start">
                  <BiUser />
                </InputAdornment>
              ),
            }}
          />
          {errors.t301_last_name && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_last_name}
            </span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Correo electronico"
            id="t301_email"
            name="t301_email"
            sx={{ width: 490 }}
            value={form.t301_email}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
            InputProps={{
              startAdornment: form.t301_email && (
                <InputAdornment position="start">
                  <MdOutlineMail />
                </InputAdornment>
              ),
            }}
          />
          {errors.t301_email && (
            <span className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t301_email}
            </span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Telefono"
            id="t301_phonenumber"
            name="t301_phonenumber"
            sx={{ width: 490 }}
            value={form.t301_phonenumber}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
            InputProps={{
              startAdornment: form.t301_phonenumber && (
                <InputAdornment position="start">
                  <MdLocalPhone />
                </InputAdornment>
              ),
            }}
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
              Regresar
            </button>
          ) : (
            <button className={styles.btnBack} onClick={handleClick} type="button">
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
