import React from 'react'
import { Input } from './styled-components/InputJobStyled'

const InputJob = ({type, id, name, value, onChange, placeholder, marginLeft}) => {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      // onKeyDown={() => setDisplayJob(!displayJob)}
      autoComplete='off'
      placeholder={placeholder} 
      marginLeft={marginLeft}
    />
  )
}

export default InputJob