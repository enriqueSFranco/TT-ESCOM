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
`
const Content = styled.div`
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  /* width: 350px; */
  /* height: 200px; */
  /* border-radius: 4px; */
  /* padding: 1rem; */
  /* margin-bottom: 1rem; */
  /* background: linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);
  box-shadow: hsla(333, 100%, 53%, 1) 0px 5px 15px; */
`

const WrapperFilters = styled.div`
  /* position: sticky; */
  /* top: 440px; */
`

export { List, Item, Label, Checkbox, Content, WrapperFilters }

