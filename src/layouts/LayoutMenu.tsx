// import { useScroll } from "hooks/useScroll";
import { Header, Nav } from './styled-components/LayoutMenuStyled'

interface Props {
  children: React.ReactNode
}

const LayoutMenu: React.FC<Props> = ({ children }) => {
  // const onScreen = useScroll(300, false)

  return (
    <Header>
      <Nav>{children}</Nav>
    </Header>
  );
};

export default LayoutMenu;
