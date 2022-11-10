import styled from 'styled-components'

const Form = styled.form`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5rem;
  text-transform: capitalize;
`

const Button = styled.input`
  width: fit-content;
  outline: none;
  border: none;
  background-color: #116BFE;
  color: #FFF;
  border-radius: 4px;
  padding: .5rem;
  transition: background-color .3s ease;

  &:hover {
    background-color: #3281ff;
  }
`

const Select = styled.select`
  height: 50px;
  padding: 0 .5rem;
  border-radius: 4px;
  outline: 1px solid #ccc;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`

const Range = styled.input`
    width: 400px;
    height: 8px;
    border-radius: 1rem;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }
    
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        box-shadow: none;
        background: #ffffff;
        border-radius: 0px;
        border: 0px solid #010101;
    }
    &::-moz-range-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        box-shadow: none;
        background: #ffffff;
        border-radius: 0px;
        border: 0px solid #010101;
    }
  
    &::-webkit-slider-thumb {
        box-shadow: none;
        border: 0px solid #1c8efb;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
        height: 22px;
        width: 22px;
        border-radius: 22px;
        background: rgba(255,255,255,1);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -20px;
    }
  &::-moz-range-thumb{
        box-shadow: none;
        border: 0px solid #ffffff;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
        height: 22px;
        width: 22px;
        border-radius: 22px;
        background: #1c8efb;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -20px;
  }
  &::-moz-focus-outer {
    border: 0;
    }
`

export { Button, Form, Title, Select, Range }