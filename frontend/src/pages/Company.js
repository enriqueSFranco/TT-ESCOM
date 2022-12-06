import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFetch } from "hooks";
import Input from "components/Input/Input";
import { BsSearch } from 'react-icons/bs'
import Skeleton from "components/Skeleton/Skeleton";
import CardCompany from "components/Card/Company/CardCompany";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import bgCompany from "images/companyBackground.jpg";
import { Main, GridButtom, GridTop, Form } from "./styled-components/CompanyStyled";

const Company = () => {
  const [query, setQuery] = useState("");
  const [companyMatch, setCompanyMatch] = useState(null);
  const { data, loading } = useFetch(process.env.REACT_APP_URL_COMPANY);
  
  const searchCompany = (query) => {
    let input = query.toLowerCase().trim();
    setQuery(input);
    
    if (input !== "") {
      let matches = data.filter((company) => {
        let regex = new RegExp(`^${input}`, "gi");
        return company.t300_name.match(regex);
      });
      setCompanyMatch(matches);
    } else {
      setCompanyMatch(data);
    }
  };

  if (!data) return null;

  return (
    <LayoutHome>
      <Main>
        <GridTop>
          <LayoutHero src_photo={bgCompany} alt_photo="bg-company">
            <Form>
              <Input
                type="text"
                label="Buscar una empresa"
                width='400px'
                // bgInput='#00000097'
                icon={<BsSearch />}
                iconColor='#000'
                id="query"
                name="query"
                value={query}
                onChange={(e) => searchCompany(e.target.value)}
              />
            </Form>
          </LayoutHero>
        </GridTop>
        <GridButtom>
            {loading ? (
              <Skeleton type="business" />
            ) : query.length > 0 ? (
              companyMatch.map((company) => (
                <Link
                  style={{height: '140px'}}
                  to={`${company?.t300_id_company}`}
                  key={company?.t300_id_company}
                >
                  <CardCompany
                    key={company?.t300_id_company}
                    name={company?.t300_name}
                    mision={company?.t300_mision}
                    vision={company?.t300_vision}
                    webSite={company?.t300_web_page}
                    logo={company?.t300_logo}
                    totalPost={company?.TotalPublished}
                    totalActive={company?.TotalActive}
                  />
                </Link>
              ))
            ) : data.length > 0 ? (
              data.map((company) => (
                <Link
                  style={{height: '140px'}}
                  to={`${company?.t300_id_company}`}
                  key={company?.t300_id_company}
                >
                  <CardCompany
                    name={company?.t300_name}
                    mision={company?.t300_mision}
                    vision={company?.t300_vision}
                    webSite={company?.t300_web_page}
                    logo={company?.t300_logo}
                    banner={company?.t300_banner}
                    totalPost={company?.TotalPublished}
                    totalActive={company?.TotalActive}
                  />
                </Link>
              ))
            ) : (
              <h2>No hay empresas registradas</h2>
            )}
          <Outlet />
        </GridButtom>
      </Main>
    </LayoutHome>
  );
};

export default Company;
