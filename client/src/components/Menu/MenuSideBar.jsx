import React from 'react'
import { GoStar } from 'react-icons/go'
import { MdAccessTimeFilled, MdSchool } from 'react-icons/md'
import { Check, Item, List, Label, Title, WrapperList, WrapperTitle, WrapperMenuSideBar } from './styled-components/MenuSideBar'

const MenuSideBar = () => {
  return (
    <WrapperMenuSideBar>
      <WrapperList>
        <WrapperTitle>
          <GoStar style={{color: 'fff202', fontSize: '1.3rem'}} />
          <Title>experiencia</Title>
        </WrapperTitle>
        <List>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Sin experiencia</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">0 - 6 meses</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">6 meses - 1 año</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">1 año a 2 años</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">mas de 2 años</Label>
          </Item>
        </List>
      </WrapperList>

      <WrapperList>
        <WrapperTitle>
          <MdAccessTimeFilled style={{color: '#1875E9', fontSize: '1.3rem'}} />
          <Title>horario laboral</Title>
        </WrapperTitle>
        <List>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Tiempo completo</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Medio tiempo</Label>
          </Item>
        </List>
      </WrapperList>

      <WrapperList>
        <WrapperTitle>
          <MdSchool style={{color: '#172B4D', fontSize: '1.3rem'}} />
          <Title>Educacion</Title>
        </WrapperTitle>
        <List>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Estudiante</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Pasante</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Titulado</Label>
          </Item>
          <Item>
            <Check type="checkbox" name="" id="" />
            <Label htmlFor="">Trunco</Label>
          </Item>
        </List>
      </WrapperList>
    </WrapperMenuSideBar>
  )
}

export default MenuSideBar