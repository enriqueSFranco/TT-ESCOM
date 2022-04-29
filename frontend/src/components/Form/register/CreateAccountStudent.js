import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useForm } from "hooks/useForm";
import { studentInitialForm } from "../schemes";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineMail, MdOutlineErrorOutline } from "react-icons/md";
import styles from "../Styles.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t100_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/, // el campo nombre debe ser de 4 a 16 digitos
    t100_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
  };

  if (!form.t100_name.trim())
    errors.t100_name = "El campo 'Nombre' es requerido.";
  else if (!regex.t100_name.test(form.t100_name.trim()))
    errors.t100_name =
      "El campo 'Nombre' solo acepta letras y espacios en blanco.";

  if (!form.t100_email.trim())
    errors.t100_email = "El campo 'Email' es requerido.";
  else if (!regex.t100_email.test(form.t100_email.trim()))
    errors.t100_email = "El campo 'Email' es incorrecto.";

  if (!form.password.trim())
    errors.password = "El campo 'Contraseña' es requerido.";
  else if (!regex.password.test(form.password.trim()))
    errors.password = "La Contraseña es incorrecta.";

  return errors;
};

const CreateAccount = () => {
  const { form, errors, handleChange, handleValidate, handleSubmitStudent } =
    useForm(studentInitialForm, validateForm);
  
    return (
      <>
        <div className={`container bg-primary shadow rounded ${styles.wrapperCreateAccountStudent}`}>
          <div className="row">
            <div
              className={`${styles.bg} col rounded`}
            >
              <div className={`${styles.login}`}>
                <blockquote>
                  Un paso más cerca de tu nuevo <em>empleo</em>.
                </blockquote>
                <span>
                  Ya tines cuenta?{" "}
                  <Link className={`${styles.linkToLogin}`} to="/alumno">
                    Inicia sesion
                  </Link>
                </span>
                <span>
                  <a href="/#">Recuperar contraseña</a>
                </span>
              </div>
            </div>
            <div className={`col bg-white p-3 text-center rounded-end ${styles.createAccountStudentForm}`}>
              <div className={styles.welcome}>
                <h2>Bienvenido</h2>
                <span>Bienvenido! Porfavor introduce tus datos.</span>
              </div>
              <form onSubmit={handleSubmitStudent} className={styles.form}>
                <div className={styles.inputGroupCreatAccountStudent}>
                  <TextField
                    label="Nombre de usuario"
                    id="t100_username"
                    name="t100_username"
                    sx={{ width: 500, maxWidth: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BiUser />
                        </InputAdornment>
                      )
                    }}
                    color={errors.t100_name ? "warning" : "success"}
                    value={form.t100_name}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                  />
                  {errors.t100_name && (
                    <span className={styles.error}><MdOutlineErrorOutline />{errors.t100_name}</span>
                  )}
                </div>
                <div className={styles.inputGroupCreatAccountStudent}>
                  <TextField
                    label="Correo electronico"
                    id="t100_email"
                    name="t100_email"
                    sx={{ width: 500, maxWidth: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MdOutlineMail />
                        </InputAdornment>
                      )
                    }}
                    color={errors.t100_email ? "warning" : "success"}
                    value={form.t100_email}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                  />
                  {errors.t100_email && (
                    <span className={styles.error}><MdOutlineErrorOutline />{errors.t100_email}</span>
                  )}
                </div>
                <div className={styles.inputGroupCreatAccountStudent}>
                  <TextField
                    label="Contraseña"
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onBlur={handleValidate}
                    onKeyUp={handleValidate}
                    onChange={handleChange}
                    sx={{ width: 500, maxWidth: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RiLockPasswordLine />
                        </InputAdornment>
                      )
                    }}
                    color={errors.password ? "warning" : "success"}
                  />
                  {errors.password && (
                    <span className={styles.error}><MdOutlineErrorOutline />{errors.password}</span>
                  )}
                </div>
                <div className={styles.inputGroupCreatAccountStudent}>
                  <button
                    type="submit"
                    className={`${styles.btnCreateAccount} btn btn-primary`}
                  >
                    Crear Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster position="top-right" />
      </>
    );
};

export default CreateAccount;
