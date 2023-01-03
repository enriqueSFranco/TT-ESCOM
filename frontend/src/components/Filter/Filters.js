import React from "react";
import LayoutFilter from "Layout/LayoutFilter";
import TypeFilter from "./TypeFilter";
import { WrapperFilters } from "./styled-components/FiltersStyled";

const typeFilters = ["Experincia", "Modalidad"];

const Filters = ({ recommended, handleChangeRecommended, onFiltereChange }) => {
  return (
    <WrapperFilters>
      {typeFilters.map((typeFilter) => (
        <LayoutFilter key={typeFilter} type={typeFilter}>
          <TypeFilter
            type={typeFilter}
            recommended={recommended}
            handleChangeRecommended={handleChangeRecommended}
            onFiltereChange={onFiltereChange}
          />
        </LayoutFilter>
      ))}
    </WrapperFilters>
  );
};

export default Filters;
