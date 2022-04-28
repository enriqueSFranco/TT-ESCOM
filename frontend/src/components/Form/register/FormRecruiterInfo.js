import React from "react";
import TextField from "@mui/material/TextField";
import * as MdIcon from "react-icons/md";
import styles from "../Styles.module.css";

const FormRecruiterInfo = ({ prevStep, form, errors, handleSubmitCompany, handleChange, handleValidate }) => {
  console.log(errors)
  return (
    <div className={styles.personalContact}>
      <form onSubmit={handleSubmitCompany}>
        <h2>Datos Personales</h2>
        <div className={styles.flexRow}>
          <div className={styles.inputGroup}>
            <TextField
              label="Nombre(s)"
              type="text"
              id="t301_name"
              name="t301_name"
              sx={{ width: 240, maxWidth: "100%" }}
              value={form.t301_name}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
              onChange={handleChange}
            />
            {errors.t301_name && (
            <span className={styles.error}>
              <MdIcon.MdOutlineErrorOutline />
              {errors.t301_name}
            </span>
          )}
          </div>

          <div className={styles.inputGroup}>
            <TextField
              label="Apellidos"
              id="t301_last_name"
              name="t301_last_name"
              sx={{ width: 240, maxWidth: "100%" }}
              value={form.t301_last_name}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
              onChange={handleChange}
            />
            {errors.t301_last_name && (
              <span className={styles.error}>
                <MdIcon.MdOutlineErrorOutline />
                {errors.t301_last_name}
              </span>
          )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Correo electronico"
            id="t301_email"
            name="t301_email"
            sx={{ width: 500, maxWidth: "100%" }}
            value={form.t301_email}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_email && (
          <span className={styles.error}>
            <MdIcon.MdOutlineErrorOutline />
            {errors.t301_email}
          </span>
        )}
        </div>
        {/* <div className={styles.inputGroup}>
          <TextField
            label="Contraseña"
            type="password"
            id="t301_password"
            name="t301_password"
            sx={{ width: 500, maxWidth: "100%" }}
            value={form.t301_password}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_password && (
          <span className={styles.error}>
            <MdIcon.MdOutlineErrorOutline />
            {errors.t301_password}
          </span>
        )}
        </div> */}
        <div className={styles.inputGroup}>
          <TextField
            label="Telefono"
            id="t301_phonenumber"
            name="t301_phonenumber"
            sx={{ width: 500, maxWidth: "100%" }}
            value={form.t301_phonenumber}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_phonenumber && (
          <span className={styles.error}>
            <MdIcon.MdOutlineErrorOutline />
            {errors.t301_phonenumber}
          </span>
        )}
        </div>
        <div className={styles.wrapperButtons}>
          <button className={styles.btnBack} onClick={prevStep} type="button">
            regresar
          </button>
          <button className={styles.btnRegister} type="submit">Enviar Pre-Registro</button>
        </div>
      </form>
    </div>
  );
};

export default FormRecruiterInfo;
