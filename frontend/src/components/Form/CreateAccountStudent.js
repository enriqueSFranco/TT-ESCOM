import React from "react";
import { useForm } from "../../hooks/useForm";
// import { useShowPassword } from "../../hooks/usePassword";
import { $ajax } from "../../utils/$ajax";
import Input from "../Input/Input";
import Label from "../Input/Label";
import Span from "../Input/Span";
import styles from "./Styles.module.css";

let initialForm = {
  t100_name: "",
  t100_boleta: "",
  t100_academic_level: "",
  t100_email: "",
  t100_password: "",
};

const CreateAccount = () => {
  // const { showPassword, toggle } = useShowPassword(false);
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
    console.log(form);
    $ajax()
      .POST("/api/Students/", options)
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
            {/* input para ingresar el nombre */}
            <Label htmlFor="t100_name">
              <Input
                type="text"
                id="t100_name"
                name="t100_name"
                placeholder=" "
                value={form.t100_name}
                onChange={handleChange}
              />
              <Span content="Nombre(s)" />
            </Label>
            {/* input para ingrasar el numero de boleta */}
            <Label htmlFor="t100_boleta">
              <Input
                type="text"
                id="t100_boleta"
                name="t100_boleta"
                placeholder=" "
                value={form.t100bolet100_boleta}
                onChange={handleChange}
              />
              <Span content="Numero de boleta" />
            </Label>
            {/* input para ingrasar el correo electronico */}
            <Label htmlFor="t100_email">
              <Input
                type="email"
                id="t100_email"
                name="t100_email"
                placeholder=" "
                value={form.t100_email}
                onChange={handleChange}
              />
              <Span content="Correo electronico" />
            </Label>
            {/* input para ingrasar el password */}
            <Label htmlFor="t100_password">
              <Input
                type="password"
                id="t100_password"
                name="t100_password"
                placeholder=" "
                value={form.t100_password}
                onChange={handleChange}
              />
              <Span content="Contrasenia" />
            </Label>
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
