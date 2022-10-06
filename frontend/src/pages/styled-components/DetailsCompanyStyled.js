import styled from "styled-components"

const ContainerLogoCompany = styled.figure`
  width: fit-content;
  height: 150px;
  outline: 1px solid #ccc;
  border-radius: 4px;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center center;
  }
`

const FooterLogoCompany = styled.figcaption`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const NavList = styled.nav`
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
  width: 100%;
  height: 250px;
  padding: 1rem;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const MainContainer = styled.article`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Title = styled.h2`
`

export { ContainerLogoCompany, FooterLogoCompany, NavList, Banner, MainContainer, Title }