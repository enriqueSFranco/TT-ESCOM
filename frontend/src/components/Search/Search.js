import { useState } from "react";
import { uuid } from "utils/uuid";
import Loader from "components/Loader/Loader";
import Input from "components/Element/Input/Input";
import Label from "components/Element/Label/Label";
import Span from "components/Element/Span/Span";
import * as BiIcon from "react-icons/bi";
import styles from "./Search.module.css";

const Search = ({ handleSearch, data }) => {
  // const {search} = useLocation();
  const [queryJob, setQueryJob] = useState("");
  const [locationJob, setLocationJob] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState(data);
  // const query = new URLSearchParams(search)

  const handleFilterJob = (e) => {
    const query = e.target.value;
    setQueryJob(query); // controlamos el input

    const newFilter = data.filter(({ t200_job }) =>
      t200_job.toLowerCase().includes(query.toLowerCase())
    );

    query === "" ? setFilterData([]) : setFilterData(newFilter);
  };

  const handleClick = (job) => {
    setQueryJob(job);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!queryJob.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      handleSearch(queryJob);
    }, 3000);
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
          {/* TODO pasar los elementos de autocompletado a componentes. */}
          <Label htmlFor="job">
            <Input
              type="text"
              list="data"
              id="job"
              name="job"
              value={queryJob}
              onBlur={() => {
                setTimeout(() => {
                  setFilterData([]);
                }, 300);
              }}
              onChange={handleFilterJob}
            />
            <Span content="Buscar una vacante" />
          </Label>
          {filterData.length !== 0 && (
            <ul className={styles.dataResultsJobs}>
              {filterData.slice(0, 15).map((value) => (
                <li
                  key={uuid()}
                  value={value?.t200_job}
                  onClick={() => handleClick(value?.t200_job)}
                  className={styles.dataItem}
                >
                  {value?.t200_job}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* TODO pasar los elementos de autocompletado a componentes. */}
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
        <div className={styles.searchInput}>
          <button
            type="submit"
            disabled={isLoading}
            className={`${styles.btnSearch} btn btn-primary`}
          >
            {isLoading && <Loader />}
            {!isLoading && <BiIcon.BiSearch />}
            {isLoading && ""}
          </button>
        </div>
        {/* <Link to="empleos" className={`${styles.btnSearch} btn btn-primary`}>
          Buscar Empleo
        </Link> */}
      </form>
    </div>
  );
};

export default Search;
