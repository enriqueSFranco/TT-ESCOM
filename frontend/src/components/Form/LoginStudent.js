import React from "react"

import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/usePassword";
import Input from "../Input/Input";
import AuthContext from "../../context/AuthContext";
import facebook from "../../images/fb.png";
import google from "../../images/google.png"
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
      <div className="container rounded">
        <div className="row align-items-stretch">
          <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
          <div className="col bg-white p-5 rounded-end">
            <h2 className="fw-bold text-center py-4">Bienvenido</h2>
            {/* login */}
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
                  No tines cuenta? <Link to="/crear-cuenta-alumno">Registrate</Link>
                </span>
                <br />
                <span>
                  <a href="/#">Recuperar contraseña</a>
                </span>
              </div>
            </form>
            {/* login con redes sociales */}
            <div className="container w-100 my-5">
              <div className="row text-center">
                <div className="col-12">Iniciar sesión</div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-outline-primary w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img src={facebook} alt="Facebook" width="32" />
                      </div>
                      <div className="col-12 col-md-10 text-center">Facebook</div>
                    </div>
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-outline-danger w-100 my-1">
                    <div className="row align-items-center">
                      <div className="col-2 d-none d-md-block">
                        <img src={google} alt="Google" width="32" />
                      </div>
                      <div className="col-12 col-md-10 text-center">Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
