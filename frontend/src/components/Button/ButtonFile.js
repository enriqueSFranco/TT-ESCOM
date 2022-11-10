import React from 'react'
import { WrapperButtonFile, WrapperLabel, InputFile } from './styled-compoents/ButtonFileStyled'

const ButtonFile = ({text, icon, color, bgColor, onChange}) => {
  return (
    <WrapperButtonFile bgColor={bgColor}>
      <WrapperLabel htmlFor="btn-file" color={color}><span>{icon}</span>{text}</WrapperLabel>
      <InputFile type="file" id='btn-file' onChange={onChange} accept="image/*" />
    </WrapperButtonFile>
  )
}

export default ButtonFile