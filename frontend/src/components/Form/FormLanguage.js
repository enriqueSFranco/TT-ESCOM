import React, { useEffect, useState } from "react";
import { useLanguage, useForm } from "hooks";
import { addLanguage } from "services";
import { initialFormLanguage } from "types";
// import Input from "components/Input/Input";
import { IoLanguageOutline } from "react-icons/io5";
import { Button, Form, Title } from "./styled-components/FormLanguageStyled";

// "t110_level": 40,
// "t100_id_student": 1,
// "c111_id_language": 101

const FormLanguage = ({ id }) => {
  const { languages, error } = useLanguage();
  const { form, handleChange } = useForm(initialFormLanguage);
  const [value, setValue] = useState(30);

  const handleRange = (e) => setValue(e.target.value);

  let payload = { ...form, t110_level: value, t100_id_student: id,  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formulario enviado...");
    addLanguage(payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };


  // 30 - 50 basico
  // 51 - 60 intermedio
  // 61 - 100 avanzado

  if (!languages) return null;

  console.log(payload);

  return (
    <Form onSubmit={handleSubmit}>
      <Title>
        Registrar idioma{" "}
        <IoLanguageOutline style={{ color: "#116BFE", fontWeight: "700" }} />
      </Title>
      <select
        name="c111_id_lenguage"
        id="c111_id_lenguage"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">Selecciona un idioma o dialecto</option>
        {languages?.map((language) => (
          <option value={language?.c111_id_language}>
            {language?.c111_description}
          </option>
        ))}
      </select>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="range"
          min={30}
          max={100}
          value={value}
          onChange={(e) => handleRange(e)}
        />
        <span>{value}</span>
      </div>

      {/* <Input
        label="Nivel"
        type="text"
        id="t110_level"
        name="t110_level"
        value={form.t110_level}
        onChange={handleChange}
        width="300px"
      /> */}

      <Button type="submit" value="Agregar idioma" />
    </Form>
  );
};

export default FormLanguage;
