import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import TextField from "@mui/material/TextField";
import AuthContext from "context/AuthContext";
import styles from "../Styles.module.css";

let initialForm = {
  t100_email: "",
  password: "",
};

const Form = () => {
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
      <div className="row align-items-stretch">
        <div
          className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
          <div className={`${styles.login}`}>
            <blockquote>
              Un paso más cerca de tu nuevo{" "}
              <em>trabajo</em>.
            </blockquote>
              <span>
                No tines cuenta? <Link className={`${styles.linkToLogin}`} to="/registro-alumno">Registrate</Link>
              </span>
              <br />
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
        </div>
        <div className={`col bg-white p-5 rounded-end ${styles.formLogin}`}>
          <div className={styles.welcome}>
            <h2>iniciar sesion</h2>
            <span>Bienvenido! Porfavor introduce tus datos.</span>
          </div>
          <form onSubmit={login} className={styles.form}>
            {/* input para la boleta */}
            <div className={styles.inputGroup}>
              <TextField
                label="Correo electronico"
                id="t100_email"
                name="t100_email"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_email}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            <div className={styles.inputGroup}>
              <TextField
                label="Contraseña"
                id="password"
                name="password"
                type="password"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.wrapperBtnLogin}>
              <button
                type="submit"
                className={`${styles.btLogin} btn btn-primary`}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
