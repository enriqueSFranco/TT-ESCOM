import styled from 'styled-components'

const WrapperComment = styled.article`
  background-color: #eee;
  padding: .5rem;
  border-radius: 2px;
  height: fit-content;
`

const Description = styled.div`
  width: 100%;
  overflow: hidden;
`

const TextDate = styled.span`
  font-weight: 500;
  font-size: .9rem;
  color: #116bfe;
`

const CommentBox = styled.textarea`
  outline: 1px solid blue;
  border-radius: 2px;
  border: none;
  width: 90%;
  height: 50px;
  resize: none;
  text-indent: 4px;
  padding: .2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #222;
    font-weight: 400;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: .5rem;

  input[type='submit'] {
    border: none;
    outline: none;
    background-color: #3d50d9;
    color: #fff;
    padding: .5rem;
    border-radius: 5px;
  }
`

export { WrapperComment, Form, Description, CommentBox, TextDate }