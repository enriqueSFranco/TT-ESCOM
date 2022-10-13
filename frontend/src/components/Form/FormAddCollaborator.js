import React from "react";
import { useForm } from "hooks";
import Input from "components/Input/Input";
import CustomAvatar from "components/Avatar/Avatar";
import { createNewUser } from 'services'
import {
  WrapperForm,
  WrapperPhoto,
  ButtonAccept,
  GroupInputs,
  Form,
} from "./styled-components/FormAddCollabortorStyled";

const FormAddCollaborator = () => {
  const { form, handleChange } = useForm({
    t400_name: "",
    t400_last_name: "",
    t400_second_surname: "",
    t400_email: "",
    t400_position: "",
    id_user: 1,
    c401_id_rol: 2,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewUser(form)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  };

  return (
    <WrapperForm>
        <WrapperPhoto>
          <CustomAvatar width="100" height="100" />
          <input type="file" />
        </WrapperPhoto>
      <Form onSubmit={handleSubmit}>
        {/* imagen del colaborador */}

        {/* campos para agregar un colaborador */}
        <GroupInputs>
          <Input label="Nombre(s)" value={form.t400_name} name="t400_name" id="t400_name" onChange={handleChange} />
          <Input label="Primer Apellido" value={form.t400_last_name} name="t400_last_name" id="t400_last_name" onChange={handleChange} />
          <Input label="Segundo Apellido" value={form.t400_second_surname} name="t400_second_surname" id="t400_second_surname" onChange={handleChange} />
          <Input label="Cargo en ESCOM" value={form.t400_position} name="t400_position" id="t400_position" onChange={handleChange} />
          <Input label="Correo Electronico" value={form.t400_email} name="t400_email" id="t400_email" onChange={handleChange} />
        </GroupInputs>
        <ButtonAccept type="submit" value="Agregar" />
      </Form>
    </WrapperForm>
  );
};

export default FormAddCollaborator;
