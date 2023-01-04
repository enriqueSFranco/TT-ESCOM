import { memo, useState } from "react";
import "moment/locale/es-mx";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({
  jobs,
  recommendedJobs,
  isVacantRecommended,
  setVacantId,
}) => {
  const [cards, setCards] = useState({
    activeCard: isVacantRecommended ? recommendedJobs[0]?.t200_id_vacant?.t200_id_vacant : jobs[0]?.t200_id_vacant,
    listCard: isVacantRecommended ? recommendedJobs : jobs,
  });

  if (jobs?.length < 0) return <ListEmptyJobs />;

  const handleClick = (e, vacantId, index) => {
    e.preventDefault();
    setVacantId(vacantId);
    setCards({ ...cards, activeCard: cards.listCard[index]?.t200_id_vacant });
  };

  if (!jobs) return null;

  if (isVacantRecommended) {
    return (
      <>
        {recommendedJobs.map((el, index) => (
          <CardJob
            key={`card-job-id_${crypto.randomUUID()}`}
            job={el}
            isVacantRecommended={isVacantRecommended}
            time={new Date(el?.t200_id_vacant?.t200_creation_date).getTime()}
            vacantId={el?.t200_id_vacant}
            cards={cards}
            onClick={(e) => handleClick(e, el?.t200_id_vacant, index)}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {jobs
        .filter((el) => el?.c204_id_vacant_status.c204_id_status === 2)
        .map((el, index) => (
          <CardJob
            key={`card-job-id_${crypto.randomUUID()}`}
            job={el}
            isVacantRecommended={isVacantRecommended}
            time={new Date(el?.t200_creation_date).getTime()}
            vacantId={el?.t200_id_vacant}
            cards={cards}
            onClick={(e) => handleClick(e, el?.t200_id_vacant, index)}
          />
        ))}
    </>
  );
};

export default memo(JobList);
