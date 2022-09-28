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

export { Button, Form, Title }