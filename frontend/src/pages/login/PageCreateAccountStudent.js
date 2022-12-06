import CreateAccountStudent from "components/Form/register/CreateAccountStudent";
import Background from 'assets/images/job-portal-development.png'
import { Wrapper, ContainerForm, ContainerBackground, Overelay, TextH2 } from '../styled-components/CreateAccountCandidateStyled'

const PageCreateAccountStudent = () => {
  return (
    <>
      <Wrapper>
        <ContainerBackground bg='linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);'>
          <Overelay>
            <div style={{position: 'relative', top: '7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <TextH2>Un paso mas cerca</TextH2>
              <TextH2>de tu <span>nuevo trabajo.</span></TextH2>
            </div>
            <picture style={{position: 'relative', top: '12rem', left: '13rem'}}>
              <img src={Background} alt='crear-cuenta-candidato-bg' />
            </picture>
          </Overelay>
        </ContainerBackground>
        <ContainerForm>
          <CreateAccountStudent />
        </ContainerForm>
      </Wrapper>
    </>
  );
};

export default PageCreateAccountStudent;
