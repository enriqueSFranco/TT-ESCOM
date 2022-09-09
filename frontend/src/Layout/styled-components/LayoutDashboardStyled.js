import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 4rem;
  width: 100%;
  height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-areas: "aside container";
`
export { Wrapper }