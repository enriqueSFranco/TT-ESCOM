import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { useFetch } from '../../hooks/useFetch'
// import { API_COMPANY } from '../../services/settings'
import Menu from '../components/Menu/Menu'
import Input from '../components/Input/Input'
import CardBusiness from '../components/Card/CardBusiness'
import {
  Form,
  GridCompanies,
  Title,
  Wrapper,
  WrapperForm,
  WrapperSearch
} from './styled-components/Business'

const Business = () => {
  const [search, setSearch] = useState("");
  const [companyMatch, setCompanyMatch] = useState(null);
  const data = [];
  // const { data, loading } = useFetch(API_COMPANY);

  const searchCompany = (query) => {
    let input = query.toLowerCase().trim();
    if (input !== "") {
      setSearch(input);
      let matches = data.filter((company) => {
        let regex = new RegExp(`^${input}`, "gi");
        return company.t300_name.match(regex);
      });
      setCompanyMatch(matches);
    } else {
      setCompanyMatch(data);
    }
  };

  // if (!data) return null;

  return (
    <Wrapper>
      <Menu />
      <WrapperSearch>
        <Title>Empresas registradas</Title>
        <WrapperForm>
          <Form>
            <Input
              label='Buscar una empresa'
              id='t300_id_company'
              name='t300_id_company'
              onChange={(e) => searchCompany(e.target.value)}
            />
          </Form>
        </WrapperForm>
      </WrapperSearch>
      <GridCompanies>
      {null ? (
          <Skeleton type="business" />
        ) : search.length > 0 ? (
          companyMatch.map((company) => (
            <Link to={`${company?.t300_id_company}`} key={company?.t300_id_company}>
              <CardBusiness
                key={company?.t300_id_company}
                name={company?.t300_name}
                mision={company?.t300_mision}
                vision={company?.t300_vision}
                webSite={company?.t300_web_page}
                logo={company?.t300_logo}
              />
            </Link>
          ))
        ) : data.length > 0 ? (
          data.map((company) => (
            <Link to={`${company?.t300_id_company}`} key={company?.t300_id_company}>
            <CardBusiness
              name={company?.t300_name}
              mision={company?.t300_mision}
              vision={company?.t300_vision}
              webSite={company?.t300_web_page}
              logo={company?.t300_logo}
              banner={company?.t300_banner}
            />
            </Link>
          ))
        ) : (
          <h2>No hay empresas registradas</h2>
        )}
      </GridCompanies>
      <Outlet />
    </Wrapper>
  );
};

export default Business;
