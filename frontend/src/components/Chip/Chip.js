import { ChipStyled } from './styled-components/ChipStyled'

function Tag({ label, icon = null, bg = 'transparent', color }) {
  return (
    <ChipStyled bg={bg} color={color}>
      {icon}
      {label}
    </ChipStyled>
  )
}

export default Tag