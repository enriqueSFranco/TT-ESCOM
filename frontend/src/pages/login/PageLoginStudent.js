import LoginStudent from "components/Form/login/LoginStudent";
import fondo from 'assets/images/businessman-with-demanding-job-5652961-4708242.png'
import { Wrapper, ContainerForm, ContainerBackground, Overelay } from "pages/styled-components/CreateAccountCandidateStyled";

const PageLoginStudent = () => {
  return (
    <Wrapper>
      <ContainerBackground bg='linear-gradient(to right, #f83600 0%, #f9d423 100%);'>
        <Overelay>
          <picture style={{position: 'relative', top: '14rem', left: '15rem'}}>
            <img src={fondo} alt="login-candidato-fondo" style={{
              filter: 'drop-shadow(0 0 0.75rem #fff)',
              width: '90%'
            }} />
          </picture>
        </Overelay>
      </ContainerBackground>
      <ContainerForm>
        <LoginStudent />
      </ContainerForm>
    </Wrapper>
  );
};

export default PageLoginStudent;
