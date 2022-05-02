import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFetch } from "hooks/useFetch";
import { API_COMPANY } from "services/settings";
import Label from "components/Element/Label/Label";
import Input from "components/Element/Input/Input";
import Span from "components/Element/Span/Span";
import Skeleton from "components/Skeleton/Skeleton";
import CardCompany from "components/Card/Company/CardCompany";
import styles from "./PageCompany.module.css";

const PageCompany = () => {
  const [search, setSearch] = useState("");
  const [companyMatch, setCompanyMatch] = useState([]);
  const { data, loading } = useFetch(API_COMPANY);

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

  if (!data) return null;
  console.log(data);
  return (
    <section className={`${styles.wrapperListCompanies}`}>
      <div className={styles.search}>
        <div className={styles.background}></div>
        <h1 className={styles.title}>Empresas registradas</h1>
        <form className={styles.searchForm}>
          <Label htmlFor="t300_id_company">
            <Input
              type="text"
              id="t300_id_company"
              name="t300_id_company"
              onChange={(e) => searchCompany(e.target.value)}
            />
            <Span content="Buscar una empresa" />
          </Label>
        </form>
      </div>
      <div className={`container ${styles.grid}`}>
        {loading ? (
          <Skeleton type="business" />
        ) : search.length > 0 ? (
          companyMatch.map((company) => (
            <Link className={styles.linkCard} to={`${company?.t300_id_company}`} key={company?.t300_id_company}>
              <CardCompany
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
            <Link className={styles.linkCard} to={`${company?.t300_id_company}`} key={company?.t300_id_company}>
            <CardCompany
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
      </div>
      <Outlet />
    </section>
  );
};

export default PageCompany;
