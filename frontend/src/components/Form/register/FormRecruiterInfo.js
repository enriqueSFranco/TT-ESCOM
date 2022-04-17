import React from "react";
import { useForm } from "hooks/useForm";
import TextField from "@mui/material/TextField";
import styles from "../Styles.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    t301_phone: "",
  };

  if (!form.t301_name.trim())
    errors.t301_name = "El campo 'Nombre' es requerido.";
  else if (!regex.t301_name.test(form.t301_last_name))
    errors.t301_name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";

  if (!form.t301_last_name.trim())
    errors.t301_last_name = "El campo 'Apellidos' es requerido.";
  else if (!regex.t301_last_name.test(form.t301_last_name))
    errors.t301_last_name = "El campo 'Apellidos' no es valido.";

  if (!form.t301_email.trim())
    errors.t301_email = "El campo 'Correo electronico' es requerido.";
  else if (!regex.t301_last_name.test(form.t301_email))
    errors.t301_email = "El campo 'Correo electronico' no es valido.";

};

let initialForm = {
  t301_name: "",
  t301_last_name: "",
  t301_email: "",
  t301_phone: "",
};

const FormRecruiterInfo = ({ prevStep }) => {
  const { form, errors, handleChange, handleSubmitCompany, handleValidate } = useForm(
    initialForm,
    validateForm
  );

  return (
    <div className={styles.personalContact}>
      <form onSubmit={handleSubmitCompany}>
        <h2>Datos Personales</h2>
        <div className={styles.flexRow}>
          <div className={styles.inputGroup}>
            <TextField
              label="Nombre(s)"
              id="t301_name"
              name="t301_name"
              sx={{ width: 240, maxWidth: "100%" }}
              value={form.t301_name}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
              onChange={handleChange}
            />
            {errors.t301_name && (
            <span className="error">{errors.t301_name}</span>
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
            <span className="error">{errors.t301_last_name}</span>
          )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Correo electronico"
            id="t300_email"
            name="t300_email"
            sx={{ width: 500, maxWidth: "100%" }}
            value={form.t300_email}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {/* {errors.t301_email && (
          <span className="error">{errors.t300_email}</span>
        )} */}
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Contraseña"
            id="t301_password"
            name="t301_password"
            sx={{ width: 500, maxWidth: "100%" }}
            value={form.t301_password}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_password && (
          <span className="error">{errors.t301_password}</span>
        )}
        </div>
        <div className={styles.inputGroup}>
          <TextField
            label="Telefono"
            id="t300_phone"
            name="t300_phone"
            sx={{ width: 500, maxWidth: "100%" }}
            value={form.t300_phone}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t301_phone && (
          <span className="error">{errors.t301_phone}</span>
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
