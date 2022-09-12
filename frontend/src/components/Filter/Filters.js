import React from 'react'
import LayoutFilter from 'Layout/LayoutFilter'
import TypeFilter from './TypeFilter'
import { WrapperFilters } from './styled-components/FiltersStyled'

const typeFilters = ['Experincia', 'Especialidad', 'Modalidad']

const Filters = () => {
  return (
    <WrapperFilters>
      {
        typeFilters.map(typeFilter => (
          <LayoutFilter key={typeFilter} type={typeFilter}>
            <TypeFilter type={typeFilter} />
          </LayoutFilter>
        ))
      }

    </WrapperFilters>
  )
}

export default Filters