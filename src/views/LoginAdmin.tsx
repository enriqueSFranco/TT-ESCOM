import React from 'react'
import LayoutHome from 'Layout/LayoutHome'
import LoginManager from 'components/Form/login/LoginManager'
import { Wrapper, ContainerBackground, ContainerForm, Overelay } from 'pages/styled-components/CreateAccountCandidateStyled';
import background from 'assets/icons/businessman-showing-blank-laptop-screen-and-ok-gesture-4912845-4099784.png'


const LoginAdmin = () => {

  return (
    <LayoutHome>
      <Wrapper>
        <ContainerBackground>
          <Overelay>
            <picture style={{ width: '100%', position: 'relative', top: '15rem', left: '20rem' }}>
              <img src={background} alt="login-reclutador-fondo" width='80%' />
            </picture>
          </Overelay>
        </ContainerBackground>
        <ContainerForm>
          <LoginManager />
        </ContainerForm>
      </Wrapper>
    </LayoutHome>
  )
}

export default LoginAdmin