import styled from "styled-components";

const ContainerTextEditor = styled.div`
  outline: 2px solid red;
`

const Button = styled.input`
  border: none;
  height: 3rem;
  width: 150px;
  border-radius: .3rem;
  font-size: 1rem;
  letter-spacing: 1px;
  background-color: #1B8EFB;
  color: #fff;
`

const ContainerForm = styled.div`
  display: grid;
  place-content: center;
`

const SubTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: normal;
`

const Form = styled.form`
  outline: 2px solid blue;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export { Button, ContainerForm, ContainerTextEditor, Form, SubTitle }