import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { loginFormCompany } from "../../types/schemes";
import AuthContext from "context/AuthContext";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import styles from "../Styles.module.css";

const LoginCompany = () => {
  const { form, handleChange } = useForm(loginFormCompany);
  const { loginRecruiter } = useContext(AuthContext);

  return (
    <div className={`container bg-white shadow rounded ${styles.wrapper}`}>
      <div className="row align-items-stretch">
        <div
          className={`${styles.bgLoginCompany} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
        </div>
        <div className={`col bg-white text-center p-5 rounded-end`}>
          <div className={styles.welcome}>
            <h2>que bueno tenerte de vuelta</h2>
            <span>Bienvenido! Porfavor introduce tus datos.</span>
          </div>
          <form onSubmit={loginRecruiter} className={styles.form}>
            {/* input para el username */}
            <div className={styles.inputGroup}>
              <TextField
                label="Correo electronico"
                id="t301_email"
                name="t301_email"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t301_email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: form.t301_email && (
                    <InputAdornment position="start">
                      <MdOutlineMail />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* input para el password */}
            <div className={styles.inputGroup}>
              <TextField
                type="password"
                label="Contraseña"
                id="password"
                name="password"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: form.password && (
                    <InputAdornment position="start">
                      <RiLockPasswordLine />
                    </InputAdornment>
                  ),
                }}
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
          <div className={`${styles.linkToRegisterRecruiter}`}>
            <span>
              Aun no te has unido con nosotros?{" "}
              <Link
                className={`${styles.linkToLogin}`}
                to="/registro-reclutador"
              >
                Registrate a qui
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
