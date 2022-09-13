import React from "react";
import { List, Item, Label, Checkbox } from './styled-components/TypeFilterStyled'

const TypeFilter = ({ type }) => {
  const FilterExp = () => (
    <List>
      <Item>
        <Label for="">
          <Checkbox type="checkbox" name="" id="" />
          0 a 6meses
        </Label>
      </Item>
      <Item>
        <Label for="">
          <Checkbox type="checkbox" name="" id="" />
          6 meses a 1 año
        </Label>
      </Item>
      <Item>
        <Label for="">
          <Checkbox type="checkbox" name="" id="" />
          1 año a 2 años
        </Label>
      </Item>
      <Item>
        <Label for="">
          <Checkbox type="checkbox" name="" id="" />
          2 años o mas
        </Label>
      </Item>
    </List>
  );

  const FilterEspecialty = () => (
    <List>
      <Item></Item>
    </List>
  );

  const FilterModality = () => (
    <List>
      <Item>
        <Label for="">
            <Checkbox type="checkbox" name="" id="" />
            presencial
          </Label>
      </Item>
      <Item>
        <Label for="">
            <Checkbox type="checkbox" name="" id="" />
            remoto
          </Label>
      </Item>
      <Item>
        <Label for="">
            <Checkbox type="checkbox" name="" id="" />
            hibrido
          </Label>
      </Item>
    </List>
  );


  if (type === "Experincia") return <FilterExp />;
  if (type === "Especialidad") return <FilterEspecialty />;
  if (type === "Modalidad") return <FilterModality />;
};

export default TypeFilter;
