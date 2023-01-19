import LoginCompany from 'components/Form/login/LoginCompany';
import LayoutHome from 'Layout/LayoutHome';
import background from 'assets/icons/businessman-showing-blank-laptop-screen-and-ok-gesture-4912845-4099784.png'
import { Wrapper, ContainerBackground, ContainerForm, Overelay } from 'pages/styled-components/CreateAccountCandidateStyled';

const PageLoginCompany = () => {
  return (
    <LayoutHome>
      <Wrapper>
        <ContainerBackground bg="linear-gradient(120deg, #f093fb 0%, #f5576c 100%);">
          <Overelay>
            <picture style={{width: '100%', position: 'relative', top: '15rem', left: '20rem'}}>
              <img src={background} alt="login-reclutador-fondo" width='80%' />
            </picture>
          </Overelay>
        </ContainerBackground>
        <ContainerForm>
          <LoginCompany />
        </ContainerForm>
      </Wrapper>
    </LayoutHome>
  )
};

export default PageLoginCompany;