import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFetch } from "hooks/useFetch";
import { API_COMPANY } from "services/settings";
import { getVacantsFilter } from "services/jobs";

import Input from "components/Input/Input";
import { BsSearch } from 'react-icons/bs'
import Skeleton from "components/Skeleton/Skeleton";
import CardCompany from "components/Card/Company/CardCompany";
import LayoutHome from "Layout/LayoutHome";
import { Main, GridButtom, GridTop, Form } from "./styled-components/CompanyStyled";
import LayoutHero from "Layout/LayoutHero";
import bgCompany from "images/companyBackground.jpg";
import styles from "./main/PageCompany.module.css";

const Company = () => {
  const [query, setQuery] = useState("");
  const [companyMatch, setCompanyMatch] = useState(null);
  const { data, loading } = useFetch(API_COMPANY);

  const searchCompany = (query) => {
    let input = query.toLowerCase().trim();
    if (input !== "") {
      setQuery(input);
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
            <h1>Empresas registradas</h1>
            <Form>
              <Input
                type="text"
                label="Buscar una empresa"
                width='400px'
                icon={<BsSearch />}
                id="query"
                name="query"
                value={query}
                onChange={(e) => searchCompany(e.target.value)}
              />
            </Form>
          </LayoutHero>
        </GridTop>
        <GridButtom>
          <div className={`${styles.grid}`}>
            {loading ? (
              <Skeleton type="business" />
            ) : query.length > 0 ? (
              companyMatch.map((company) => (
                <Link
                  className={styles.linkCard}
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
                    totalPost="10"
                  />
                </Link>
              ))
            ) : data.length > 0 ? (
              data.map((company) => (
                <Link
                  className={styles.linkCard}
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
                    totalPost="10"
                  />
                </Link>
              ))
            ) : (
              <h2>No hay empresas registradas</h2>
            )}
          </div>
          <Outlet />
        </GridButtom>
      </Main>
    </LayoutHome>
  );
};

export default Company;
