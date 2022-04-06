import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { studentInitialForm } from "./schemes";
import TextField from "@mui/material/TextField";
import styles from "./Styles.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t100_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/, // el campo nombre debe ser de 4 a 16 digitos
    t100_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    t100_password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
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

  if (!form.t100_password.trim())
    errors.t100_password = "El campo 'Contraseña' es requerido."

  return errors;
};

const CreateAccount = () => {
  const {
    form,
    errors,
    handleChange,
    hadlerValidate,
    handlerSubmitStudent,
  } = useForm(studentInitialForm, validateForm);

  if (form === null) return;

  return (
    <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
      <div className="row align-items-stretch">
        <div
          className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
          <h1>Bolsa de trabajo ESCOM</h1>
        </div>
        <div className={`col bg-white p-5 rounded-end ${styles.form}`}>
          <h2 className={`${styles.welcome}`}>Bienvenido</h2>
          <form onSubmit={handlerSubmitStudent}>
            {/* input para el username */}
            <div className={styles.inputGroup}>
              <TextField
                label="Nombre"
                id="t100_name"
                name="t100_name"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_name}
                onBlur={hadlerValidate}
                onKeyUp={hadlerValidate}
                onChange={handleChange}
              />
              {errors.t100_name && (
                <span className={styles.error}>{errors.t100_name}</span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <TextField
                label="Boleta"
                id="t100_boleta"
                name="t100_boleta"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_boleta}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            <div className={styles.inputGroup}>
              <TextField
                label="Correo electronico"
                id="t100_email"
                name="t100_email"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_email}
                onBlur={hadlerValidate}
                onKeyUp={hadlerValidate}
                onChange={handleChange}
              />
              {errors.t100_email && (
                <span className={styles.error}>{errors.t100_email}</span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <TextField
                label="Contraseña"
                id="t100_password"
                name="t100_password"
                type="password"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_password}
                onBlur={hadlerValidate}
                onKeyUp={hadlerValidate}
                onChange={handleChange}
              />
              { errors && <span className={styles.error}>{errors.t100_password}</span>}
            </div>
            <div className={styles.inputGroup}>
              <button
                type="submit"
                className={`${styles.btnCreateAccount} btn btn-primary`}
              >
                Crear Cuenta
              </button>
            </div>
            <div className={`${styles.linkCreateAccount}`}>
              <span>
                Ya tines cuenta? <Link to="/alumno">Inicia sesion</Link>
              </span>
              <br />
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </form>
          {/* { response && <Message msg="Cuenta creada exitosamente" bgColor="#198754" />} */}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;