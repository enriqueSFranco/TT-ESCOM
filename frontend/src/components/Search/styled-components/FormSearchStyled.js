import styled from "styled-components";
import { device } from "breakpoints";

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 0;

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
  width: 90%;
  height: fit-content;
  border-radius: .5rem;
  
  @media only screen and ${device.laptop} {
    width: fit-content;
    height: 80px;
    border-radius: 2rem;
    background-color: #00000097;
    backdrop-filter: blur(10px);
  }

`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
  width: 80%;
  font-size: .9rem;
  
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
    /* outline: 2px solid red; */
    ::placeholder {
      letter-spacing: 1px;
      color: #fff;
    }
  }
`

const WrapperInput = styled.div`
      /* outline: 2px solid red; */
      width: 100%;
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
        left: 0s;
        font-weight: 700;
      }
    }
`

const Separator = styled.span`
  display: none;
  
  @media only screen and ${device.laptop} {
    display: block;
    outline: 1px solid #ffffff30;
    backdrop-filter: blur(10px);
    height: 50px;
  }
`

export { Button, Form, InputSearch, Separator, WrapperInput, WrapperForm }