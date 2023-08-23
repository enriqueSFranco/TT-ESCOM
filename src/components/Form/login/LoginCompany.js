import React from "react";
import { usePassword, useForm } from "hooks";
import LayoutHome from "Layout/LayoutHome";
import { initialFormLoginCompany } from "types/loginUsers";
import LinkButton from "components/Button/LinkButton";
import { Input } from "components/Input/Input";
import { useAuth } from "context/AuthContext";
import { IoLogInOutline } from "react-icons/io5";
import {
  MdEmail,
  MdVisibility,
  MdVisibilityOff,
  MdOutlineErrorOutline,
} from "react-icons/md";
import styles from "../Styles.module.css";
import {
  Button,
  Form,
  Register,
  WrapperForm,
} from "../styled-components/FormLoginCompanyStyled";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t301_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
  };

  if (!form.t301_email.trim())
    errors.t301_email = "El campo 'Email' es requerido.";
  else if (!regex.t301_email.test(form.t301_email.trim()))
    errors.t301_email = "El campo 'Email' es incorrecto.";

  if (!form.password.trim())
    errors.password = "El campo 'Contraseña' es requerido.";
  else if (!regex.password.test(form.password.trim()))
    errors.password = "La Contraseña es incorrecta.";

  return errors;
};

const LoginCompany = () => {
  const [showPassword, handleShowPassword] = usePassword();
  const { form, errors, handleValidate, handleChange } = useForm(
    initialFormLoginCompany,
    validateForm
  );
  const { loginRecruiter } = useAuth();

  return (
    <LayoutHome>
      <WrapperForm>
        <h2 className="title" style={{fontSize: '20px', marginBottom: '20px'}}>Iniciar sesión como reclutador</h2>
        <Form onSubmit={loginRecruiter}>
          <div style={{height: '90px'}}>
            <Input
              label="Correo electronico"
              icon={<MdEmail style={{ color: "#1C8EFB" }} />}
              width="400px"
              id="t301_email"
              name="t301_email"
              value={form.t301_email}
              onBlur={handleValidate}
              onKey={handleValidate}
              onChange={handleChange}
            />
            {errors.t301_email && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t301_email}
              </div>
            )}
          </div>
          <div style={{height: '90px'}}>
            <Input
              label="Contraseña"
              width="400px"
              onClick={handleShowPassword}
              icon={
                showPassword ? (
                  <MdVisibility style={{ color: "#1c8efb" }} />
                ) : (
                  <MdVisibilityOff style={{ color: "#ccc" }} />
                )
              }
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
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
          </div>
          <Button type="submit" width="400px">
            <IoLogInOutline style={{ fontSize: "1.2rem" }} />
            Iniciar sesión
          </Button>
        </Form>
        <Register>
          <span>¿Aun no te has unido con nosotros?</span>
          <LinkButton
            text="Registrate a qui."
            to="/registro-reclutador"
          ></LinkButton>
        </Register>
      </WrapperForm>
    </LayoutHome>
  );
};

export default LoginCompany;
