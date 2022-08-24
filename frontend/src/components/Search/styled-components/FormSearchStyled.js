import styled from "styled-components";
import { device } from "breakpoints";

const Button = styled.button`

@media only screen and ${device.mobileM} {
    width: 100%;
    height: 40px;
    border-radius: .3rem;
    border: none;
    background-color: #0057FF;
    color: #FFF;
    font-size: .9rem;
  }

  @media only screen and ${device.laptop} {
    width: auto;
    height: auto;
    padding: 1rem;
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    background-color: #1C8EFB;
    color: #fff;
    font-size: 1.3rem;
    cursor: pointer;
  }
`

const WrapperForm = styled.div`

@media only screen and ${device.mobileM} {
    z-index: 11;
    position: fixed;
    top: 5rem;
    width: 93%;
    background-color: #FFF;
  }
  
  @media only screen and ${device.laptop} {
    width: fit-content;
    height: 80px;
    background-color: #00000097;
    backdrop-filter: blur(10px);
    box-shadow: #1C8EFB 0px 1px 1px, #1C8EFB 0px 1px 1px;
    border-radius: .5rem;
  }

`

const Form = styled.form`
  @media only screen and ${device.mobileM} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #FFF;
  }

  @media only screen and ${device.laptop} {
    position: relative;
    height: inherit;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
  }
`

const InputSearch = styled.input`
  
  @media only screen and ${device.mobileM} {
    width: 100%;
    font-size: .9rem;
    outline: 1px solid #ccc;
    border-radius: .3rem;
    padding:.7rem;
    border: none;
  }
  
  @media only screen and ${device.laptop} {
    outline: none;
    border: none;
    background-color: #2c2c2c1d;
    height: 50px;
    width: 280px;
    color: #fff;
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : `0px`};
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    ::placeholder {
      letter-spacing: 1px;
      color: #fff;
    }
  }
`

const WrapperInput = styled.div`
  @media only screen and ${device.mobileM} {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media only screen and ${device.laptop} {
      position: relative;
      height: 50px;
      width: fit-content;
      
      &:before {
        content: "${({ content }) => content || ''}";
        color: #fff;
        height: inherit;
        width: fit-content;
        display: grid;
        place-content: center;
        position: absolute;
        left: 0;
        font-weight: 700;
      }
    }
`

const Separator = styled.span`

  @media only screen and ${device.mobileM} {
    display: none;
  }

  @media only screen and ${device.laptop} {
    display: block;
    position: relative;
    right: 1rem;
    outline: 1px solid #ffffff30;
    backdrop-filter: blur(10px);
    height: 50px;
  }
`

export { Button, Form, InputSearch, Separator, WrapperInput, WrapperForm }