import React from 'react'
import Menu from 'components/Menu/Menu'
import { IoBusiness } from 'react-icons/io5'
import { FcBusinessman, FcBusiness } from 'react-icons/fc'
import { HiUserGroup } from 'react-icons/hi'
import { MdSpeakerNotes } from 'react-icons/md'
import { SideBar, Content, NavList, Item, Wrapper } from './styled-components/LayoutAdminStyled'

const LayoutAdmin = ({children}) => {
  
  return (
    <>
      <Menu />
      <Wrapper>
        <SideBar>
          <NavList>
            <Item><MdSpeakerNotes style={{marginRight: '.3rem', fontSize: '1.3rem', color: '#673AB7'}} /> Comunicados/Eventos</Item>
            <Item><HiUserGroup style={{marginRight: '.3rem', fontSize: '1.3rem', color: '#F13465'}} /> Colaboradores</Item>
            <Item><FcBusiness style={{marginRight: '.3rem', fontSize: '1.3rem'}} />Vacantes-ESCOM</Item>
            <Item><FcBusinessman style={{marginRight: '.3rem', fontSize: '1.3rem'}} /> Reclutadores por validar</Item>
            <Item><IoBusiness style={{marginRight: '.3rem', fontSize: '1.3rem', color: '#8A9FA9'}} /> Empresas por validar</Item>
          </NavList>
        </SideBar>
        <Content>{children}</Content>
      </Wrapper>
    </>
  )
}

export default LayoutAdmin