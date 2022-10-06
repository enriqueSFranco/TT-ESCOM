import styled from "styled-components"

const NavList = styled.nav`
  /* outline: 2px solid red; */
  width: 200px;
  margin: 2rem 0;

  .list {
    display: flex;
    justify-content: space-between;
  }

  .list-item {
    color: #005CC5;
    transition: color .3s ease;
    cursor: pointer;
  }

  .list-item:hover {
    color: #61D8FB;
  }
  `

const Banner = styled.header`
  display: grid;
  place-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const MainContainer = styled.article`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Title = styled.h2`
`

export { NavList, Banner, MainContainer, Title }