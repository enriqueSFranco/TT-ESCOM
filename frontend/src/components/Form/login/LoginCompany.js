import React from "react";
import { usePassword } from "hooks/usePassword";
import { useForm } from "hooks/useForm";
import LayoutHome from "Layout/LayoutHome";
import { initialFormLoginCompany } from "types/loginUsers";
import LinkButton from "components/Button/LinkButton";
import Input from "components/Input/Input";
import { useAuth } from "context/AuthContext";
import { IoLogInOutline } from "react-icons/io5";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import {
  Button,
  Form,
  Register,
  WrapperForm,
} from "../styled-components/FormLoginCompanyStyled";

const LoginCompany = () => {
  const [showPassword, handleShowPassword] = usePassword();
  const { form, handleChange } = useForm(initialFormLoginCompany);
  const { loginRecruiter } = useAuth();

  return (
    <LayoutHome>
      <WrapperForm>
        <Form onSubmit={loginRecruiter}>
          <Input
            label="Correo electronico"
            icon={<MdEmail />}
            width="400px"
            id="t301_email"
            name="t301_email"
            value={form.t301_email}
            onChange={handleChange}
          />
          <Input
            label="Contraseña"
            width="400px"
            onClick={handleShowPassword}
            icon={showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <Button type="submit" width="400px">
            <IoLogInOutline style={{ fontSize: "1.2rem" }} />
            Iniciar sesión
          </Button>
        </Form>
        <Register>
          <span>¿Aun no te has unido con nosotros 👀 ?</span>
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
