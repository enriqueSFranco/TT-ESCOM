import React from "react";
import LayoutHome from "Layout/LayoutHome";
// import Menu from 'components/Menu/Menu'
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
    <LayoutHome>
      {/* <Menu /> */}
      <Wrapper>
        <WrapperTitle>
          <h1 style={{color: '#369BD4', letterSpacing: '2px'}}>Empresas Registradas</h1>
        </WrapperTitle>
        <Container>
          {business?.map((company) => (
            <CardCompanyAdmin
              key={crypto.randomUUID()}
              nameCompany={company?.t300_name}
              logoCompany={company?.t300_logo}
              stateCompany={company?.c302_id_status?.c302_description}
              totalPost={company?.TotalVacants}
              totalReports={company?.TotalVacants}
              totalRecruiters={company?.TotalRecruiters}
              href={`/detalles-de-emperesa/${company?.t300_id_company}`}
            />
          ))}
        </Container>
      </Wrapper>
    </LayoutHome>
  );
};

export default RegisteredCompanies;
