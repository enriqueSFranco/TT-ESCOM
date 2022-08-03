import styled from "styled-components";

const Container = styled.article`
  width: 100%;
  height: 100vh;
  /* padding: 1rem; */
`

const Background = styled.div`
  width: inherit;
  height: 300px;
  background-color: lightblue;
  position: relative;
  border-radius: 1rem;
`

const Decription = styled.div`
  height: calc(100vh - 400px);
  outline: 2px solid blue;
  `

const Header = styled.div`
  width: inherit;
  height: 400px;
  outline: 2px solid red;
  position: relative;
`

const Logo = styled.figure`
  background-color: red;
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  position: absolute;
  transform: translateY();
`

const Image = styled.img``

const Actions = styled.div``

const Apply = styled.button``

const Bussines = styled.p``

const ContainerLeft = styled.div``

const ContainerRight = styled.div``

const LocationJob = styled.span``

const PublicateDate = styled.span``

const Reportjob = styled.button``

const TitleJob = styled.h1``

export { Actions, Apply, Background, Bussines, Container, ContainerLeft, ContainerRight, Decription, Header, Logo, LocationJob, Image, PublicateDate, Reportjob, TitleJob }