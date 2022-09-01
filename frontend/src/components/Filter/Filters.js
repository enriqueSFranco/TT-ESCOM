import React from 'react'
import LayoutFilter from 'Layout/LayoutFilter'
import TypeFilter from './TypeFilter'

const typeFilters = ['Experincia', 'Especialidad', 'Modalidad']

const Filters = () => {
  return (
    <>
      {
        typeFilters.map(typeFilter => (
          <LayoutFilter key={typeFilter} type={typeFilter}>
            <TypeFilter type={typeFilter} />
          </LayoutFilter>
        ))
      }

    </>
  )
}

export default Filters