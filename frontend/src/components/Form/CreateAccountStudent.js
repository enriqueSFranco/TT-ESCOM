import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/usePassword";
import { $ajax } from "../../utils/$ajax";
import Input from "../Input/Input";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import styles from "./Styles.module.css";

let initialForm = {
  fullName: "",
  boleta: "",
  email: "",
  password: "",
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

    $ajax()
      .POST("/usuario/usuario/", options)
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
            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <FaIcon.FaUser />
              </i>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nombre Completo"
                className={styles.input}
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <FaIcon.FaUser />
              </i>
              <Input
                type="text"
                id="boleta"
                name="boleta"
                placeholder="Numero de boleta"
                className={styles.input}
                value={form.boleta}
                onChange={handleChange}
              />
            </div>

            <div className={`${styles.inner} mb-3`}>
              <i className={styles.right_icon}>
                <MdIcon.MdEmail />
              </i>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Escribre tu correo electrónico"
                className={styles.input}
                value={form.email}
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
                id="password"
                name="password"
                placeholder="Escribre tu contraseña"
                className={styles.input}
                value={form.password}
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
