import React, { useState } from "react";
import Input from "components/Input/Input";
import {
  Form,
  BoxInput,
} from "./styled-components/FormSearchJobRecruiterStyled";

const FormSearchJob = ({ data, setIsDataFilter, setFilterData }) => {
  const [query, setQuery] = useState("");

  const searchCompany = (query) => {
    let input = query.toLowerCase().trim();
    setQuery(input);

    if (input !== "") {
      setIsDataFilter(true);
      let matches = data.filter((company) => {
        let regex = new RegExp(`^${input}`, "gi");
        return company.t200_job.match(regex);
      });
      setFilterData(matches);
    } else {
      setIsDataFilter(false);
      setFilterData(data);
    }
  };

  return (
    <Form>
      <BoxInput>
        <Input
          type="text"
          label="Buscar vacante"
          name="search"
          id="search"
          value={query}
          onChange={(e) => searchCompany(e.target.value)}
        />
      </BoxInput>
    </Form>
  );
};

export default FormSearchJob;
