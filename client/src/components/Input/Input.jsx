import { BoxInput, Icon, InputLabel, TextField } from './styled-components/InputStyled'

const Input = ({label, icon = null, iconColor, onClick, width = '100%', type = 'text', ...rest}) => {
  return (
    <BoxInput width="450px">
      <TextField type={type} required='required' width={width} autoComplete='off' {...rest} />
      <InputLabel>{label}</InputLabel>
      {
        !icon ? null : <Icon iconColor={iconColor} onClick={onClick}>{icon}</Icon>
      }
      
    </BoxInput>
  )
}

export default Input