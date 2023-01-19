import React, { useState } from "react";
import { modalityList, expList } from "constants";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ButtonShowFilters } from "./styled-components/FiltersStyled";
import LayoutFilter from "Layout/LayoutFilter";
import { HiOutlineAdjustments } from "react-icons/hi";

const Filteres = ({
  data,
  selectedFilterExp,
  selectedFilterModality,
  setResultsFound,
  // setNewResponse,
  setFilterData,
  toggleRecommended,
  onFiltereChange,
  onFiltereModalityChange,
}) => {
  const [seeFilters, setSeeFilters] = useState(false);

  console.log(selectedFilterExp);


  // function applyFilters() {
  //   let updateList = data;

  //   // experience filter
  //   const expChecked = selectedFilterExp
  //     .filter((item) => item.checked)
  //     .map((item) => item.label.toLowerCase());

  //   if (expChecked.length) {
  //     updateList = updateList.filter((item) =>
  //       expChecked.includes(item?.c207_id_experience?.c207_description)
  //     );
  //   }

  //   // modality filter
  //   const modalityChecked = selectedFilterModality
  //     .filter((item) => item.checked)
  //     .map((item) => item.label);

  //   if (modalityChecked.length) {
  //     updateList = updateList.filter((item) =>
  //       modalityChecked.includes(item?.c214_id_modality?.c214_description)
  //     );
  //   }

  //   setFilterData(updateList);

  //   !updateList.length ? setResultsFound(false) : setResultsFound(true);
  // }

  function toggleSeeFilters() {
    setSeeFilters(!seeFilters);
  }

  return (
    <>
      <ButtonShowFilters onClick={toggleSeeFilters} isActive={seeFilters}>
        <HiOutlineAdjustments /> Filtros
      </ButtonShowFilters>
      {seeFilters && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3rem",
          }}
        >
          <LayoutFilter title="Experiencia Laboral">
            {expList.map((item) => (
              <FormControlLabel
                key={`filter-experience-id-${item.id}`}
                label={item.label}
                control={<Checkbox onChange={() => onFiltereChange(item.id)} />}
              />
            ))}
          </LayoutFilter>

          <LayoutFilter title="Modalidad de Empleo">
            {modalityList.map((item) => (
              <FormControlLabel
                key={`filter-modality-id-${item.id}`}
                label={item.label}
                control={
                  <Checkbox onChange={() => onFiltereModalityChange(item.id)} />
                }
              />
            ))}
          </LayoutFilter>

          <LayoutFilter title="Vacantes recomedadas">
            <FormControlLabel
              label="Ver recomendaciones"
              control={<Checkbox onChange={toggleRecommended} />}
            />
          </LayoutFilter>
        </div>
      )}
    </>
  );
};

export default Filteres;
