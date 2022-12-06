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
  
  .menu_item {
    position: relative;
  }

  .active {
    color: #0389D4;
    border-bottom: 2px solid #0389D4;
  }
`

// li
const ListItem = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  gap: .4rem;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export { List, ListItem }