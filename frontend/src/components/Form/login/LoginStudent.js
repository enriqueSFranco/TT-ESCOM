import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { initialFormLoginCandidate } from "types/loginUsers";
import TextField from "@mui/material/TextField";
import { useAuth } from "context/AuthContext";
import { Toaster } from "react-hot-toast";
import { InputAdornment } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "./LoginStudent.module.css";

const Form = () => {
  const { form, handleChange } = useForm(initialFormLoginCandidate);
  const { loginCandidate } = useAuth();

  return (
    <>
      <div className={`container bg-white shadow rounded ${styles.wrapper}`}>
        <div className="row">
          <div className={`${styles.bgLoginStudent} col rounded`}>
            <div className={`${styles.wrapperTitleLogin}`}>
              <blockquote>
                Un paso más cerca de tu nuevo <span>trabajo</span>.
              </blockquote>
            </div>
          </div>
          <div className={`col text-center bg-white p-3 rounded-end ${styles.contentLogin}`}>
            <div className={styles.welcome}>
              <h2>Bienvenid@ a la btescom</h2>
              <span>Encuentra el trabajo a tu medida.</span>
            </div>
            <form onSubmit={loginCandidate} className={styles.form}>
              {/* input para la boleta */}
              <div className={styles.inputGroup}>
                <TextField
                  label="Correo electronico"
                  id="t100_email"
                  name="t100_email"
                  sx={{ width: 500, maxWidth: "100%" }}
                  value={form.t100_email}
                  onChange={handleChange}
                  helperText="Porfavor, escribe tu correo electronico"
                  InputProps={{
                    startAdornment: form.t100_email && (
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
                  label="Contraseña"
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  helperText="Porfavor, escribe tu contraseña"
                  InputProps={{
                    startAdornment: form.password && (
                      <InputAdornment position="start">
                        <RiLockPasswordLine />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: 500, maxWidth: "100%" }}
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
            <span className={styles.noAccount}>
              No tines cuenta?{" "}
              <Link className={`${styles.linkToLogin}`} to="/registro-alumno">
                Registrate aqui.
              </Link>
            </span>
            </form>
            <section className={styles.wrapperLoginRecruiter}>
              <div className={styles.separator}></div>
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem"}}>
                <span className={styles.postJobTitle} style={{fontSize: "1rem"}}>Quieres publicar vacantes?</span>
                <Link className={styles.linkToRegisterRecruiter} to="/registro-reclutador">Solicitalo aqui</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Form;
