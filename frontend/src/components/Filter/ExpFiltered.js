import React, { useEffect } from "react";
import { expList } from "constants";
import { Checkbox, FormControlLabel } from "@mui/material";
import LayoutFilter from "Layout/LayoutFilter";

const ExpFiltered = ({ data, selectedFilterExp, setResultsFound, setFilterData, onFiltereChange }) => {
  let didInit = false

    function applyFilters() {
    let updateList = data // null
    const expChecked = selectedFilterExp
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (expChecked.length) {
      updateList = updateList.filter((item) =>
        expChecked.includes(item?.c207_id_experience?.c207_description)
      );
    }
    setFilterData(updateList);

    !updateList.length ? setResultsFound(false) : setResultsFound(true);
  }


    useEffect(() => {
    if (!didInit)
      applyFilters();
  }, [selectedFilterExp]);

  return (
    <LayoutFilter title="⭐ Experiencia Laboral">
      {expList.map((item) => (
        <FormControlLabel
          key={`filter-checked-id-${item.id}`}
          label={item.label}
          control={<Checkbox onChange={() => onFiltereChange(item.id)} />}
        />
      ))}
    </LayoutFilter>
  );
};

export default ExpFiltered;
