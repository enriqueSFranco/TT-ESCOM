import { useFetch } from "../hooks/useFetch";
import Label from "../components/Input/Label";
import Input from "../components/Input/Input";
import Span from "../components/Input/Span";
import CardCompany from "../components/Card/Company/CardCompany";
import styles from "./PageCompany.module.css";
import { useState } from "react";

const PageCompany = () => {
  const [company, setCompany] = useState([]);
  const [filter, setFilter] = useState([]);
  const { data } = useFetch("/api/Companies/");

  const handleFilter = (e) => {
    const query = e.target.value;
    setCompany(query);
    
    const filteredData = data.map((value) => {
      return value?.t300_name.toLowerCase().includes(query.toLowerCase());
    });

    query === "" ? setFilter(data) : setFilter(filteredData);
  };

  const handleSubmit = (e) => {
    e.preventeDefault();
  }

  if (!data) return null;

  return (
    <div className={`${styles.wrapperListCompanies}`}>
      <div className={styles.search}>
        <h1 className={styles.title}>Empresas <span>registradas</span></h1>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <Label htmlFor="company">
            <Input
              type="text"
              id="company"
              name="company"
              value={company}
              // onBlur={() => { setTimeout(() => {
              //   setFilterData([])
              // },1000)}}
              onChange={handleFilter}
            />
            <Span content="Buscar una empresa" />
          </Label>
          <input
            type="submit"
            value="Buscar empresa"
            className={`${styles.btnSearch} btn btn-primary`}
          />
        </form>
      </div>
      <div className={`container ${styles.grid}`}>
        {data.map((company) => (
          <div key={company?.t300_id_company} className={styles.gridItems}>
            <CardCompany name={company?.t300_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCompany;
