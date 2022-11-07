import React from 'react'
import { useAuth } from 'context/AuthContext';
import { useForm, usePassword } from 'hooks'
import Input from 'components/Input/Input'
import LinkButton from 'components/Button/LinkButton';
import { IoLogInOutline } from "react-icons/io5";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import {
  Button,
  Form,
  Register,
  WrapperForm,
} from "../styled-components/FormLoginCompanyStyled";


const LoginManager = () => {
  const {loginAdmin} = useAuth()
  const [showPassword, handleShowPassword] = usePassword();
  const { form, handleChange } = useForm({
    t400_email: '',
    password: '',
  })

  return (
    <WrapperForm>
      <h2 style={{fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem', color: '#2B3647', fontWeight: '600'}}>Iniciar sesion como administrador</h2>
      <Form onSubmit={loginAdmin}>
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
        <span>¿Aun no te has unido con nosotros?</span>
        <LinkButton
          text="Registrate a qui."
          to="/registro-administrador"
        ></LinkButton>
      </Register>
    </WrapperForm>
  )
}

export default LoginManager