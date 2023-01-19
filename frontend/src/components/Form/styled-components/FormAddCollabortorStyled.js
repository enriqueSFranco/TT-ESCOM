import styled from "styled-components"

const WrapperForm = styled.div`
  background-color: #fff;
  padding: 1rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
`

const WrapperPhoto = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #fff;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`

const GroupInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`

const ButtonAccept = styled.input`
  outline: none;
  border: none;
  padding: .5rem;
  width: 100px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #8BC34A;
  color: #fff;
`

export { WrapperForm, WrapperPhoto, ButtonAccept, GroupInputs, Form }