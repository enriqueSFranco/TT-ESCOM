import styled from 'styled-components'

const Wrapper = styled.section`
  font-family: sans-serif;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "background formulario";
`

const ContainerForm = styled.article`
  grid-area: formulario;
  height: calc(100vh - 4rem);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* position: relative;
  top: 4rem; */
`

const ContainerBackground = styled.article`
  grid-area: background;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => props.bg || 'linear-gradient(to top, #4481eb 0%, #04befe 100%)'};
  /* position: relative;
  top: 4rem; */
`

export { Wrapper, ContainerForm, ContainerBackground }