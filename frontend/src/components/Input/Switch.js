import React from 'react'

const Switch = ({ name, id, value, onChange }) => {
  return (
    <input 
      type="checkbox" 
      name={name}
      id={id} 
      value={value} 
      onChange={onChange} 
    />
  )
};

export default Switch;