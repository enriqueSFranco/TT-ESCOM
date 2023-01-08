import React from 'react'
import { Container, Title } from './styled-components/LayoutFilterStyled'

const LayoutFilter = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}

export default LayoutFilter