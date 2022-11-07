import styled from 'styled-components'
import { device } from 'breakpoints'

const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${props => props.bgColor || '#2F80EC'};
  color: ${props => props.color || '#FFF'};
  width: ${props => props.width || 'fit-content'};
  height: ${props => props.height || '3rem'};
  border-radius: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;
  cursor: pointer;
`

const Form = styled.form`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  `

const BoxInput = styled.div`
  width: 400px;
  height: 90px;
`

const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  margin-top: 1.5rem;
`

const WrapperForm = styled.div`

  @media screen and ${device.mobileM} {
    width: 100%;
    right: 0;
  }
  
  @media screen and ${device.laptop} {
    /* outline: 2px solid blue; */

    background-color: #fff;
    width: 550px;
    position: absolute;
    top: 10rem;
    right: 10rem;
    border-radius: .3rem;
    padding: 2rem 1rem 1rem 1rem;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
  }

`


export { Button, BoxInput, Form, Register, WrapperForm }