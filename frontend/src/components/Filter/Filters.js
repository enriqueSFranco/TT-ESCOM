import React, { useEffect } from "react";
import { modalityList, expList } from "constants";
import { Checkbox, FormControlLabel } from "@mui/material";
import LayoutFilter from "Layout/LayoutFilter";

const Filteres = ({
  data,
  selectedFilterExp,
  selectedFilterModality,
  setResultsFound,
  setFilterData,
  onFiltereChange,
  onFiltereModalityChange,
}) => {
  let didInit = false;

  function applyFilters() {
    let updateList = data;

    // experience filter
    const expChecked = selectedFilterExp
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (expChecked.length) {
      updateList = updateList.filter((item) =>
        expChecked.includes(item?.c207_id_experience?.c207_description)
      );
    }

    // modality filter
    const modalityChecked = selectedFilterModality
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (modalityChecked.length) {
      updateList = updateList.filter(item => modalityChecked.includes(item?.c214_id_modality?.c214_description))
    }

    setFilterData(updateList);

    !updateList.length ? setResultsFound(false) : setResultsFound(true);
  }

  useEffect(() => {
    if (!didInit) applyFilters();
  }, [selectedFilterExp, selectedFilterModality]);

  return (
    <div>
      <LayoutFilter title="⭐ Experiencia Laboral">
        {expList.map((item) => (
          <FormControlLabel
            key={`filter-experience-id-${item.id}`}
            label={item.label}
            control={<Checkbox onChange={() => onFiltereChange(item.id)} />}
          />
        ))}
      </LayoutFilter>

      <LayoutFilter title="💼 Modalidad de Empleo">
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
    </div>
  );
};

export default Filteres;
