import React from 'react'
import { Header, Nav } from './styled-components/LayoutMenuStyled'

const LayoutMenu = ({ children }) => {
  return (
    <Header>
      <Nav>
        {children}
      </Nav>
    </Header>
  )
}

export default LayoutMenu