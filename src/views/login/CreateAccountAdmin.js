import React from 'react'
import LayoutHome from 'Layout/LayoutHome';
import FormCreateAccountManager from 'components/Form/register/FormCreateAccountManager';
import background from 'assets/icons/businessman-showing-blank-laptop-screen-and-ok-gesture-4912845-4099784.png'
import { Wrapper, ContainerBackground, ContainerForm, Overelay } from 'pages/styled-components/CreateAccountCandidateStyled';


const CreateAccountAdmin = () => {
  return (
    <LayoutHome>
      <Wrapper>
        <ContainerBackground bg="linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);">
          <Overelay>
            <picture style={{ width: '100%', position: 'relative', top: '15rem', left: '20rem' }}>
              <img src={background} alt="login-reclutador-fondo" width='80%' />
            </picture>
          </Overelay>
        </ContainerBackground>
        <ContainerForm>
          <FormCreateAccountManager />
        </ContainerForm>
      </Wrapper>
    </LayoutHome>
  )
}

export default CreateAccountAdmin