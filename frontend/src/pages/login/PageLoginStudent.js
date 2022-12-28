import LoginStudent from "components/Form/login/LoginStudent";
import fondo from "assets/images/businessman-with-demanding-job-5652961-4708242.png";
import {
  Wrapper,
  ContainerForm,
  ContainerBackground,
  Overelay,
  TextH2
} from "pages/styled-components/CreateAccountCandidateStyled";

const PageLoginStudent = () => {
  return (
    <Wrapper>
      <ContainerBackground bg="linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);">
        <Overelay>
        <TextH2 style={{position: 'absolute', top: '3rem', padding: '0 1rem', zIndex: '9'}}>
          Nuevas ofertas te estan esperando
        </TextH2>
          <picture
            style={{ position: "relative", top: "14rem", left: "15rem" }}
          >
            <img
              src={fondo}
              alt="login-candidato-fondo"
              style={{
                width: "90%",
              }}
            />
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
