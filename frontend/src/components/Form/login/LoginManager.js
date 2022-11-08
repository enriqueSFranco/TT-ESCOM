import React from "react";
import { useAuth } from "context/AuthContext";
import { useForm, usePassword } from "hooks";
import Input from "components/Input/Input";
import { IoLogInOutline } from "react-icons/io5";
import {
  MdEmail,
  MdVisibility,
  MdVisibilityOff,
  MdOutlineErrorOutline,
} from "react-icons/md";
import {
  Button,
  Form,
  WrapperForm,
  BoxInput,
} from "../styled-components/FormLoginCompanyStyled";
import styles from "../Styles.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t400_name: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)]*/,
    t400_last_name: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)]*/,
    t400_second_surname:
      /^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)]*/,
    t400_email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
  };

  if (!form.t400_name.trim())
    errors.t400_name = "El campo 'Nombre' es requerido.";
  else if (!regex.t400_name.test(form.t400_name.trim()))
    errors.t400_name = "El campo 'Nombre' no es valido.";

  if (!form.t400_last_name.trim())
    errors.t400_last_name = "El campo 'Primer Apellido' es requerido.";
  else if (!regex.t400_last_name.test(form.t400_last_name.trim()))
    errors.t400_last_name = "El campo 'Primer Apellido' no es valido.";

  if (!form.t400_second_surname.trim())
    errors.t400_second_surname = "El campo 'Segundo Apellido' es requerido.";
  else if (!regex.t400_second_surname.test(form.t400_second_surname.trim()))
    errors.t400_second_surname = "El campo 'Segundo Apellido' no es valido.";

  if (!form.t400_email.trim())
    errors.t400_email = "El campo 'Email' es requerido.";
  else if (!regex.t400_email.test(form.t400_email.trim()))
    errors.t400_email = "El campo 'Email' es incorrecto.";

  if (!form.password.trim())
    errors.password = "El campo 'Contraseña' es requerido.";
  else if (!regex.password.test(form.password.trim()))
    errors.password = "La Contraseña es incorrecta.";

  return errors;
};

const LoginManager = () => {
  const { loginAdmin } = useAuth();
  const [showPassword, handleShowPassword] = usePassword();
  const { form, errors, handleChange, handleValidate } = useForm(
    {
      t400_name: "",
      t400_last_name: "",
      t400_second_surname: "",
      t400_email: "",
      password: "",
    },
    validateForm
  );

  return (
    <WrapperForm>
      <h2
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.3rem",
          marginBottom: "2rem",
          color: "#2B3647",
          fontWeight: "600",
        }}
      >
        Iniciar sesion como administrador
      </h2>
      <Form onSubmit={loginAdmin}>
        <BoxInput>
          <Input
            label="Correo electronico"
            icon={<MdEmail style={{color: '#1c8efb'}} />}
            width="400px"
            id="t400_email"
            name="t400_email"
            value={form.t400_email}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
            onChange={handleChange}
          />
          {errors.t400_email && (
            <div className={styles.error}>
              <MdOutlineErrorOutline />
              {errors.t100_email}
            </div>
          )}
        </BoxInput>
        <BoxInput>
          <Input
            label="Contraseña"
            width="400px"
            onClick={handleShowPassword}
            icon={showPassword ? <MdVisibility style={{color: '#1c8efb'}} /> : <MdVisibilityOff style={{color: '#ccc'}} /> }
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </BoxInput>
        <BoxInput>
          <Button type="submit" width="400px">
            <IoLogInOutline style={{ fontSize: "1.2rem" }} />
            Iniciar sesión
          </Button>
        </BoxInput>
      </Form>
    </WrapperForm>
  );
};

export default LoginManager;
