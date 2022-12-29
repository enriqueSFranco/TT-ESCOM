import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  .new-list {
    display: flex;
    outline: 2px solid red;
  }
`

const Item = styled.li`
  /* outline: 2px solid blue; */
  padding: .5rem 0;
  `

const Label = styled.label`
  /* outline: 2px solid red; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;
`

const Checkbox = styled.input`
  /* outline: 2px solid green; */
`

export { List, Item, Label, Checkbox }

