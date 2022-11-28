import { useCallback, useEffect, useRef, useState } from "react";
import { useGetAllJobs, useNearScreen, useCustomDebounce, useSearchJob } from "hooks";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import Loader from "components/Loader/Loader";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import { Aside, Content, Hero, Main } from "./styled-components/HomeStyled";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import Filters from "components/Filter/Filters";
import ButtonScrollTop from "components/Button/ButtonScrollTop";

const Home = () => {
  // const [filteredData, setDataFiltered] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [query, setQuery] = useState("")
  const [data, isLoading] = useSearchJob(query)
  const externalRef = useRef(null);
  const { response, loading, loadingNextPage, setPage } = useGetAllJobs();
  const { isNearScreen } = useNearScreen({
    distance: "100px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  function handleNextPage() {
    setPage(prevPage => prevPage + 1)
  }
  
  const debounce = useCustomDebounce(() => {
    handleNextPage()
  }, 400)

  // function handleFilter(value) {
  //   let lowerValue = value.toLowerCase();

  //   if (lowerValue !== "") {
  //     const result = data?.results?.filter((el) =>
  //       el.t200_job.toLowerCase().includes(lowerValue)
  //       );
  //       console.log(result)
  //     setDataFiltered(result);
  //   }
  // }

  // TODO: Hacer la funcionalidad de filtrado con checkbox
  function onFiltereChange() {}

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
    // handleFilter(value);
  }

  const debouncehandleNextPage = useCallback(debounce
  , []);

  useEffect(() => {
    if (isNearScreen) debouncehandleNextPage();
  },[isNearScreen, debouncehandleNextPage]);
  
  if (!response) return null;
  
  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob handleSearch={handleSearch} query={query} setQuery={setQuery} />
          </LayoutHero>
        </Hero>
        <Aside>
          <Filters onFiltereChange={onFiltereChange} />
        </Aside>
        <Content>
          <JobList
            jobs={isFiltered ? data?.results : response}
            loading={loading}
          />
          <div style={{width: '100%',display: 'grid', placeContent: 'center', backgroundColor: 'transparent', margin: '1rem 0', padding: '0 0 2rem 0'}}>
            {loadingNextPage && <Loader />}
          </div>
          <div id="visor" ref={externalRef}></div>
        </Content>
        <ButtonScrollTop />
      </Main>
    </LayoutHome>
  );
};

export default Home;
