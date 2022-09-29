import React, { useState } from "react";
import { useLanguage } from "hooks";
import { addLanguage } from "services";
import { IoLanguageOutline } from "react-icons/io5";
import { Button, Form, Title } from "./styled-components/FormLanguageStyled";

const FormLanguage = ({ id }) => {
  const { languages } = useLanguage();
  const [idLanguage, setIdLanguage] = useState(0)
  const [value, setValue] = useState(30);

  const handleRange = (e) => setValue(e.target.value);

  let payload = { c111_id_language: parseInt(idLanguage), t110_level: parseInt(value), t100_id_student: id,  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <Form onSubmit={handleSubmit}>
      <Title>
        Registrar idioma{" "}
        <IoLanguageOutline style={{ color: "#116BFE", fontWeight: "700" }} />
      </Title>
      <select
        name="c111_id_language"
        id="c111_id_language"
        onChange={e => setIdLanguage(e.target.value)}
        defaultValue=""
      >
        <option value="">Selecciona un idioma o dialecto</option>
        {languages?.map((language) => (
          <option key={language.c111_id_language} value={language.c111_id_language}>
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
      <Button type="submit" value="Agregar idioma" />
    </Form>
  );
};

export default FormLanguage;
