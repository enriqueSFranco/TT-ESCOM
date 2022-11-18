import styled from 'styled-components'

const Content = styled.section`
  background-color: #F8F8FD;
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
  padding: 0;
  margin: 0;
  position: relative;
  height: 40px;

  .active {
    color: #4842DE;
    background-color: #E9EBFD;
    padding: 1em .5rem;
    width: fit-content;
    border-radius: 0 5px 5px 0;
    font-weight: 700;
    
    &::before {
      content: '';
      position: absolute;
      top: -.8em;
      left: -.5rem;
      bottom: 0;
      width: 3px;
      height: 50px;
      background-color: #4842DE;
    }
  }
`

const Wrapper = styled.main`
  position: relative;
  top: 4rem;
  display: grid;
  grid-template-columns: 270px 1fr;
  padding: 1rem;
  background-color: #fff;
`

const SideBar = styled.aside`
  background-color: #F8F8FD;
  border-radius: 5px;
  padding: .5rem;
  height: calc(100vh - 6rem);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #E9EBFD;
    border: 2px solid #E9EBFD;
    width: 290px;
    height: 200px;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    z-index: 9;
  }
`

export { Content, NavList, Item, SideBar, Wrapper }