import React from "react";
import { useAuth } from "context/AuthContext";
import { useForm, usePassword } from "hooks";
import { Toaster } from "react-hot-toast";
import LayoutHome from "Layout/LayoutHome";
import { Input } from "components/Input/Input";
import LinkButton from "components/Button/LinkButton";
import { initialFormLoginCandidate } from "types/loginUsers";
import {
  MdEmail,
  MdVisibility,
  MdVisibilityOff,
  MdOutlineErrorOutline,
} from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
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

const FormLoginCandidate = () => {
  const [showPassword, handleShowPassword] = usePassword();
  const { loginCandidate } = useAuth();
  const { form, errors, handleValidate, handleChange } = useForm(
    initialFormLoginCandidate,
    validateForm
  );

  return (
    <LayoutHome>
      <WrapperForm>
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
          Iniciar sesion como candidato
        </h2>
        <Form onSubmit={loginCandidate}>
          <BoxInput>
            <Input
              label="Correo electronico"
              id="t100_email"
              name="t100_email"
              icon={<MdEmail style={{ color: "#1C8EFB" }} />}
              value={form.t100_email}
              onChange={handleChange}
              onBlur={handleValidate}
              onKey={handleValidate}
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
              icon={
                showPassword ? (
                  <MdVisibility style={{ color: "#1c8efb" }} />
                ) : (
                  <MdVisibilityOff style={{ color: "#ccc" }} />
                )
              }
              value={form.password}
              onClick={handleShowPassword}
              onChange={handleChange}
              onBlur={handleValidate}
              onKey={handleValidate}
            />
            {errors.password && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.password}
              </div>
            )}
          </BoxInput>
          <Button type="submit" width="400px">
            <IoLogInOutline style={{ fontSize: "1.2rem" }} />
            Iniciar sesión
          </Button>
        </Form>
        <Register>
          <span>¿Aun no te has unido con nosotros?</span>
          <LinkButton text="Registrate a qui" to="/registro-alumno" />
        </Register>
      </WrapperForm>
      <Toaster position="top-right" />
    </LayoutHome>
  );
};

export default FormLoginCandidate;
