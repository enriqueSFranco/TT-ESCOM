import React from 'react'
import Menu from 'components/Menu/Menu'
import { LayoutHomeStyle, Header, Main } from './styled-components/LayoutHomeStyled'

const LayoutHome = ({ children }) => {
  return (
    <LayoutHomeStyle>
      <Header>
        <Menu />
      </Header>
      <Main>
        {children}
      </Main>
    </LayoutHomeStyle>
  )
}

export default LayoutHome