import React from 'react'
import { ButtonStyled } from './styled-compoents/ButtonStyled'

const Button = ({onClick, width, height, bgColor, color, text, icon = null}) => {
  
  if (icon) return <ButtonStyled onClick={onClick} width={width} height={height} bgColor={bgColor} color={color}>{icon}{text}</ButtonStyled>
  
  return (
    <ButtonStyled onClick={onClick} width={width} height={height} bgColor={bgColor} color={color}>{text}</ButtonStyled>
  )
}

export default Button