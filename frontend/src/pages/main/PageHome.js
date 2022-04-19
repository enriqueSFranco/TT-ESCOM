import { useState, useEffect } from "react";
import { getAllJobs } from "services/jobs/index";
import Search from "components/Search/Search";
import FilterProfile from "components/Filter/FilterProfile";
import FilterCompany from "components/Filter/FilterCompany";
import JobList from "components/Card/JobList/JobList";
import FilterHomeOffice from "components/Filter/FilterHomeOffice";
import Deck from "components/Deck/Deck";
import Footer from "components/Footer/Footer";
import homeStyles from "./PageHome.module.css";

const Home = () => {
  const [dataList, setDataList] = useState([]); // lista de vacantes sin filtrar
  const [data, setData] = useState([]); // lista de vacantes filtrada
  const [isFiltered, setIsFiltered] = useState(false); // bandera para saber si la informacion se tiene que filtrar
  const [loading, setLoading] = useState(true); // bandera para saber si la peticion esta cargando

  const [isChecked, setIsChecked] = useState(false); // informacion filtrada
  const [totalJobs, setTotalJobs] = useState(0); // estado para el total de vacantes

  useEffect(() => {
    getAllJobs()
      .then(response => {
        setDataList(response.data.result);
        // setTotalJobs(response.data.result.length);
        setLoading(false);
      })
      .catch((error) => console.error(error));

    return () => null;
  }, []);

  const filteredData = (value) => {
    if (value !== "") {
      const filteredData = dataList.filter((el) => {
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
      const newData = filterForHomeOffice(dataList);
      setData(newData);
      setTotalJobs(newData.length);
    } else if (isChecked) {
      // checkbox desactivado
      setIsFiltered(false);
      setDataList(dataList);
      setTotalJobs(dataList.length);
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
      setData(dataList);
      setTotalJobs(dataList.length);
    } else if (value !== "") {
      setIsFiltered(true);
      const newData = filterForBusiness(dataList, value);
      setData(newData);
      setTotalJobs(newData.length);
    }
  };

  const filterForProfile = (set, value) => set.filter(item => item?.c206_id_profile?.c206_description === value);

  const handleFilterProfile = e => {
    const { value } = e.target;

    if (value === "allProfile") {
      setIsFiltered(false);
      setData(dataList);
      setTotalJobs(dataList.length);
    }else if (value !== "") {
      setIsFiltered(true);
      const newData = filterForProfile(dataList, value);
      setData(newData);
      setTotalJobs(newData.length);
    }
  };

  // if (!dataList.result && !data) return null;
  if (data.length < 0 || dataList.length < 0) return null;
  console.log(data, dataList)

  return (
    <main className={homeStyles.home}>
      <Search handleSearch={handleSearch} data={dataList} />

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
        <JobList jobs={isFiltered ? data : dataList} loading={loading} />
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
