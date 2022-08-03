import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  position: relative;
  top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`

export { Container, Wrapper }