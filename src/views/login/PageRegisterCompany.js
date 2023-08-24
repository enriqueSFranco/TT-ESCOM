import CreateAccountCompany from "components/Form/register/CreateAccountCompany";
import { Link } from "react-router-dom";
import LayoutHome from "Layout/LayoutHome";
import { Toaster } from "react-hot-toast";
import fondo from 'assets/images/crear-cuenta-empresa-fondo.jpg'
import {
  Wrapper,
  ContainerForm,
  ContainerBackground,
} from "pages/styled-components/CreateAccountCandidateStyled";

const PageRegisterCompany = () => {
  return (
    <LayoutHome>
      <Wrapper>
        <ContainerBackground bg="linear-gradient(to top, #dfe9f3 0%, white 100%);">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            <picture style={{ width: '100%', position: 'relative' }}>
              <img src={fondo} alt="login-reclutador-fondo" style={{ borderRadius: '1rem' }} />
            </picture>
            <div>
              <blockquote>
                Crea tu cuenta y publica tus vacantes con nosotros.
              </blockquote>
              <span>
                ¿Ya tines cuenta? <Link to="/reclutador">Inicia sesion</Link>
              </span>
            </div>
          </div>
        </ContainerBackground>
        <ContainerForm>
          <CreateAccountCompany />
        </ContainerForm>
        <Toaster psosition="top-right" toastOptions={{ duration: 5000 }} />
      </Wrapper>
    </LayoutHome>
  );
};

export default PageRegisterCompany;
