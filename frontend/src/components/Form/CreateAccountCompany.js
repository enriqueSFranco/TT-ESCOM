import React from "react"
import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/usePassword";
import Input from "../Input/Input";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import styles from "./Styles.module.css";

const initialForm = {
  nameCompany: "",
  rfcCompany: "",
  emailCompany: "",
  roleCompany: "",
};

const FormCompany = () => {
  const { form, handleChange } = useForm(initialForm);
  const { showPassword, toggle } = useShowPassword(false);

  return (
    <>
      <div className="container my-5">
        <h3 className={styles.form_title}>Registro de Empresa</h3>
        <form>
          {/* input para el nombre de la empresa */}
          <div className={`${styles.inner} mb-3`}>
            <i className={styles.right_icon}>
              <FaIcon.FaBuilding />
            </i>
            <Input
              type="text"
              id="nameCompany"
              name="nameCompany"
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
              onClick={toggle}
            >
              {showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
            </i>
            <Input
              type="text"
              name="rfcCompany"
              id="rfcCompany"
              placeholder="RFC"
              className={`${styles.input} ${styles.ti_16}`}
              value={form.rfcCompany}
              onChange={handleChange}
            />
          </div>
          {/* input para el giro de la empresa */}
          <div className={`${styles.inner} mb-3`}>
            <i className={styles.right_icon}>
              <MdIcon.MdCardTravel />
            </i>
            <Input
              type="text"
              id="roleCompany"
              name="roleCompany"
              placeholder="Giro de la Empresa"
              className={`${styles.input} ${styles.ti_16}`}
              value={form.roleCompany}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.inner} mb-3`}>
            <i className={styles.right_icon}>
              <MdIcon.MdEmail />
            </i>
            <Input
              type="email"
              id="emailCompany"
              name="emailCompany"
              placeholder="Correo Electronico"
              className={`${styles.input} ${styles.ti_16}`}
              value={form.emailCompany}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCompany;
