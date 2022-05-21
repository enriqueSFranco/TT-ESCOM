import { useState, useEffect, useMemo } from "react";
import { getAllJobs, getVacantsFilter } from "services/jobs";
import Search from "components/Search/Search";
import FilterProfile from "components/Filter/FilterProfile";
import FilterCompany from "components/Filter/FilterCompany";
import JobList from "components/Card/JobList/JobList";
import FilterHomeOffice from "components/Filter/FilterHomeOffice";
import Deck from "components/Deck/Deck";
// import Footer from "components/Footer/Footer";
import homeStyles from "./PageHome.module.css";

const Home = () => {
  const [jobs, setJobs] = useState(null);
  let maxLenPage = useMemo(
    () => Math.ceil(jobs?.count / jobs?.page_size),
    [jobs?.count, jobs?.page_size]
  );
  // const [_, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]); // lista de vacantes filtrada
  const [isFiltered, setIsFiltered] = useState(false); // bandera para saber si la informacion se tiene que filtrar
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllJobs(page)
      .then((response) => {
        if (response.status === 200) {
          setJobs(response.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [page]);

  const filteredData = (value) => {
    if (value !== "") {
      getVacantsFilter({
        job: value,
        company_name: "",
        c206_id_profile: "",
        id_modality: "",
      }).then(response => {
        console.log(response)
        setData(response.data.result);
      })
      .catch(error => console.log(error))
      // const filteredData = jobs?.result.filter((el) => {
      //   let regex = new RegExp(`${value}`, "gi");
      //   return el?.t200_job.match(regex);
      // });
      // console.log(filteredData)
      // setTotalJobs(filteredData.length);
    }
  };

  const handleSearch = (value) => {
    filteredData(value);
    setIsFiltered(value !== "" ? true : false);
  };

  const handleFilterHomeOffice = useMemo(() => (e) => {
    const { value } = e.target;
    if (value === "") {
      setIsFiltered(false);
      setData(jobs?.result);
    } else if (value !== "") {
      setIsFiltered(true);
      getVacantsFilter({
        job: "",
        company_name: "",
        c206_id_profile: "",
        id_modality: value,
      }).then((response) => {
        const { data } = response;
        setData(data?.result);
      });
    }
  }, [jobs?.result]);

  /**
   * Filtra los empleos por empresa
   * @return devuleve los empleos publicados por una empresa seleccionada
   **/
  const handleFilterBusiness = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value === "allBusiness") {
      setIsFiltered(false);
      setData(jobs?.result);
      // setTotalJobs(jobs?.result.length);
    } else if (value !== "") {
      setIsFiltered(true);
      getVacantsFilter({
        job: "",
        company_name: value,
        c206_id_profile: "",
        id_modality: "",
      })
        .then((response) => {
          if (response.status === 200) {
            const { data } = response;
            console.log(data?.result);
            setData(data?.result);
            // setTotalJobs(data?.result.length);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleFilterProfile = (e) => {
    const { value } = e.target;
    if (value === "allProfile") {
      setIsFiltered(false);
      setData(jobs);
      // setTotalJobs(jobs.length);
    } else if (value !== "") {
      setIsFiltered(true);
      getVacantsFilter({
        job: "",
        company_name: "",
        c206_id_profile: "",
        id_modality: value,
      }).then((response) => {
        const { data } = response;
        setData(data?.result);
        // setTotalJobs(data?.result.length);
      });
    }
  };

  if (!jobs) return null;

  return (
    <main className={homeStyles.home}>
      <Search handleSearch={handleSearch} />

      <div className={homeStyles.filteredControls}>
        <span className={homeStyles.textFilter}>Filtros</span>
        <FilterProfile onChange={handleFilterProfile} />
        <FilterCompany onChange={handleFilterBusiness} />
        <FilterHomeOffice onChange={handleFilterHomeOffice} />
      </div>

      <section className={homeStyles.wrapperJobList}>
        <JobList
          jobs={isFiltered ? data : jobs?.result}
          loading={loading}
          page={page}
          setPage={setPage}
          maxLenPage={maxLenPage}
        />
      </section>

      <section className={`${homeStyles.wrapperDeck}`}>
        <h2>Comunicados Recientes</h2>
        <Deck />
      </section>

      {/* pie de pagina */}
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
