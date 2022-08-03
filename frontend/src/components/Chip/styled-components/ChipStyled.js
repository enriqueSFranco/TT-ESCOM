import styled from 'styled-components'

export const ChipStyled = styled.span`
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  font-size: .87rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  padding: .3rem .5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: .3rem;
`