import React from "react";
import { useFetch } from "hooks";
import {
  List,
  Item,
  Label,
  Checkbox,
} from "./styled-components/TypeFilterStyled";

const { REACT_APP_CATALOG_WORK_MODALITY, REACT_APP_URL_CATALOG_EXP } =
  process.env;

const TypeFilter = ({ type, onFiltereChange }) => {
  const { data: exps } = useFetch(REACT_APP_URL_CATALOG_EXP);
  const { data: workModality } = useFetch(REACT_APP_CATALOG_WORK_MODALITY);

  if (!exps || !workModality) return null;

  const FilterExp = () => (
    <List>
      {exps?.map((exp) => (
        <Item>
          <Label htmlFor={exp.c207_description}>
            <Checkbox
              type="checkbox"
              name={exp.c207_description}
              id={exp.c207_description}
              value={exp.c207_description}
              onChange={onFiltereChange}
            />
            {exp.c207_description}
          </Label>
        </Item>
      ))}
    </List>
  );

  const FilterModality = () => (
    <List>
      {workModality?.map((modality) => (
        <Item>
          <Label htmlFor={modality.c214_description}>
            <Checkbox
              type="checkbox"
              name={modality.c214_description}
              id={modality.c214_description}
              value={modality.c214_description}
              onChange={onFiltereChange}
            />
            {modality.c214_description}
          </Label>
        </Item>
      ))}
    </List>
  );

  if (type === "Experincia") return <FilterExp />;
  if (type === "Modalidad") return <FilterModality />;
};

export default TypeFilter;
