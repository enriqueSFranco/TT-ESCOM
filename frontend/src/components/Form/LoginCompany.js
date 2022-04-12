import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../context/AuthContext";
import TextField from "@mui/material/TextField";
import styles from "./Styles.module.css";

let initialForm = {
  rfc: "",
  password: "",
};

const LoginCompany = () => {
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
      <div className="row align-items-stretch">
        <div
          className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
          <h1>Bolsa de trabajo ESCOM</h1>
        </div>
        <div className={`col bg-white p-5 rounded-end ${styles.formLogin}`}>
        <div className={styles.welcome}>
            <h2>Bienvenido</h2>
            <span>Bienvenido! Porfavor introduce tus datos.</span>
          </div>
          <form onSubmit={login}>
            {/* input para el username */}
            <div className={styles.inputGroup}>
              <TextField
                label="RFC"
                id="rfc"
                name="rfc"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.rfc}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            <div className={styles.inputGroup}>
              <TextField
                label="Contraseña"
                id="password"
                name="password"
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
            <div className={styles.createAccount}>
              <span>
                No tines cuenta? <Link to="/registro-reclutador">Registrate</Link>
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

export default LoginCompany;
