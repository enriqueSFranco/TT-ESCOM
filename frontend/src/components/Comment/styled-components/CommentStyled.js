import styled from 'styled-components'

const WrapperComment = styled.article`
  background-color: #eee;
  padding: .5rem;
  border-radius: 2px;
`

const Description = styled.div`
    display: grid;
  grid-template-columns: 80% 20%;
`

const CommentBox = styled.textarea`
  outline: 1px solid blue;
  border-radius: 2px;
  border: none;
  width: 100%;
  height: 50px;
  resize: none;
  text-indent: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #222;
    font-weight: 400;
  }

`

export { WrapperComment, Description, CommentBox }