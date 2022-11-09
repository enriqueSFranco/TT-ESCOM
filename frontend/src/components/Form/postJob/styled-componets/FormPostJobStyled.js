import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: fit-content;
  background-color: #fff;
  `

const ContainerForm = styled.div`
  position: relative;
  top: 6rem;
  outline: 2px solid red;

`

const GroupInput = styled.div`
  outline: 2px solid red;
  width: 800px;
  display: flex;
  gap: 1rem;
`

const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: .3rem;
  background-color: #F13465;
  color: #FFF;
  font-weight: 600;
`

const Select = styled.select`
  height: 100%;
  border-radius: 0;
  outline: 0;
  border: 0;
  background-color: transparent;
`

const WrapperSelect = styled.div`
  outline: 1px solid #ccc;
`

export { Button, Form, GroupInput, Select, WrapperSelect, ContainerForm }