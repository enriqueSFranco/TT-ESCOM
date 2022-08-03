import styled from "styled-components";
import { device } from "../../../breakpoints";

const Input = styled.input`
  width: 80%;
  font-size: .9rem;
  
  @media only screen and ${device.mobileM} {
    outline: none;
    border: none;
    background-color: #2c2c2c1d;
    height: 50px;
    width: 280px;
    color: #fff;
    outline:2px solid blue;
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : `0px`};
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* outline: 2px solid red; */
    ::placeholder {
      letter-spacing: 1px;
      color: #fff;
    }
  }
`

export { Input }