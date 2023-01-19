import React from "react";
import { toast } from "react-hot-toast";
import { useForm } from "hooks";
import { createNewUser } from "services";
import { Input } from "components/Input/Input";
import ButtonFile from "components/Button/ButtonFile";
import CustomAvatar from "components/Avatar/Avatar";
import { MdOutlineErrorOutline } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  WrapperForm,
  WrapperPhoto,
  ButtonAccept,
  GroupInputs,
  Form,
} from "./styled-components/FormAddCollabortorStyled";

const styles = {
  containerError: {
    display: "flex",
    flexDirection: "column",
    gap: ".3em",
  },
  textError: {
    color: "red",
    display: "flex",
    alignItems: "center",
    gap: ".3em",
    fontSize: ".8em",
  },
};

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t400_name: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    t400_last_name: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    t400_second_surname: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
    t400_email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    t400_position: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
  };

  if (!form.t400_name.trim())
    errors.t400_name = "El campo 'Nombre(s)' es requerido";
  else if (!regex.t400_name.test(form.t400_name.trim()))
    errors.t400_name =
      "El campo 'Nombre(s)' solo acepta letras y espacios en blanco.";

  if (!form.t400_last_name.trim())
    errors.t400_last_name = "El campo 'Primer Apellido' es requerido";
  else if (!regex.t400_last_name.test(form.t400_last_name.trim()))
    errors.t400_last_name =
      "El campo 'Primer Apellido' solo acepta letras y espacios en blanco.";

  if (!form.t400_second_surname.trim())
    errors.t400_second_surname = "El campo 'Segundo Apellido' es requerido";
  else if (!regex.t400_second_surname.test(form.t400_second_surname.trim()))
    errors.t400_second_surname =
      "El campo 'Segundo Apellido' solo acepta letras y espacios en blanco.";

  if (!form.t400_email.trim())
    errors.t400_email = "El campo 'Correo electronico' es requerido";
  else if (!regex.t400_email.test(form.t400_email.trim()))
    errors.t400_email = "El campo 'Correo electronico' es incorrecto.";

  if (!form.t400_position.trim())
    errors.t400_position = "El campo 'Cargo' es requerido";
  else if (!regex.t400_position.test(form.t400_position.trim()))
    errors.t400_position =
      "El campo 'Cargo' solo acepta letras y espacios en blanco.";

  return errors;
};

const FormAddCollaborator = () => {
  const { form, errors, handleChange, handleValidate } = useForm(
    {
      t400_name: "",
      t400_last_name: "",
      t400_second_surname: "",
      t400_email: "",
      t400_position: "",
      // id_user: 1,
      c401_id_rol: 2,
    },
    validateForm
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser(form)
      .then((response) => {
        toast.success(response.message);
        // Limpiar el formulario
      })
      .catch((error) => toast.error(error));
    form.t400_name = "";
    form.t400_last_name = "";
    form.t400_second_surname = "";
    form.t400_email = "";
    form.t400_position = "";
  };

  return (
    <WrapperForm>
      <WrapperPhoto>
        <CustomAvatar width="100px" height="100px"  />
        <ButtonFile
          text="Subir foto"
          bgColor="transparent"
          color="blue"
          icon={<AiOutlineCloudUpload />}
        />
      </WrapperPhoto>
      <Form onSubmit={handleSubmit}>
        <GroupInputs>
          <div>
            <Input
              label="Nombre(s)"
              value={form.t400_name}
              name="t400_name"
              id="t400_name"
              onChange={handleChange}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
            />
            {errors.t400_name && (
              <span style={styles.textError}>
                <MdOutlineErrorOutline />
                {errors.t400_name}
              </span>
            )}
          </div>

          <div>
            <Input
              label="Primer Apellido"
              value={form.t400_last_name}
              name="t400_last_name"
              id="t400_last_name"
              onChange={handleChange}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
            />
            {errors.t400_last_name && (
              <span style={styles.textError}>
                <MdOutlineErrorOutline />
                {errors.t400_last_name}
              </span>
            )}
          </div>

          <div>
            <Input
              label="Segundo Apellido"
              value={form.t400_second_surname}
              name="t400_second_surname"
              id="t400_second_surname"
              onChange={handleChange}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
            />
            {errors.t400_second_surname && (
              <span style={styles.textError}>
                <MdOutlineErrorOutline />
                {errors.t400_second_surname}
              </span>
            )}
          </div>

          <div>
            <Input
              label="Cargo en ESCOM"
              value={form.t400_position}
              name="t400_position"
              id="t400_position"
              onChange={handleChange}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
            />
            {errors.t400_position && (
              <span style={styles.textError}>
                <MdOutlineErrorOutline />
                {errors.t400_position}
              </span>
            )}
          </div>

          <div>
            <Input
              label="Correo Electronico"
              value={form.t400_email}
              name="t400_email"
              id="t400_email"
              onChange={handleChange}
              onBlur={handleValidate}
              onKeyUp={handleValidate}
            />
            {errors.t400_email && (
              <span style={styles.textError}>
                <MdOutlineErrorOutline />
                {errors.t400_email}
              </span>
            )}
          </div>
        </GroupInputs>
        <ButtonAccept type="submit" value="Agregar" />
      </Form>
    </WrapperForm>
  );
};

export default FormAddCollaborator;
