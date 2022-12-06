import styled from 'styled-components'

const WrapperForm = styled.div`
  position: relative;
  top: 2rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const BoxComment = styled.textarea`
  border-radius: 1rem;
  border: 1px solid #ccc;
  outline: none;
  resize: none;
  text-indent: 4px;
  background-color: #F7F6FB;
  padding: .5rem;
  width: 500px;
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: 180ms box-shadow ease-in-out;

  ::placeholder {
    color: #7D7D7D;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  &:focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`

const Submit = styled.input`
  width: 100px;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: .3rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #116BFE;
  color: #fff;
`

export { BoxComment, Form, Submit, WrapperForm }