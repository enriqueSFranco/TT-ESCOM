import React from 'react'
import Menu from '../components/Menu/Menu'
import { Container, Wrapper } from './styled-components/LayoutStyled'


const Layout = ({children}) => {
  return (
    <Wrapper>
      <Menu />
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Layout