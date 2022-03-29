import { useFetch } from "../hooks/useFetch";
import Label from "../components/Input/Label";
import Input from "../components/Input/Input";
import Span from "../components/Input/Span";
import CardCompany from "../components/Card/Company/CardCompany";
import styles from "./PageCompany.module.css";
import { useState } from "react";

const PageCompany = () => {
  const [search, setSearch] = useState("");
  const [companyMatch, setCompanyMatch] = useState([]);
  const { data } = useFetch("/api/Companies/");

  const searchCompany = (query) => {
    if (query !== "") {
      setSearch(query);
      let matches = data.filter((company) => {
        let regex = new RegExp(`${query}`, "gi");
        return company.t300_name.match(regex);
      });
      setCompanyMatch(matches);
    } else {
      setCompanyMatch(data);
    }
  };

  if (!data) return null;

  return (
    <div className={`${styles.wrapperListCompanies}`}>
      <div className={styles.search}>
        <h1 className={styles.title}>
          Empresas registradas
        </h1>
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
        {search.length > 1
          ? companyMatch.map((company) => (
              <div key={company?.t300_id_company} className={styles.gridItems}>
                <CardCompany
                  name={company?.t300_name}
                  webSite={company?.t300_web_page}
                />
              </div>
            ))
          : data.map((company) => (
              <div key={company?.t300_id_company} className={styles.gridItems}>
                <CardCompany
                  name={company?.t300_name}
                  webSite={company?.t300_web_page}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default PageCompany;
