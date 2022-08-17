import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyled = styled(Link)`
  width: ${props => props.width || 'fit-content'};
  height: ${props => props.hight || 'fit-content'};
  background-color: ${props => props.bg || '#0076EC'};
  color: ${props => props.color || '#FFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  padding: .5rem;
  border-radius: 4px;
  transition: background-color .3s ease-in-out;

  &:hover {
    color: ${props => props.color || '#FFF'};
    background-color: ${props => props.bg || '#0059B2'};
  }
`

export { ButtonStyled }
