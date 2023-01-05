import { useState } from "react";
import { useAuth } from "context/AuthContext";
import { modalityList } from "constants";
import {
  useGetAllJobs,
  useSearchJob,
  useRecommendationsVacancies,
} from "hooks";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import EmptyView from "./EmptyView";
import DetailsJob from "components/Modal/contentModals/DetailsJob";
import RecommendedVacanciesFilter from "components/Filter/FilterRecommendedVacancies";
import ExpFiltered from "components/Filter/ExpFiltered";
import { Checkbox, FormControlLabel } from "@mui/material";
import LayoutFilter from "Layout/LayoutFilter";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import {
  Aside,
  Content,
  Hero,
  Main,
  Cards,
  SummaryCard,
} from "./styled-components/HomeStyled";

const Home = () => {
  const { token } = useAuth();
  const [match, setMatch] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);
  const [selectedFilterExp, setSelectedFilterExp] = useState([
    { id: 1, checked: false, label: "Sin experiencia" },
    { id: 2, checked: false, label: "0 - 6 meses" },
    { id: 3, checked: false, label: "6 meses - 1 año" },
    { id: 4, checked: false, label: "1 - 2 años" },
    { id: 5, checked: false, label: " más de 2 años" },
  ]);
  const [recommended, setRecommended] = useState(false);
  const [vacantId, setVacantId] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [query, setQuery] = useState("");
  const [data] = useSearchJob(query);
  const { response, loading } = useGetAllJobs();
  const [filterData, setFilterData] = useState([]);
  const { response: recommender, isLoading } = useRecommendationsVacancies(
    token?.user?.id
  );

  // TODO: Hacer la funcionalidad de filtrado con checkbox
  function onFiltereChange(id) {
    const itemsExp = selectedFilterExp;
    const itemExpChecked = itemsExp.map((it) =>
      it.id === id ? { ...it, checked: !it.checked } : it
    );
    setSelectedFilterExp(itemExpChecked);
  }

  function handleChangeRecommended(e) {
    setRecommended(e.target.checked);
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
  }

  if (!response) return null;

  console.log(`Datos filtrados por exp:`, filterData);

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob
              handleSearch={handleSearch}
              query={query}
              setQuery={setQuery}
            />
          </LayoutHero>
        </Hero>
        <Aside>
          <ExpFiltered
            data={response}
            selectedFilterExp={selectedFilterExp}
            setFilterData={setFilterData}
            setResultsFound={setResultsFound}
            onFiltereChange={onFiltereChange}
          />
          <LayoutFilter title="💼 Modalidad de Empleo">
            {modalityList.map((item) => (
              <FormControlLabel
                key={`filter-checked-id-${item.id}`}
                label={item.label}
                control={<Checkbox />}
              />
            ))}
          </LayoutFilter>
          {token && (
            <LayoutFilter title="Vacantes Recomendadas">
              <RecommendedVacanciesFilter
                handleChangeRecommended={handleChangeRecommended}
              />
            </LayoutFilter>
          )}
        </Aside>
        <Content>
          <Cards id="cards">
            {resultsFound ? (
              <JobList
                jobs={isFiltered ? data?.results : filterData}
                recommendedJobs={recommender}
                loading={loading}
                isVacantRecommended={recommended}
                setMatch={setMatch}
                setVacantId={setVacantId}
              />
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
      </Main>
    </LayoutHome>
  );
};

export default Home;
