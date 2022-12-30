import styled from 'styled-components'
import { device } from 'breakpoints'

export const ChipStyled = styled.span`
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  outline: ${props => props.outline || 'none'};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: .3rem;

@media screen and ${device.mobileM} {
  padding: .2rem .3rem;
  font-size: var(--font-size-mobile-M);
}

  @media screen and ${device.laptop} {
    font-size: 15px;
    font-weight: 600;
    padding: 4px 6px;
    color: ${props => props.color || '#000'};
  }

`