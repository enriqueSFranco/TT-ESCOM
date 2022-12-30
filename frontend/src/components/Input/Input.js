import {
  BoxInput,
  Icon,
  InputLabel,
  TextField,
} from "./styled-components/styles";

export const Input = ({
  label,
  type = "text",
  icon = null,
  iconColor,
  bgInput,
  onClick,
  position,
  width,
  ...rest
}) => {
  return (
    <BoxInput bgInput={bgInput} width={width}>
      <TextField
        type={type}
        required="required"
        autoComplete="off"
        width={width}
        bgInput={bgInput}
        {...rest}
      />
      <InputLabel>{label}</InputLabel>
      {!icon ? null : (
        <Icon bgInput={bgInput} iconColor={iconColor} onClick={onClick}>
          {icon}
        </Icon>
      )}
    </BoxInput>
  );
};
