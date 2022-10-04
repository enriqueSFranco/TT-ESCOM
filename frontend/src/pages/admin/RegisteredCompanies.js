import React from "react";
import Menu from 'components/Menu/Menu'
import CardCompanyAdmin from "components/Card/CardCompanyAdmin";
import { useGetListCompany } from "hooks";
import {
  Container,
  Wrapper,
  WrapperTitle
} from "../styled-components/RegisteredCompaniesStyled";

const RegisteredCompanies = () => {
  const [business] = useGetListCompany();

  if (!business) return null;

  return (
    <>
      <Menu />
      <Wrapper>
        <WrapperTitle>
          <h1>Empresas Registradas</h1>
        </WrapperTitle>
        <Container>
          {business?.map((company) => (
            <CardCompanyAdmin
              key={crypto.randomUUID()}
              nameCompany={company?.t300_name}
              logoCompany={company?.t300_logo}
            />
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default RegisteredCompanies;
