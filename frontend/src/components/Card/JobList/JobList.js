import { memo, useState } from "react";
import "moment/locale/es-mx";
import { useAuth } from "context/AuthContext";
import { useRecommendationsVacancies } from "hooks";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, recommended, setVacantId }) => {
  const { token } = useAuth();
  const { response, isLoading } = useRecommendationsVacancies(token?.user?.id,
  );
  const [cards, setCards] = useState({
    activeCard: jobs[0]?.t200_id_vacant,
    listCard: jobs,
  });

  if (jobs?.length < 0) return <ListEmptyJobs />;

  const handleClick = (e, vacantId, index) => {
    e.preventDefault();
    setVacantId(vacantId);
    setCards({ ...cards, activeCard: cards.listCard[index]?.t200_id_vacant });
  };

  if (!jobs) return null;
  console.log(response)

  return (
    <>
      {recommended ? (
        <div>
          <h3>vacantes recomendadas</h3>
        </div>
      ) : (
        jobs
          .filter((el) => el?.c204_id_vacant_status.c204_id_status === 2)
          .map((el, index) => (
            <CardJob
              key={`card-job-id_${crypto.randomUUID()}`}
              job={el}
              vacantId={el?.t200_id_vacant}
              cards={cards}
              onClick={(e) => handleClick(e, el?.t200_id_vacant, index)}
            />
          ))
      )}
    </>
  );
};

export default memo(JobList);
