import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: calc(100vh - 4rem);
  background-color: #fff;
`

const GroupInput = styled.div`
  /* outline: 2px solid red; */
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

export { Button, Form, GroupInput }