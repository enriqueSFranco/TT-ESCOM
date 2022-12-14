import { memo } from "react";
import { useAuth } from "context/AuthContext";
import CardJobPreviewRecruiter from "../CardJobPreviewRecruiter";
import { WrapperList } from './JobListRecruiterStyled'

<<<<<<< HEAD
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
=======
const ListJobsRecruiter = ({ data, setVacantId }) => {
  const { token } = useAuth();
  const typeOfUser = token.user.user_type

  function handleClick(vacantId) {
    setVacantId(vacantId)
>>>>>>> feature/reclutador
  }

  return (
    <WrapperList typeOfUser={typeOfUser}>
      {data?.map((el) => (
        <CardJobPreviewRecruiter
<<<<<<< HEAD
          key={`${crypto.randomUUID()}`}
          info={el}
          typeUser={token.user.user_type}
          onClick={(e) => handleClick(e, el?.t200_id_vacant)}
=======
          key={`card-job-id-${crypto.randomUUID()}`}
          el={el}
          typeUser={typeOfUser}
          onClick={() => handleClick(el?.t200_id_vacant)}
>>>>>>> feature/reclutador
        />
      ))}
    </WrapperList>
  );
};

export default memo(ListJobsRecruiter)