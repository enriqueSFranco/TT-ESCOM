import React from 'react'
import LayoutFilter from 'Layout/LayoutFilter'
import TypeFilter from './TypeFilter'
import { WrapperFilters } from './styled-components/FiltersStyled'

const typeFilters = ['Experincia', 'Modalidad', 'Ver vacantes recomendadas']

const Filters = ({onFiltereChange}) => {
  return (
    <WrapperFilters>
      {
        typeFilters.map(typeFilter => (
          <LayoutFilter key={typeFilter} type={typeFilter}>
            <TypeFilter type={typeFilter} onFiltereChange={onFiltereChange} />
          </LayoutFilter>
        ))
      }

    </WrapperFilters>
  )
}

export default Filters