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

  function handleClick(e, vacantId) {
    e.preventDefault()
    setVacantId(vacantId)
    console.log(`vacante ${vacantId}`)
  }

  return (
    <section style={styles.WrapperList}>
      {data?.map((el) => (
        <CardJobPreviewRecruiter
          key={`${crypto.randomUUID()}`}
          info={el}
          typeUser={token.user.user_type}
          onClick={(e) => handleClick(e, el?.t200_id_vacant)}
        />
      ))}
    </section>
  );
};

export default memo(ListJobsRecruiter)