import { useState } from "react";
import Input from "../Input/Input";
import Label from "../Input/Label";
import Span from "../Input/Span";
import styles from "./Search.module.css";

const Search = ({ handleSearch, data, locationList }) => {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleFilterJob = (e) => {
    const query = e.target.value;
    setJob(query);

    const newFilter = data.filter((value) => {
      return value?.t200_job.toLowerCase().includes(query.toLowerCase());
    });

    query === "" ? setFilterData([]) : setFilterData(newFilter);
  };

  // const handleFilteredLocation = (e) => {
  //   const query = e.target;
  //   setLocation(query);

  //   const newFilter = data.filter((value) => {
  //     return value?.
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.trim() || !location.trim()) return;
    handleSearch(job);
  };

  return (
    <div className={`${styles.searchContainer}`}>
      <h1 className={styles.title}>
        Ayudandote a conseguir un <span>trabajo</span>
        <br />
        <span>y a vivir tus sueños.</span>
      </h1>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
      </form>
    </div>
  );
};

export default Search;
