import { ChipStyled } from "./styled-components/ChipStyled";

function Tag({
  label,
  icon = null,
  bg = "transparent",
  color,
  outline,
  boxShadow,
}) {
  return (
    <ChipStyled bg={bg} color={color} outline={outline} boxShadow={boxShadow}>
      {icon}
      {label}
    </ChipStyled>
  );
}

export default Tag;
