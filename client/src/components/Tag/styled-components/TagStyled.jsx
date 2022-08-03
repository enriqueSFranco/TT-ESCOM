import styled from 'styled-components'

export const TagStyled = styled.span`
  height: 2rem;
  color: ${props => props.color ? props.color : '#000'};
  background-color: ${props => props.bg ? props.bg : '#fff'};
  font-size: .87rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  padding: .3rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: .3rem;
`