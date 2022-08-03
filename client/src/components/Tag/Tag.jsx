import { TagStyled } from './styled-components/TagStyled'

function Tag({ label, icon = null, color = '#000', bg = '#eee' }) {
  return (
    <TagStyled bg={bg} color={color}>
      {icon}
      {label}
    </TagStyled>
  )
}

export default Tag