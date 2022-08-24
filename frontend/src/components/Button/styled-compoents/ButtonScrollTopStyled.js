import styled from 'styled-components'
import { device } from 'breakpoints'

const ButtonScroll = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 50%;
  display: grid;
  place-content: center;
  font-size: 2.3rem;
  transition: all .5s ease-in-out;
  ${props => {
    if (!props.isVisible) return `
      opacity: 0;
      visibility: hidden;
    `
    else return `
      opacity: 1;
      visibility: visible;
    `
  }}

  @media only screen and ${device.mobileM} {
    right: 0;
    bottom: 3rem;
  }

  @media only screen and ${device.laptop} {
    right: 2rem;
    bottom: 2rem;
  } 
`

export { ButtonScroll }