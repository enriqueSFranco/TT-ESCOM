import React from "react";
import { useForm, usePassword } from "hooks";
import Input from "components/Input/Input";
import LinkButton from "components/Button/LinkButton";
import { Toaster } from "react-hot-toast";
import {
  MdEmail,
  MdOutlineErrorOutline,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { FaUser } from 'react-icons/fa'
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

const FormCreateAccountManager = () => {
  const { form, errors, handleChange, handleValidate, onSubmitManager } = useForm(
    {},
    validateForm
  );
  const [showPassword, handleShowPassword] = usePassword();

  return (
    <>
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
          Crear cuenta como administrador
        </h2>
        <Form onSubmit={onSubmitManager}>
          <BoxInput>
            <Input
              label="Nombre(s)"
              id="t400_name"
              name="t400_name"
              icon={<FaUser style={{ color: '#1c8efb' }} />}
              value={form.t400_name}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
              onChange={handleChange}
            />
            {errors.t400_name && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t400_name}
              </div>
            )}
          </BoxInput>
          <div style={{
            width: '100%',
            display: 'flex',
            gap: '1rem'
          }}>
            <BoxInput>
              <Input
                label="Primer Apellido"
                id="t400_last_name"
                name="t400_last_name"
                width='300px'
                // icon={<MdEmail />}
                value={form.t400_last_name}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
                onChange={handleChange}
              />
              {errors.t400_last_name && (
                <div className={styles.error}>
                  <MdOutlineErrorOutline />
                  {errors.t400_last_name}
                </div>
              )}
            </BoxInput>

            <BoxInput>
              <Input
                label="Segundo Apellido"
                id="t400_second_surname"
                name="t400_second_surname"
                width='300px'
                // icon={<MdEmail />}
                value={form.second_surname}
                onBlur={handleValidate}
                onKeyUp={handleValidate}
                onChange={handleChange}
              />
              {errors.t400_second_surname && (
                <div className={styles.error}>
                  <MdOutlineErrorOutline />
                  {errors.t400_second_surname}
                </div>
              )}
            </BoxInput>
          </div>
          <BoxInput>
            <Input
              label="Correo electronico"
              id="t400_email"
              name="t400_email"
              icon={<MdEmail style={{ color: '#1c8efb' }} />}
              value={form.t400_email}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
              onChange={handleChange}
            />
            {errors.t400_email && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t400_email}
              </div>
            )}
          </BoxInput>
          <BoxInput>
            <Input
              label="Contraseña"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              icon={showPassword ? <MdVisibility style={{ color: '#1c8efb' }} /> : <MdVisibilityOff style={{ color: '#ccc' }} />}
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
          <span>¿Ya tines una cuenta?</span>
          <LinkButton text="Inicia sesion aqui" to="/alumno" />
        </Register>
      </WrapperForm>
      <Toaster position="top-right" />
    </>
  );
};

export default FormCreateAccountManager;
