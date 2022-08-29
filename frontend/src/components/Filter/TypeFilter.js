import React from "react";

const TypeFilter = ({ type }) => {
  const FilterExp = () => (
    <ul>
      <li>
        <label for="">
          <input type="checkbox" name="" id="" />
          0 a 6meses
        </label>
      </li>
      <li>
        <label for="">
          <input type="checkbox" name="" id="" />
          6 meses a 1 año
        </label>
      </li>
      <li>
        <label for="">
          <input type="checkbox" name="" id="" />
          1 año a 2 años
        </label>
      </li>
      <li>
        <label for="">
          <input type="checkbox" name="" id="" />
          2 años o mas
        </label>
      </li>
    </ul>
  );

  const FilterEspecialty = () => (
    <ul>
      <li></li>
    </ul>
  );

  const FilterModality = () => (
    <ul>
      <li>
        <label for="">
            <input type="checkbox" name="" id="" />
            presencial
          </label>
      </li>
      <li>
        <label for="">
            <input type="checkbox" name="" id="" />
            remoto
          </label>
      </li>
      <li>
        <label for="">
            <input type="checkbox" name="" id="" />
            hibrido
          </label>
      </li>
    </ul>
  );


  if (type === "Experincia") return <FilterExp />;
  if (type === "Especialidad") return <FilterEspecialty />;
  if (type === "Modalidad") return <FilterModality />;
};

export default TypeFilter;
