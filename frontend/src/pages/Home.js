import { useEffect, useCallback, useState, useRef } from "react";
import debounce from 'just-debounce-it'
import { useAuth } from "context/AuthContext";
import {
  useGetAllJobs,
  useNearScreen,
  useCustomDebounce,
  useRecommendationsVacancies,
} from "hooks";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import EmptyView from "./EmptyView";
import ButtonScrollTop from "components/Button/ButtonScrollTop";
import DetailsJob from "components/Modal/contentModals/DetailsJob";
import Filteres from "components/Filter/Filters";
import Loader from "components/Loader/Loader";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import {
  Content,
  Hero,
  Main,
  Cards,
  SummaryCard,
  WrapperFilters,
} from "./styled-components/HomeStyled";
import { searchJob } from "services";

const Home = () => {
  const { token } = useAuth();
  const [match, setMatch] = useState(null);
  const [queryAux, setQueryAux] = useState("")
  const [resultsFound, setResultsFound] = useState(true);
  const [selectedFilterExp, setSelectedFilterExp] = useState([
    { id: 1, checked: false, label: "Sin experiencia" },
    { id: 2, checked: false, label: "0 - 6 meses" },
    { id: 3, checked: false, label: "6 meses - 1 año" },
    { id: 4, checked: false, label: "1 - 2 años" },
    { id: 5, checked: false, label: " más de 2 años" },
  ]);
  const [selectedFilterModality, setSelectedFilterModality] = useState([
    { id: 1, checked: false, label: "Presencial" },
    { id: 2, checked: false, label: "Desde casa" },
    { id: 3, checked: false, label: "Híbrido" },
  ]);
  const [recommended, setRecommended] = useState(false);
  const [vacantId, setVacantId] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const { response: recommender, isLoading } = useRecommendationsVacancies(
    token?.user?.id
  );

  const externalRef = useRef(null);
  const { response, loading, loadingNextPage, setPage } = useGetAllJobs();
  const { isNearScreen } = useNearScreen({
    distance: "100px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  const debounce = useCustomDebounce(() => {
    handleNextPage();
  }, 400);

  const debouncehandleNextPage = useCallback(debounce, [debounce]);

  function onFiltereChange(id) {
    const itemsExp = selectedFilterExp;
    const itemExpChecked = itemsExp.map((it) =>
      it.id === id ? { ...it, checked: !it.checked } : it
    );
    setSelectedFilterExp(itemExpChecked);
    searchJob({
      "Texto a buscar": queryAux,
      Donde: "",
      "Modalidad de empleo": [],
      "Experiencia laboral": itemExpChecked,
    }).then(response => {
      setIsFiltered(true)
      setFilterData(response.result)
    })
    .catch(error => console.error(error))
  }

  function onFiltereModalityChange(id) {
    const itemsModality = selectedFilterModality;
    const itemExpChecked = itemsModality.map((it) =>
      it.id === id ? { ...it, checked: !it.checked } : it
    );
    setSelectedFilterModality(itemExpChecked);
    searchJob({
      "Texto a buscar": queryAux,
      Donde: "",
      "Modalidad de empleo": itemExpChecked,
      "Experiencia laboral": [],
    }).then(response => {
      setIsFiltered(true)
      setFilterData(response.result)
    })
    .catch(error => console.error(error))
  }

  function handleChangeRecommended(e) {
    setRecommended(e.target.checked);
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
  }

  useEffect(() => {
    if (isNearScreen) debouncehandleNextPage();
  }, [isNearScreen, debouncehandleNextPage]);

  if (!response) return null;

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob
              setQueryAux={setQueryAux}
              setFilterData={setFilterData}
              handleSearch={handleSearch}
            />
          </LayoutHero>
        </Hero>

        <WrapperFilters>
          <Filteres
            data={response}
            selectedFilterExp={selectedFilterExp}
            selectedFilterModality={selectedFilterModality}
            toggleRecommended={handleChangeRecommended}
            setFilterData={setFilterData}
            setResultsFound={setResultsFound}
            onFiltereChange={onFiltereChange}
            onFiltereModalityChange={onFiltereModalityChange}
          />
        </WrapperFilters>

        <Content>
          <Cards id="cards">
            {resultsFound ? (
              <>
                <JobList
                  jobs={isFiltered ? filterData : response}
                  isFiltered={isFiltered}
                  recommendedJobs={recommender}
                  loading={loading}
                  isVacantRecommended={recommended}
                  setMatch={setMatch}
                  setVacantId={setVacantId}
                  />
                  <div>{loadingNextPage && <Loader />}</div>
                  <div id="visor" ref={externalRef}></div>
              </>
            ) : (
              <EmptyView />
            )}
          </Cards>
          <SummaryCard>
            <DetailsJob
              vacantId={
                vacantId ||
                response[0]?.t200_id_vacant ||
                recommended[0]?.t200_id_vacant?.t200_id_vacant
              }
              recommended={recommended}
              match={match}
            />
          </SummaryCard>
        </Content>
        <ButtonScrollTop />
      </Main>
    </LayoutHome>
  );
};

export default Home;
