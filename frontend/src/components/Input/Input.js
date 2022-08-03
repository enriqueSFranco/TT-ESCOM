import { BoxInput, Icon, InputLabel, TextField } from './styled-components/InputStyled'

const Input = ({label, icon = null, iconColor, onClick, width, type = 'text', ...rest}) => {
  return (
    <BoxInput>
      <TextField type={type} required='required' width={width} autoComplete='off' {...rest} />
      <InputLabel>{label}</InputLabel>
      {
        !icon ? null : <Icon iconColor={iconColor} onClick={onClick}>{icon}</Icon>
      }
      
    </BoxInput>
  )
}

export default Input