import React from 'react';

const Input = ({
  type,
  id,
  name,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;