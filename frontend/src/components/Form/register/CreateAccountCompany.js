import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { Toaster } from "react-hot-toast";
import { companyInitialForm } from "../schemes";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Label from "components/Element/Label/Label";
import * as BsIcon from "react-icons/bs";
import * as BiIcon from "react-icons/bi";
import styles from "../Styles.module.css";

/**
 * RFC DE UNA EMPRESA
 * EJM951103H34
 * EJM: Iniciales de una empresa
 * 951103: Fecha de creacion de la empresa (YY/MM/DD) 95/11/03
 * H34: Homoclave, proporcionada por el SAT
 **/

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t300_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t300_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    t300_rfc: /^([A-ZÑ\x26]{3,4})([0-9]{6})([A-Z0-9]{3})$/,
  };

  if (!form.t300_name.trim())
    errors.t300_name = "El campo 'Nombre de la empresa' es requerido.";
  else if (!regex.t300_name.test(form.t300_name))
    errors.t300_name =
      "El campo 'Empresa' solo acepta letras y espacios en blanco.";

  if (!form.t300_rfc.trim()) errors.t300_rfc = "El campo 'rfc' es requerido.";
  else if (!regex.t300_rfc.test(form.t300_rfc))
    errors.t300_rfc = "El campo 'rfc' no es valido.";

  if (!form.t300_email.trim())
    errors.t300_email = "El campo 'Email' es requerido.";
  else if (!regex.t300_email.test(form.t300_email))
    errors.t300_email = "El campo 'Email' es incorrecto.";

  return errors;
};

const FormCompany = () => {
  const { form, errors, handleChange, handleValidate, handlerSubmitCompany } =
    useForm(companyInitialForm, validateForm);

  return (
    <>
      <div
        className={`container bg-primary shadow rounded ${styles.wrapperCreateAccountCompany}`}
      >
        <div className="row">
          <div className={`${styles.bgCreateAccountCompany} col rounded`}>
            <div className={styles.recoverAccount}>
              <h1>Crea tu cuenta y publica tus vacantes con nosotros.</h1>
            </div>
            <div className={styles.wrapperYouHaveAccount}>
                <span className={styles.youHaveAccount}>
                  Ya tines cuenta?{" "}
                  <Link className={`${styles.linkToLogin}`} to="/reclutador">
                    Inicia sesion
                  </Link>
                </span>
                <span className={styles.recoverPassword}>
                  <a href="/#">Recuperar contraseña</a>
                </span>
              </div>
          </div>
          <div className={`col bg-white p-3 rounded-end`}>
            <form onSubmit={handlerSubmitCompany} className={styles.form}>
              <div className={styles.companyInfo}>
                <div className={`${styles.welcome}`}>
                  <h2>
                    Datos de la empresa{" "}
                    <Tooltip title="Datos">
                      <BsIcon.BsQuestionCircle />
                    </Tooltip>
                  </h2>
                  <a className={styles.youHaveAccountComany} href="#/">
                    Tu empresa ya esta registrada con nosotros ?
                  </a>
                </div>
                <div className={styles.inputGroup}>
                  <TextField
                    label="Nombre de su empresa"
                    id="t300_name"
                    name="t300_name"
                    sx={{ width: 500, maxWidth: "100%" }}
                    value={form.t300_name}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                  />
                  {errors.t300_name && (
                    <Alert severity="error">{errors.t300_name}</Alert>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <TextField
                    label="RFC"
                    id="t300_rfc"
                    name="t300_rfc"
                    sx={{ width: 500, maxWidth: "100%" }}
                    value={form.t300_rfc}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                  />
                  {errors.t300_rfc && (
                    <Alert severity="error">{errors.t300_rfc}</Alert>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <TextField
                    label="Razon Social"
                    id="t300_social"
                    name="t300_social"
                    sx={{ width: 500, maxWidth: "100%" }}
                    value={form.t300_social}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.flexRow}>
                  <p style={{ marginBottom: "1rem" }}>
                    Proporcionanos el documento que valide que tu empresa esta
                    constituida.
                  </p>
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    className={`${styles.inputFile}`}
                    value={form.file}
                    onChange={handleChange}
                  />
                  <Label htmlFor="cv">
                    <BiIcon.BiCloudUpload />
                    subir cv
                  </Label>
                </div>
              </div>
              <div className={styles.personalContact}>
                <h2>Datos Personales</h2>
                <div className={styles.flexRow}>
                  <div className={styles.inputGroup}>
                    <TextField
                      label="Nombre(s)"
                      id="t301_name"
                      name="t301_name"
                      sx={{ width: 240, maxWidth: "100%" }}
                      value={form.t300_name}
                      onBlur={handleValidate}
                      onKeyUp={handleValidate}
                      onChange={handleChange}
                    />
                    {errors.t301_name && (
                      <Alert severity="error">{errors.t301_name}</Alert>
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
                      <Alert severity="error">{errors.t301_last_name}</Alert>
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
                  {errors.t301_email && (
                    <Alert severity="error">{errors.t300_email}</Alert>
                  )}
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
                    <Alert severity="error">{errors.t301_password}</Alert>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <TextField
                    label="Telefono"
                    id="t300_email"
                    name="t300_email"
                    sx={{ width: 500, maxWidth: "100%" }}
                    value={form.t300_email}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                  />
                  {errors.t301_phone && (
                    <Alert severity="error">{errors.t301_phone}</Alert>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className={`${styles.btnPreRegister} btn btn-primary`}
              >
                Confirmar Pre-Registro
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default FormCompany;
