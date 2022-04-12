import { useState } from "react";
import Input from "../Input/Input";
import Label from "../Input/Label";
import Span from "../Input/Span";
import styles from "./Search.module.css";

const Search = ({ handleSearch, data, locationList }) => {
  // const {search} = useLocation();
  const [job, setJob] = useState("");
  const [locationJob, setLocationJob] = useState("");
  const [filterData, setFilterData] = useState([]);
  // const query = new URLSearchParams(search)

  const handleFilterJob = (e) => {
    const query = e.target.value;
    setJob(query); // controlamos el input

    const newFilter = data.filter((value) => { // filtramos el contenido
      return value?.t200_job.toLowerCase().includes(query.toLowerCase());
    });

    query === "" ? setFilterData([]) : setFilterData(newFilter);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!job.trim()) return;
    handleSearch(job);
  };

  return (
    <div className={`${styles.searchContainer}`}>
      <h1 className={styles.title}>
        Ayudandote a conseguir un <span>trabajo</span>
        <br />
        <span>y a vivir tus sueños.</span>
      </h1>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <div className={styles.searchInput}>
          <Label htmlFor="job">
            <Input
              type="text"
              id="job"
              name="job"
              value={job}
              onBlur={() => {
                setTimeout(() => {
                  setFilterData([]);
                }, 1000);
              }}
              onChange={handleFilterJob}
            />
            <Span content="Buscar una vacante" />
          </Label>
          {filterData.length !== 0 && (
            <div className={styles.dataResultsJobs}>
              {filterData.slice(0, 15).map((value, index) => {
                return (
                  <p
                    onClick={(e) => setJob(value?.t200_job)}
                    className={styles.dataItem}
                    key={index}
                  >
                    {value?.t200_job}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.searchInput}>
          <Label htmlFor="location">
            <Input
              type="text"
              id="location"
              name="location"
              value={locationJob}
              onChange={(e) => setLocationJob(e.target.value)}
            />
            <Span content="Ubicacion" />
          </Label>
          <div>{/* lista de estados, municipios */}</div>
        </div>
        <input
          type="submit"
          value="Buscar Vacante"
          className={`${styles.btnSearch} btn btn-primary`}
        />
        {/* <Link to="empleos" className={`${styles.btnSearch} btn btn-primary`}>
          Buscar Empleo
        </Link> */}
      </form>
    </div>
  );
};

export default Search;
