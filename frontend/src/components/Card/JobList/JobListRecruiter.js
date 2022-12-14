import { memo } from "react";
import { useAuth } from "context/AuthContext";
import CardJobPreviewRecruiter from "../CardJobPreviewRecruiter";
import { WrapperList } from './JobListRecruiterStyled'

const ListJobsRecruiter = ({ data, setVacantId }) => {
  const { token } = useAuth();
  const typeOfUser = token.user.user_type

  function handleClick(vacantId) {
    setVacantId(vacantId)
  }

  return (
    <WrapperList typeOfUser={typeOfUser}>
      {data?.map((el) => (
        <CardJobPreviewRecruiter
          key={`card-job-id-${crypto.randomUUID()}`}
          el={el}
          typeUser={typeOfUser}
          onClick={() => handleClick(el?.t200_id_vacant)}
        />
      ))}
    </WrapperList>
  );
};

export default memo(ListJobsRecruiter)