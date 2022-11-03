import { Toaster } from "react-hot-toast";
import { useForm } from "hooks/useForm";
import { usePassword } from "hooks/usePassword";
import { initialForm } from "types/createNewCanditate";
import LinkButton from "components/Button/LinkButton";
import Input from "components/Input/Input";
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
} from "../styled-components/FormLoginCompanyStyled";
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
    <LayoutHome>
      <WrapperForm>
        <h2 style={{fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem', color: '#2B3647', fontWeight: '600'}}>Crear cuenta como candidato</h2>
        <Form onSubmit={handleSubmitStudent}>
          <BoxInput>
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
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t100_email}
              </div>
            )}
          </BoxInput>
          <BoxInput>
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
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.password}
              </div>
            )}
          </BoxInput>
          <Button type="submit" width="400px">
            Crear Cuenta
          </Button>
        </Form>
        <Register>
          <span>
            ¿Ya tines una cuenta?
          </span>
          <LinkButton text="Inicia sesion aqui" to="/alumno" />
        </Register>
      </WrapperForm>
      <Toaster position="top-right" />
    </LayoutHome>
  );
};

export default CreateAccount;
