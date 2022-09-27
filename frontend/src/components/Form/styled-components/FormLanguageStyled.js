import styled from 'styled-components'

const Form = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
    /* background-color:  */
  }
`

export { Button, Form }