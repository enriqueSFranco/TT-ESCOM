import styled from 'styled-components'

const Content = styled.section`

`

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Item = styled.li`
  cursor: pointer;
`

const Wrapper = styled.main`
  position: relative;
  top: 4rem;
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 1rem;
  background-color: #fff;
`

const SideBar = styled.aside`
  background-color: #F7F7F9;
  border-radius: 5px;
  padding: .5rem;
  height: calc(100vh - 6rem);
`

export { Content, NavList, Item, SideBar, Wrapper }