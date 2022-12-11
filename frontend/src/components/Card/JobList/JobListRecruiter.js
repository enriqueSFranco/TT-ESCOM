import { memo } from "react";
import { useAuth } from "context/AuthContext";
import CardJobPreviewRecruiter from "../CardJobPreviewRecruiter";

const styles = {
  WrapperList: {
    width: '90%',
    height: 'calc(100vh - 10rem)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflowY: 'auto',
    padding: '.5rem'
  }
}

const ListJobsRecruiter = ({ data, setVacantId }) => {
  const { token } = useAuth();

  function handleClick(vacantId) {
    setVacantId(vacantId)
  }


  return (
    <section style={styles.WrapperList}>
      {data?.map((el, index) => (
        <CardJobPreviewRecruiter
          key={`card-job-id-${crypto.randomUUID()}`}
          el={el}
          typeUser={token.user.user_type}
          onClick={() => handleClick(el?.t200_id_vacant)}
        />
      ))}
    </section>
  );
};

export default memo(ListJobsRecruiter)