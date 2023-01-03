import React, { useState } from "react";
// import { useAuth } from "context/AuthContext";
// import { useRecommendationsVacancies } from "hooks";
import Loader from "components/Loader/Loader";
import CardJob from "../CardJob/CardJob";

const RecommendedJobs = ({jobs, isLoading, setVacantId}) => {
  // const { token } = useAuth();
  // const { response, isLoading } = useRecommendationsVacancies(token?.user?.id);
  const [cards, setCards] = useState({
    activeCard: jobs[0]?.t200_id_vacant,
    listCard: jobs,
  });

  const handleClick = (e, vacantId, index) => {
    e.preventDefault();
    setVacantId(vacantId);
    setCards({ ...cards, activeCard: cards.listCard[index]?.t200_id_vacant });
  };

  if (!jobs) return null

  return (
    <>
      {jobs.length === 0 ? (
        <>
          {isLoading ? (
            <Loader color={`blue`} width="100px" height={`100px`} />
          ) : (
            <div>No hay vacantes recomendadas para ti</div>
          )}
        </>
      ) : (
        <>
          {isLoading && (
            <Loader color={`blue`} width="100px" height={`100px`} />
          )}
          <p>Vacantes que te recomendamos para aplicar</p>
          {jobs.map((it, index) => (
            <CardJob
              key={`card-job-id_${crypto.randomUUID()}`}
              job={it}
              vacantId={it?.t200_id_vacant}
              cards={cards}
              onClick={(e) => handleClick(e, it?.t200_id_vacant, index)}
            />
          ))}
        </>
      )}
    </>
  );
};

export default RecommendedJobs;
