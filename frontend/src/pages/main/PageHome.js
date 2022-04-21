import { useState } from "react";
import { useJobs } from "hooks/useJobs";
import Search from "components/Search/Search";
import FilterProfile from "components/Filter/FilterProfile";
import FilterCompany from "components/Filter/FilterCompany";
import JobList from "components/Card/JobList/JobList";
import FilterHomeOffice from "components/Filter/FilterHomeOffice";
import Deck from "components/Deck/Deck";
import Footer from "components/Footer/Footer";
import homeStyles from "./PageHome.module.css";

const Home = () => {
  const {loading, jobs} = useJobs();
  const [data, setData] = useState([]); // lista de vacantes filtrada
  const [isFiltered, setIsFiltered] = useState(false); // bandera para saber si la informacion se tiene que filtrar

  const [isChecked, setIsChecked] = useState(false); // informacion filtrada
  const [totalJobs, setTotalJobs] = useState(0); // estado para el total de vacantes

  const filteredData = (value) => {
    if (value !== "") {
      const filteredData = jobs?.result.filter((el) => {
        let regex = new RegExp(`${value}`, "gi");
        return el?.t200_job.match(regex);
      });
      setData(filteredData);
      setTotalJobs(filteredData.length);
    }
  };

  const handleSearch = (value) => {
    filteredData(value);
    setIsFiltered(value !== "");
  };

  const handleFilterHomeOffice = e => {
    const { checked } = e.target;
    setIsChecked(checked);
    if (!isChecked) {
      // checkbox activado
      setIsFiltered(true);
      const newData = filterForHomeOffice(jobs);
      setData(newData);
      setTotalJobs(newData.length);
    } else if (isChecked) {
      // checkbox desactivado
      setIsFiltered(false);
      setData(jobs);
      setTotalJobs(jobs.length);
    }
  };

  /**
   * @param {Array} set conjunto de datos para filtrar por nombre de una empresa
   * @param {String} name nombre de la empresa
   * @return {Array} retorna el conjunto filtrado
   **/
  const filterForBusiness = (set, name) => set.filter(item => item?.t300_id_company?.t300_name === name)

  /**
   * @param {Array} set conjunto de datos para filtrar por modalidad de empleo
   * @return {Array} retorna el conjunto filtrado
   **/
  const filterForHomeOffice = set => set.filter(item => item?.t200_home_ofice === true)

  /**
   * Filtra los empleos por empresa
   * @return devuleve los empleos publicados por una empresa seleccionada
   **/
  const handleFilterBusiness = e => {
    const { value } = e.target;

    if (value === "allBusiness") {
      setIsFiltered(false);
      setData(jobs);
      setTotalJobs(jobs.length);
    } else if (value !== "") {
      setIsFiltered(true);
      const newData = filterForBusiness(jobs, value);
      setData(newData);
      setTotalJobs(newData.length);
    }
  };

  const filterForProfile = (set, value) => set.filter(item => item?.c206_id_profile?.c206_description === value);

  const handleFilterProfile = e => {
    const { value } = e.target;

    if (value === "allProfile") {
      setIsFiltered(false);
      setData(jobs);
      setTotalJobs(jobs.length);
    }else if (value !== "") {
      setIsFiltered(true);
      const newData = filterForProfile(jobs, value);
      setData(newData);
      setTotalJobs(newData.length);
    }
  };

  if (data.length < 0 || jobs.length < 0) return null;
  // console.log(jobs)
  return (
    <main className={homeStyles.home}>
      <Search handleSearch={handleSearch} data={jobs} />

      <div className={homeStyles.filteredControls}>
        <span className={homeStyles.textFilter}>Filtros</span>
        <FilterProfile onChange={handleFilterProfile} />
        <FilterCompany onChange={handleFilterBusiness} />
        <FilterHomeOffice value={isChecked} handleChecked={handleFilterHomeOffice} />
      </div>

      <section className={homeStyles.wrapperJobList}>
        <p className={homeStyles.totalJobs}>
          Total de vacantes: <em>{totalJobs}</em>
        </p>
        <JobList jobs={isFiltered ? data : jobs} loading={loading} />
      </section>

      <section className={`${homeStyles.wrapperDeck}`}>
        <h2>Comunicados Recientes</h2>
        <Deck />
      </section>

      {/* pie de pagina */}
      <Footer />
    </main>
  );
};

export default Home;
