import { useForm } from "hooks/useForm";
import { usePassword } from "hooks/usePassword";
import { initialForm } from "types/createNewCanditate";
import LinkButton from "components/Button/LinkButton";
import { Input } from "components/Input/Input";
import LayoutHome from "Layout/LayoutHome";
import {
  MdEmail,
  MdOutlineErrorOutline,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import {
  Button,
  BoxInput,
  Form,
  Register,
  WrapperForm,
} from "./Form/styled-components/FormLoginCompanyStyled";
import BaseInput from "./BaseInput";
import { Link } from "react-router-dom";

// const validateForm = (form) => {
//   let errors = {};
//   let regex = {
//     t100_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
//     password:
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
//   };

//   if (!form.t100_email.trim())
//     errors.t100_email = "El campo 'Email' es requerido.";
//   else if (!regex.t100_email.test(form.t100_email.trim()))
//     errors.t100_email = "El campo 'Email' es incorrecto.";

//   if (!form.password.trim())
//     errors.password = "El campo 'Contraseña' es requerido.";
//   else if (!regex.password.test(form.password.trim()))
//     errors.password = "La Contraseña es incorrecta.";

//   return errors;
// };

export const FormCreateAccount = () => {
  // const { form, errors, handleChange, handleValidate, handleSubmitStudent } =
  //   useForm(initialForm, validateForm);
  const [showPassword, handleShowPassword] = usePassword();

  function handleSubmit () {

  }

  return (
    <LayoutHome>
      <div>
        <h2
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#2B3647",
            fontWeight: "600",
          }}
        >
          Crear cuenta como candidato
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <BaseInput
              id="t100_email"
              name="t100_email"
            // value={form.t100_email}
            // onBlur={handleValidate}
            // onKeyUp={handleValidate}
            // onChange={handleChange}
            />
            {/* {errors.t100_email && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t100_email}
              </div>
            )} */}
          </div>
          <div>
            <BaseInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
            // icon={showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            // value={form.password}
            // onBlur={handleValidate}
            // onKeyUp={handleValidate}
            // onChange={handleChange}
            // onClick={handleShowPassword}
            />
            {/* {errors.password && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.password}
              </div>
            )} */}
          </div>
          <button type="submit">
            Crear Cuenta
          </button>
        </form>
        <footer>
          <span>¿Ya tines una cuenta?</span>
          <Link to="/">Inicia sesion aqui</Link>
        </footer>
      </div>
    </LayoutHome>
  );
};
