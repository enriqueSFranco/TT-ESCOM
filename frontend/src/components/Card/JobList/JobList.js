import { memo, useState } from "react";
// import "moment/locale/es-mx";
import CustomSkeleton from "components/Skeleton/Skeleton";
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
  loading,
  recommendedJobs,
  isVacantRecommended,
  setVacantId,
  setMatch,
}) => {
  const [cards, setCards] = useState({
    activeCard: jobs[0]?.t200_id_vacant,
    listCard: jobs,
  });

  if (jobs?.length < 0) return <ListEmptyJobs />;

  const handleClick = (e, vacantId, index) => {
    e.preventDefault();
    setVacantId(vacantId);
    setMatch(recommendedJobs[index]?.t500_percentage);
    isVacantRecommended
      ? setCards({
          ...cards,
          activeCard: cards.listCard[index]?.t200_id_vacant,
        })
      : setCards({
          ...cards,
          activeCard: cards.listCard[index]?.t200_id_vacant,
        });
  };

  if (!jobs) return null;

  if (isVacantRecommended) {
    return (
      <>
        <h2 className={styles.title}>Vacantes Recomendadas</h2>
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
      {loading ? (
        <CustomSkeleton type="feed" />
      ) : (
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
      )}
    </>
  );
};

export default memo(JobList);
