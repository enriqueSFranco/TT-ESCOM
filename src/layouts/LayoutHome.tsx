import Menu from '../components/Menu/Menu'
import { LayoutHomeStyle, Header, Main } from './styled-components/LayoutHomeStyled'

interface LayoutHomeProps {
  children: React.ReactNode
}

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <LayoutHomeStyle>
      <Header>
        <Menu />
      </Header>
      <Main>
        {children}
      </Main>
    </LayoutHomeStyle>
  )
}

export default LayoutHome