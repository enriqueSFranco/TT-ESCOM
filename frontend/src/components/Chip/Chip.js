import { ChipStyled } from './styled-components/ChipStyled'

function Tag({ label, icon = null, bg = 'transparent', color, outline }) {
  return (
    <ChipStyled bg={bg} color={color} outline={outline}>
      {icon}
      {label}
    </ChipStyled>
  )
}

export default Tag