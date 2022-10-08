import React from 'react'
import Menu from 'components/Menu/Menu'
import { Content, NavList, Item, Wrapper } from './styled-components/LayoutAdminStyled'

const LayoutAdmin = ({children}) => {
  return (
    <>
      <Menu />
      <Wrapper>
        <aside>
          <NavList>
            <Item>Inicio</Item>
            <Item>Comunicados/Eventos</Item>
            <Item>Vacantes-ESCOM</Item>
            <Item>Reclutadores por validar</Item>
            <Item>Empresas por validar</Item>
          </NavList>
        </aside>
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}

export default LayoutAdmin