import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/usePassword";
import { $ajax } from "../../utils/$ajax";
import Input from "../Input/Input";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io"
import styles from "./Styles.module.css";

let initialForm = {
  t100_name: "",
  t100_boleta: "",
  t100_academic_level: "",
  t100_email: "",
  t100_password: "",
};

const CreateAccount = () => {
  const { showPassword, toggle } = useShowPassword(false);
  const { form, handleChange } = useForm(initialForm);

  if (form === null) return;

  const handleSubmit = (e) => {
    e.preventDefault();

    let options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: form,
    };
    console.log(form)
    $ajax()
      .POST("/api/students/", options)
      .then((response) => {
        if (!response.err) {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container w-90">
        <div className="my-5">
          <h3 className={styles.form_title}>Crear Cuenta</h3>
          <form onSubmit={handleSubmit}>
            {/* campo para el nombre */}
            <div className={`${styles.inner} mb-3`}>
                <i className={styles.right_icon}>
                  <FaIcon.FaUser />
                </i>
                <Input
                  type="text"
                  id="t100_name"
                  name="t100_name"
                  placeholder="Nombre(s)"
                  className={styles.input}
                  value={form.t100_name}
                  onChange={handleChange}
                />
            </div>
            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <MdIcon.MdSchool />
              </i>
              <Input
                type="text"
                id="t100_boleta"
                name="t100_boleta"
                placeholder="Numero de boleta"
                className={styles.input}
                value={form.t100_boleta}
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.inner} mb-3`}>
              <i className={`${styles.right_icon} ${styles.customArrow}`}>
                <IoIcon.IoMdArrowDropdown />
              </i>
              <select className={`${styles.levelAcademic} ${styles.noArrowSelect}`} name="t100_academic_level" onChange={handleChange}>
                <option value="3">3er Semestre</option>
                <option value="4">4to Semestre</option>
                <option value="5">5to Semestre</option>
                <option value="6">6to Semestre</option>
                <option value="7">7to Semestre</option>
                <option value="8">8to Semestre</option>
                <option value="graduado">Graduado</option>
              </select>
            </div>

            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <MdIcon.MdEmail />
              </i>
              <Input
                type="t100_email"
                id="t100_email"
                name="t100_email"
                placeholder="Correo electrónico"
                className={styles.input}
                value={form.t100_email}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.inner} mb-3`}>
              <i
                className={`${styles.right_icon} ${styles.eye_password}`}
                onClick={toggle}
              >
                {showPassword ? <FaIcon.FaEye /> : <FaIcon.FaEyeSlash />}
              </i>
              <Input
                type={showPassword ? "text" : "password"}
                id="t100_password"
                name="t100_password"
                placeholder="Contraseña"
                className={styles.input}
                value={form.t100_password}
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
      </div>
    </>
  );
};

export default CreateAccount;
