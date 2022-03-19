import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import AuthContext from '../../context/AuthContext';
import Input from '../Input/Input';
import * as FaIcon from "react-icons/fa";
import styles from './Styles.module.css';


let initialForm = {
  nameCompany: "",
  rfc: "",
  email: "",

}

const LoginCompany = () => {
  const { form, handleChange } = useForm(initialForm);
  const { login } = useContext(AuthContext);

  return (
    <>
      <div className="container w-90">
        <div className={`${styles.wrapper} my-5`}>
          <h3 className={styles.form_title}>Iniciar Sesión Reclutador</h3>
          <form onSubmit={login}>
            {/* input para el nombre de la empresa */}
            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <FaIcon.FaUser />
              </i>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de la Empresa"
                className={`${styles.input} ${styles.ti_16}`}
                value={form.nameCompany}
                onChange={handleChange}
              />
            </div>
            {/* input para el rfc */}
            <div className={`${styles.inner} mb-3`}>
              <i
                className={`${styles.right_icon} ${styles.eye_password}`}
              >
              </i>
              <Input
                type="text"
                name="rfc"
                id="rfc"
                placeholder="RFC"
                className={`${styles.input} ${styles.ti_16}`}
                value={form.rfc}
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
                No tines cuenta? <Link to="/registro-empresa">Registrate</Link>
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
  )
}

export default LoginCompany;
