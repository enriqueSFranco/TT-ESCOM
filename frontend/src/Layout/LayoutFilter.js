import React from 'react'
import { Container, Title } from './styled-components/LayoutFilterStyled'

const LayoutFilter = ({ children, type }) => {
  return (
    <Container>
      <Title>{type}</Title>
      {children}
    </Container>
  )
}

export default LayoutFilter