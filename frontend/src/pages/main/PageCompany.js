import { useState } from "react";
import { useFetch } from "hooks/useFetch";
import Label from "components/Element/Label/Label";
import Input from "components/Element/Input/Input";
import Span from "components/Element/Span/Span";
import Skeleton from "components/Skeleton/Skeleton";
import CardCompany from "components/Card/Company/CardCompany";
import { API_COMPANY } from "services/settings";
import styles from "./PageCompany.module.css";

const PageCompany = () => {
  const [search, setSearch] = useState("");
  const [companyMatch, setCompanyMatch] = useState([]);
  const { data, error, loading } = useFetch(API_COMPANY);

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
  console.log(error)
  return (
    <section className={`${styles.wrapperListCompanies}`}>
      <div className={styles.search}>
        <div className={styles.background}></div>
        <h1 className={styles.title}>Empresas registradas</h1>
        <form className={styles.searchForm}>
          <Label htmlFor="company">
            <Input
              type="text"
              id="company"
              name="company"
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
            <CardCompany
              key={company?.t300_id_company}
              name={company?.t300_name}
              mision={company?.t300_mision}
              vision={company?.t300_vision}
              webSite={company?.t300_web_page}
              logo={company?.t300_logo}
            />
          ))
        ) : data.length > 0 ? (
          data.map((company) => (
            <CardCompany
              key={company?.t300_id_company}
              name={company?.t300_name}
              mision={company?.t300_mision}
              vision={company?.t300_vision}
              webSite={company?.t300_web_page}
              logo={company?.t300_logo}
            />
          ))
        ) : (
          <h2>No hay empresas registradas</h2>
        )}
      </div>
    </section>
  );
};

export default PageCompany;
