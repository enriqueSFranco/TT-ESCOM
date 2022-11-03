import LoginStudent from "components/Form/login/LoginStudent";
import fondo from 'assets/images/login-candidate-background.png'
import { Wrapper, ContainerForm, ContainerBackground } from "pages/styled-components/CreateAccountCandidateStyled";

const PageLoginStudent = () => {
  return (
    <Wrapper>
      <ContainerBackground bg='linear-gradient(to right, #fa709a 0%, #fee140 100%);'>
        <img src={fondo} alt="login-candidato-fondo" style={{
          width: '70%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '
        }} />
      </ContainerBackground>
      <ContainerForm>
        <LoginStudent />
      </ContainerForm>
    </Wrapper>
  );
};

export default PageLoginStudent;
