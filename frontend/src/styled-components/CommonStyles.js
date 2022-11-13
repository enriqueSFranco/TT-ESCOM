import styled from 'styled-components'

// ul
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .5rem;
`

// li
const ListItem = styled.li`
  padding: 0;
  margin: 0;
`

export { List, ListItem }