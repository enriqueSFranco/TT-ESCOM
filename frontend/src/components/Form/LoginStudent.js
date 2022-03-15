import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/usePassword";
import Input from "../Input/Input";
import AuthContext from "../../context/AuthContext";
import * as FaIcon from "react-icons/fa";
import styles from "./Styles.module.css";

let initialForm = {
  username: "",
  password: "",
};

const Form = () => {
  const { showPassword, toggle } = useShowPassword(false);
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <>
      <div className="container w-90">
        <div className={`${styles.wrapper} my-5`}>
          <h3 className={styles.form_title}>Iniciar Sesión Alumno</h3>
          <form onSubmit={login}>
            {/* input para el username */}
            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <FaIcon.FaUser />
              </i>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Escribre tu nombre de usuario"
                className={`${styles.input} ${styles.ti_16}`}
                value={form.username}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            <div className={`${styles.inner} mb-3`}>
              <i
                className={`${styles.right_icon} ${styles.eye_password}`}
                onClick={toggle}
              >
                {showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
              </i>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Escribre tu constraseña"
                className={`${styles.input} ${styles.ti_16}`}
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
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
    </>
  );
};

export default Form;
