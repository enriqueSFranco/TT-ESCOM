import CreateAccountStudent from "components/Form/register/CreateAccountStudent";
import Background from 'assets/images/job-portal-development.png'
import { Wrapper, ContainerForm, ContainerBackground } from '../styled-components/CreateAccountCandidateStyled'

const PageCreateAccountStudent = () => {
  return (
    <>
      <Wrapper>
        <ContainerBackground bg='linear-gradient(to right, #00dbde 0%, #fc00ff 100%)'>
          <img src={Background} alt='crear-cuenta-candidato-bg' />
        </ContainerBackground>
        <ContainerForm>
          <CreateAccountStudent />
        </ContainerForm>
      </Wrapper>
    </>
  );
};

export default PageCreateAccountStudent;
