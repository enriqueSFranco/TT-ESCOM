import { useState, useEffect } from "react";
import { $ajax } from "../utils/$ajax";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import CardJobList from "../components/Card/CardJobList";
import Deck from "../components/Deck/Deck";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [, setSearch] = useState("");
  const [dataList, setDataList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [data, setData] = useState(null);

  /**
   * Funcion para filtrar las vacantes por nombre
   * @param {String} value
   **/
  const filteredData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (lowerCaseValue === "") {
      setData(dataList);
    } else {
      const filteredData = dataList.filter((el) => {
        if (el?.t200_job.toLowerCase().includes(value.toLowerCase())) {
          return el;
        }
      });
      setData(filteredData);
    }
  };

  useEffect(() => {
    let options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    }
    $ajax().GET("/api/Vacants/", options)
      .then(res => {
        if (!res.err) {
          setDataList(res);
        } else {
          setDataList(null);
        }
      })
      .catch(err => console.log(err))
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
    <>
      {/* barra de busqueda  */}
      <Search handleSearch={handleSearch} />
      {/* control de filtros */}
      <Filter />
      {/* renderizado de los empleos */}
      <CardJobList jobs={!isFiltered ? dataList : data} />
      {/* comunicados */}
      <Deck />
      {/* pie de pagina */}
      <Footer />
    </>
  );
};

export default Home;
