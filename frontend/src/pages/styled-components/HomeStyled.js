import styled from "styled-components"

const Main = styled.main`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-areas: 
                      "hero hero"
                      "aside content-data";
  position: relative;
  top: 4rem;
`

const Hero = styled.div`
  grid-area: hero;
  width: 100%;
  `

const Content = styled.section`
  grid-area: content-data;
`

const Aside = styled.aside`
  grid-area: aside;
`

export { Aside, Content, Hero, Main }