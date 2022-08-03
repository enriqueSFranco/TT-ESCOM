import Menu from "../components/Menu/Menu"
import Hero from "../components/Hero/Hero"
import CardJobList from "../components/Card/CardJobList"
import FormSearch from "../components/Form/FormSearch";
import MenuSideBar from "../components/Menu/MenuSideBar";
import { Container, ContainerAsideMenu, ContainerMain, ContainerMenu } from "./styled-components/HomeStyled"

function Home() {

  return (
    <Container>
      <ContainerMenu>
        <Menu />
        <Hero>
          <FormSearch />
        </Hero>
      </ContainerMenu>
      
      <ContainerMain>
        <CardJobList />
      </ContainerMain>

      <ContainerAsideMenu>
        <MenuSideBar />
      </ContainerAsideMenu>
    </Container>
  )
}

export default Home;