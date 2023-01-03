import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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

const Content = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 350px;
  height: fit-content;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(27deg, #1C8EFB, #005885);
    border-radius: 1rem 0 0 1rem;
  }
`

const WrapperFilters = styled.div`
  position: sticky;
  top: 560px;
`

export { List, Item, Label, Checkbox, Content, WrapperFilters }

