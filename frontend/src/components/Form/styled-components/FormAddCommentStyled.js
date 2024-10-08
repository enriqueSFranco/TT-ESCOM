import styled from 'styled-components'
import { USERS } from 'types'

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;
  
  ${props => {
    if (props.typeUser === USERS.recruiter) {
      return`
        background-color: #FFF;
        position: relative;
        bottom: 2rem;
        `
    }
  }}
`

const BoxComment = styled.textarea`
  border-radius: 1rem;
  border: 1px solid #ccc;
  outline: none;
  resize: none;
  text-indent: 4px;
  background-color: #F7F6FB;
  padding: .5rem;
  width: 100%;
  height: 80px;
  overflow-y: auto;
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

export { BoxComment, Form }