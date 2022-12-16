import CreateAccountStudent from "components/Form/register/CreateAccountStudent";
import Background from 'assets/images/job-portal-development.png'
import { Wrapper, ContainerForm, ContainerBackground, Overelay, TextH2 } from '../styled-components/CreateAccountCandidateStyled'

const PageCreateAccountStudent = () => {
  return (
    <>
      <Wrapper>
        <ContainerBackground bg="linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%);">
          <Overelay>
          <TextH2 style={{position: 'absolute', top: '3rem', padding: '0 1rem', zIndex: '9'}}>
          Haz el mejor movimiento para elegir tu nuevo trabajo
        </TextH2>
            <picture style={{position: 'relative', top: '20rem', left: '13rem'}}>
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
