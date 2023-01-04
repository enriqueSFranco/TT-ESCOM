import { useState } from "react";
import { useAuth } from "context/AuthContext";
import {
  useGetAllJobs,
  useSearchJob,
  useRecommendationsVacancies,
} from "hooks";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
// import Loader from "components/Loader/Loader";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import Filters from "components/Filter/Filters";
import {
  Aside,
  Content,
  Hero,
  Main,
  Cards,
  SummaryCard,
} from "./styled-components/HomeStyled";
import DetailsJob from "components/Modal/contentModals/DetailsJob";
import RecommendedVacanciesFilter from "components/Filter/FilterRecommendedVacancies";
// import RecommendedJobs from "components/Card/JobList/RecommendedJobs";

const Home = () => {
  const { token } = useAuth();
  const [match, setMatch] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState({
    "Sin experiencia": false,
    "0 - 6 meses": false,
    "6 meses - 1 año": false,
    "1 - 2 años": false,
    "más de 2 años": false,
  });
  const [recommended, setRecommended] = useState(false);
  const [vacantId, setVacantId] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [query, setQuery] = useState("");
  const [data] = useSearchJob(query);
  const { response, loading } = useGetAllJobs();
  const { response: recommender, isLoading } = useRecommendationsVacancies(
    token?.user?.id
  );

  // TODO: Hacer la funcionalidad de filtrado con checkbox
  function onFiltereChange(e) {
    setSelectedFilter({
      ...selectedFilter,
      [e.target.value]: e.target.checked,
    });
  }

  function handleChangeRecommended(e) {
    setRecommended(e.target.checked);
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
  }

  if (!response) return null;

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
          <Filters
            // selectedFilter={selectedFilter}
            onFiltereChange={onFiltereChange}
          />
          {token && (
            <RecommendedVacanciesFilter
              handleChangeRecommended={handleChangeRecommended}
            />
          )}
        </Aside>
        <Content>
          <Cards id="cards">
            <JobList
              jobs={isFiltered ? data?.results : response}
              recommendedJobs={recommender}
              loading={loading}
              isVacantRecommended={recommended}
              setVacantId={setVacantId}
            />
            {/* {recommended ? (
              <RecommendedJobs
                jobs={recommender}
                isLoading={isLoading}
                isVacantRecommended={recommended}
                setVacantId={setVacantId}
                setMatch={setMatch}
              />
            ) : (
              <JobList
                jobs={isFiltered ? data?.results : response}
                loading={loading}
                isVacantRecommended={recommended}
                setVacantId={setVacantId}
              />
            )} */}
            {/* <div
              style={{
                width: "100%",
                display: "grid",
                placeContent: "center",
                backgroundColor: "transparent",
                margin: "1rem 0",
                padding: "0 0 2rem 0",
              }}
            >
              {loadingNextPage && <Loader />}
            </div> */}
          </Cards>
          <SummaryCard>
            <DetailsJob
              vacantId={vacantId || response[0]?.t200_id_vacant || recommended[0]?.t200_id_vacant?.t200_id_vacant}
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
