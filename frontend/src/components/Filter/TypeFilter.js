import React from "react";
import { useFetch } from "hooks";
import {
  List,
  Item,
  Label,
  Checkbox,
} from "./styled-components/TypeFilterStyled";

const { REACT_APP_CATALOG_WORK_MODALITY } = process.env;

const TypeFilter = ({ type, onFiltereChange }) => {
  const { data: workModality } = useFetch(REACT_APP_CATALOG_WORK_MODALITY);

  if (!workModality) return null;

  const FilterExp = () => (
    <List>
      <Item>
        <Label htmlFor={`Sin experiencia`}>
          <Checkbox
            type="checkbox"
            name={`Sin experiencia`}
            id={`Sin experiencia`}
            onChange={onFiltereChange}
          />
          {`Sin experiencia`}
        </Label>
      </Item>
      <Item>
        <Label htmlFor={`0 - 6 meses`}>
          <Checkbox
            type="checkbox"
            name={`experience`}
            id={`0 - 6 meses`}
            onChange={onFiltereChange}
          />
          {`0 - 6 meses`}
        </Label>
      </Item>
    </List>
  );

  const FilterModality = () => (
    <List>
      {workModality?.map((modality) => (
        <Item key={`filter-workModality-id-${crypto.randomUUID()}`}>
          <Label htmlFor={modality.c214_description}>
            <Checkbox
              type="checkbox"
              name={`modality`}
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
