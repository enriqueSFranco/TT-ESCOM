import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import TextField from "@mui/material/TextField";
import AuthContext from "../../context/AuthContext";
import styles from "./Styles.module.css";

let initialForm = {
  t100_boleta: "",
  t100_password: "",
};

const Form = () => {
  // const { showPassword, toggle } = useShowPassword(false);
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <div className="container w-75 bg-primary shadow rounded">
      <div className="row align-items-stretch">
        <div
          className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
          <h1>
            Un paso más cerca de tu nuevo{" "}
            <span className={styles.work}>trabajo.</span>
          </h1>
        </div>
        <div className="col bg-white p-5 rounded-end">
          <div className={styles.welcome}>
            <h2>Bienvenido</h2>
            <span>Bienvenido! Porfavor introduce tus datos.</span>
          </div>
          <form onSubmit={login}>
            {/* input para la boleta */}
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
                label="Contraseña"
                id="t100_password"
                name="t100_password"
                type="password"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_password}
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
            <div className="my-3">
              <span>
                No tines cuenta? <Link to="/registro-alumno">Registrate</Link>
              </span>
              <br />
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
