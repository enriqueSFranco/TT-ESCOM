import React from 'react'
import LayoutHome from 'Layout/LayoutHome'
import { Container } from '../styled-components/PostulatesStyled'
import Accordion from 'components/Accordion/ApplicantDetails'

const Postulates = () => {

  return (
    <LayoutHome>
      <Container>
        <Accordion />
      </Container>
    </LayoutHome>
  )
}

export default Postulates