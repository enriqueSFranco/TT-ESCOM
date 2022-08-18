import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useForm } from "hooks/useForm";
import { usePassword } from "hooks/usePassword";
import { initialForm } from "types/createNewCanditate";
import Input from "components/Input/Input";
import {
  MdEmail,
  MdOutlineErrorOutline,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import styles from "../Styles.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t100_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
  };

  if (!form.t100_email.trim())
    errors.t100_email = "El campo 'Email' es requerido.";
  else if (!regex.t100_email.test(form.t100_email.trim()))
    errors.t100_email = "El campo 'Email' es incorrecto.";

  if (!form.password.trim())
    errors.password = "El campo 'Contraseña' es requerido.";
  else if (!regex.password.test(form.password.trim()))
    errors.password = "La Contraseña es incorrecta.";

  return errors;
};

const CreateAccount = () => {
  const { form, errors, handleChange, handleValidate, handleSubmitStudent } =
    useForm(initialForm, validateForm);
  const [showPassword, handleShowPassword] = usePassword();

  return (
    <>
      <div
        className={`container bg-primary shadow rounded ${styles.wrapperCreateAccountStudent}`}
      >
        <div className="row">
          <div className={`${styles.bg} col rounded`}></div>
          <div
            className={`col bg-white p-3 text-center rounded-end ${styles.createAccountStudentForm}`}
          >
            <div className={styles.welcome}>
              <h2>crea tu cuenta y aplica ya</h2>
              <span>Bienvenido! Porfavor introduce tus datos.</span>
            </div>
            <form onSubmit={handleSubmitStudent} className={styles.form}>
              <div className={styles.inputGroupCreatAccountStudent}>
                <Input
                  label="Correo electronico"
                  id="t100_email"
                  name="t100_email"
                  icon={<MdEmail />}
                  value={form.t100_email}
                  onBlur={handleValidate}
                  onKeyUp={handleValidate}
                  onChange={handleChange}
                />
                {errors.t100_email && (
                  <span className={styles.error}>
                    <MdOutlineErrorOutline />
                    {errors.t100_email}
                  </span>
                )}
              </div>
              <div className={styles.inputGroupCreatAccountStudent}>
                <Input
                  label="Contraseña"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  icon={showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                  value={form.password}
                  onBlur={handleValidate}
                  onKeyUp={handleValidate}
                  onChange={handleChange}
                  onClick={handleShowPassword}
                />
                {errors.password && (
                  <span className={styles.error}>
                    <MdOutlineErrorOutline />
                    {errors.password}
                  </span>
                )}
              </div>
              <div className={styles.inputGroupCreatAccountStudent}>
                <button
                  type="submit"
                  className={`${styles.btnCreateAccount} btn btn-primary`}
                >
                  Crear Cuenta
                </button>
              </div>
            </form>
            <div className={`${styles.login}`}>
              <blockquote>
                Un paso más cerca de tu nuevo <em>empleo</em>.
              </blockquote>
              <span>
                Ya tines cuenta?{" "}
                <Link className={`${styles.linkToLogin}`} to="/alumno">
                  Inicia sesion
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default CreateAccount;
