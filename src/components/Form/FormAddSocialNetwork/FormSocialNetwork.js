import React from "react";
import { toast } from "react-hot-toast";
import { useForm, useGetPlataforms } from "hooks";
import { postSocialNetwork } from "services";
import { Input } from "components/Input/Input";
import { INITIAL_FORM_ADD_SOCIAL_NETWORK } from "types/addSocialNetwork";
import {
  Button,
  Form,
  Select,
} from "../styled-components/FormAddSocialNetworkStyled";

const FormSocialNetwork = ({ idUser }) => {
  const { form, setForm, handleChange } = useForm(
    INITIAL_FORM_ADD_SOCIAL_NETWORK
  );
  const { plataforms } = useGetPlataforms();

  let r = {
    ...form,
    t100_id_student: idUser,
  };

  function handleSubmit (e) {
    e.preventDefault();
    if (!e.target.value) return;

    r["c115_id_plataform"] = parseInt(r.c115_id_plataform);
    postSocialNetwork(r)
      .then((response) => toast.success(response?.data?.message))
      .catch((error) => console.log(error));

    setForm({ t113_link: "", c115_id_plataform: 0 });
  }

  if (!plataforms || !idUser) return null;

  return (
    <Form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Select
          name="c115_id_plataform"
          id="c115_id_plataform"
          onChange={handleChange}
        >
          <option value="" disabled>
            Forma de contacto
          </option>
          {plataforms.map((plataform) => (
            <option
              key={plataform?.c115_id_plataform}
              value={plataform.c115_id_plataform}
            >
              {plataform?.c115_description}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          name="t113_link"
          id="t113_link"
          value={form.t113_link}
          onChange={handleChange}
          width="300px"
          placeholder="https://..."
        />
      </div>
      <span
        style={{
          position: "relative",
          bottom: ".8rem",
          left: "3.4rem",
          fontSize: ".9em",
          color: "grey",
        }}
      >
        La dirección debe se https://
      </span>
      <Button type="submit" value="Agregar" />
    </Form>
  );
};

export default FormSocialNetwork;
