import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: ${props => props.bgColor || '#0E92F2'};
  color: ${props => props.color || '#FFF'};
  border: none;
  outline: none;
  border-radius: 4px;
  width: ${props => `${props.width}rem` || 'fit-content'};
  height: ${props => `${props.height}rem` || '1rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  /* position: relative; */
`

export { ButtonStyled }