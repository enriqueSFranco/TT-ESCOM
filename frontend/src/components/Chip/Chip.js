import { ChipStyled } from './styled-components/ChipStyled'

function Tag({ label, icon = null, bg = 'transparent' }) {
  return (
    <ChipStyled bg={bg}>
      {icon}
      {label}
    </ChipStyled>
  )
}

export default Tag