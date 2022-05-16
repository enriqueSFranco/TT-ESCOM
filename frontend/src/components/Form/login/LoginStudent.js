import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import TextField from "@mui/material/TextField";
import AuthContext from "context/AuthContext";
import { InputAdornment } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "./LoginStudent.module.css";
import { Toaster } from "react-hot-toast";

let initialForm = {
  t100_email: "",
  password: "",
};

const Form = () => {
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <>
      <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
        <div className="row">
          <div className={`${styles.bg} col rounded`}>
            <div className={`${styles.login}`}>
              <blockquote>
                Un paso más cerca de tu nuevo <span>trabajo</span>.
              </blockquote>
            </div>
          </div>
          <div className={`col text-center bg-white p-3 rounded-end`}>
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
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Form;
