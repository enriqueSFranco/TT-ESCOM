import React from "react";
import { useAuth } from "context/AuthContext";
import { useRecommendationsVacancies } from "hooks";
import Loader from "components/Loader/Loader";

const RecommendedJobs = () => {
  const { token } = useAuth();
  const { response, isLoading } = useRecommendationsVacancies(token?.user?.id);
  console.log(
    "🚀 ~ file: RecommendedJobs.js:8 ~ RecommendedJobs ~ response",
    response
  );

  if (!response) return null;

  return (
    <>
      {response.length === 0 ? (
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
        </>
      )}
    </>
  );
};

export default RecommendedJobs;
