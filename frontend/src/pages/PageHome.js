import { useState, useEffect } from "react";
import { getAllJobs } from "../services/jobs/getAllJobs";
import Search from "../components/Search/Search";
import FilterProfile from "../components/Filter/FilterProfile";
import FilterCompany from "../components/Filter/FilterCompany";
import Switch from "../components/Input/Switch";
import CardJobList from "../components/Card/CardJobList";
import Deck from "../components/Deck/Deck";
import Footer from "../components/Footer/Footer";
import homeStyles from "./PageHome.module.css";

const Home = () => {
  const [, setSearch] = useState(""); // estado de la busqueda
  const [dataList, setDataList] = useState([]); // lista de vacantes
  const [isFiltered, setIsFiltered] = useState(false); // boolean para saber si la informacion se tiene que filtrar
  const [data, setData] = useState(null); // lista filtrada
  const [loading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false); // informacion filtrada
  const [totalJobs, setTotalJobs] = useState(null); // estado para el total de vacantes

  /**
   * Funcion para filtrar las vacantes por nombre
   * @param {String} value
   **/
  const filteredData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    let count = 0;
    if (lowerCaseValue === "") {
      setData(dataList);
    } else {
      const filteredData = dataList.filter((el) => {
        if (el?.t200_job.toLowerCase().includes(value.toLowerCase())) {
          count = count + 1;
          setTotalJobs(count);
          return el;
        } else return false;
      });
      setData(filteredData);
    }
  };

  useEffect(() => {
    getAllJobs()
      .then(response => {
        setDataList(response);
        setTotalJobs(response.length);
        setLoading(false); // desactivamos el modo "cargando"
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    filteredData(value);
    /**
     * Si el valor introduciodo en el campo ded busqueda es diferente
     * a una cadena vacia, entonces filtramos los datos.
     **/
    setIsFiltered(value !== "");
  };

  /**
   * filtra los empleos que tengan la etiqueta t200_home_office === true
   **/
  const handleChecked = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      // mostramos las vacantes que son home office
      let newData = dataList.filter(data => {
        return data?.t200_home_ofice;
      });
      setTotalJobs(newData.length);
      setData(newData);
    } else { // mostramos todas las vacantes
      setDataList(dataList);
      setTotalJobs(dataList.length);
    }
  };

  return (
    <main className={homeStyles.home}>
      
      {/* barra de busqueda  */}
      <Search handleSearch={handleSearch} data={dataList} />
      
      {/* control de filtros */}
      <div className={homeStyles.filteredControls}>
        <span>Filtros</span>
        <FilterProfile />
        <FilterCompany />
        <Switch
          label="Remoto"
          name="homeOffice"
          id="HomoOffice"
          value={isChecked}
          onChange={handleChecked}
        />
      </div>

      {/* renderizado de los empleos */}
      <article className={homeStyles.wrapperJobList}>
        <span className={homeStyles.totalJobs}>
          Total de vacantes: {totalJobs}
        </span>
        <CardJobList jobs={!isFiltered && !isChecked ? dataList : data} loading={loading} />
      </article>
      

      {/* comunicados */}
      <article className={`${homeStyles.wrapperDeck}`}>
        <h2>Comunicados</h2>
        <Deck />
      </article>
      
      {/* pie de pagina */}
      <Footer />

    </main>
  );
};

export default Home;
