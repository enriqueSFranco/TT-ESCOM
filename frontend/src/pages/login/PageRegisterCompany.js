import CreateAccountCompany from "components/Form/register/CreateAccountCompany";
import { Link } from "react-router-dom";
import LayoutHome from "Layout/LayoutHome";
import { Toaster } from "react-hot-toast";
import {
  Wrapper,
  ContainerForm,
  ContainerBackground,
} from "pages/styled-components/CreateAccountCandidateStyled";

const PageRegisterCompany = () => {
  return (
    <LayoutHome>
      <Wrapper>
        <ContainerBackground bg="linear-gradient(to top, #ff0844 0%, #ffb199 100%);">
          <img src="" alt="" />
          <div>
            <blockquote>
              Crea tu cuenta y publica tus vacantes con nosotros.
            </blockquote>
            <span>
              ¿Ya tines cuenta? <Link to="/reclutador">Inicia sesion</Link>
            </span>
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
