import React from 'react'
import { ButtonStyled } from './styled-compoents/LinkButtonStyled'

const LinkButton = ({ text, bg, color, width, hight, to }) => {
  return (
    <ButtonStyled to={to} width={width} hight={hight} bg={bg} color={color}>
      {text}
    </ButtonStyled>
  )
}

export default LinkButton