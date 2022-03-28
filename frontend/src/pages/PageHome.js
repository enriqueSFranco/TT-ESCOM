import { useState, useEffect } from "react";
import { helpHttp } from "../utils/helpHttp";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
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
    let options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    helpHttp()
      .GET("/api/Vacants/", options)
      .then((res) => {
        if (!res.err) {
          setDataList(res);
          setTotalJobs(res.length);
          setLoading(false) // desactivamos el modo "cargando"
        } else {
          setDataList(null);
        }
      })
      .catch((err) => console.log(err));
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

  return (
    <main className={homeStyles.home}>
      {/* barra de busqueda  */}
      <Search
        handleSearch={handleSearch}
        data={dataList}
      />
      {/* control de filtros */}
      <Filter />

      <article className={homeStyles.wrapperJobList}>
        <span className={homeStyles.totalJobs}>
          Total de vacantes: {totalJobs}
        </span>
        {/* renderizado de los empleos */}
        <CardJobList jobs={!isFiltered ? dataList : data} loading={loading} />
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
