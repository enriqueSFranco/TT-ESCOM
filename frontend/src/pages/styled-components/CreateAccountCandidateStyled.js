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
  border-left: 12px solid #222;
`

const TextH2 = styled.h2`
  color: #fff;
  font-family: 'Fredoka One', cursive;
  text-transform: uppercase;
`

const ContainerBackground = styled.article`
  grid-area: background;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => props.bg || 'linear-gradient(to top, #4481eb 0%, #04befe 100%)'};
`

const Overelay = styled.div`
  position: relative;
  width: 600px;
  height: 700px;

  &::before {
    content: '';
    position: absolute;
    border-radius: 4px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(10px);
  }
`

export { Wrapper, ContainerForm, ContainerBackground, Overelay, TextH2 }