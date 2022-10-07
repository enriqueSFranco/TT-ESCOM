import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: ${props => props.bgColor || '#0E92F2'};
  color: ${props => props.color || '#FFF'};
  border: none;
  outline: none;
  border-radius: 4px;
  width: fit-content;
  display: flex;
  align-items: center;
  /* text-align: left; */
  /* font-size: .9rem; */
  /* justify-content: center; */
`

export { ButtonStyled }