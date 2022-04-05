import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Label from "../../components/Input/Label";
import Input from "../../components/Input/Input";
import Span from "../../components/Input/Span";
import Skeleton from "../../components/Skeleton/Skeleton";
import CardCompany from "../../components/Card/Company/CardCompany";
import { API_COMPANY } from "../../services/settings";
import styles from "./PageCompany.module.css";

const PageCompany = () => {
  const [search, setSearch] = useState("");
  const [companyMatch, setCompanyMatch] = useState([]);
  const { data, loading } = useFetch(API_COMPANY);

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
        ) : search.length > 1 ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default PageCompany;
