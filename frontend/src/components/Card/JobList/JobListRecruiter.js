import { useAuth } from "context/AuthContext";
import { useRecruiterJobs } from "hooks";
import CardJobPreviewRecruiter from "../CardJobPreviewRecruiter";

const styles = {
  WrapperList: {
    width: '90%',
    height: 'calc(100vh - 10rem)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflowY: 'auto',
  }
}

const ListJobsRecruiter = () => {
  const { token } = useAuth();
  const { data } = useRecruiterJobs({ idRcruiter: token?.user?.id });

  if (!data) return null;

  return (
    <section style={styles.WrapperList}>
      {data?.map((el) => (
        <CardJobPreviewRecruiter
          key={`${crypto.randomUUID()}`}
          info={el}
          typeUser={token.user.user_type}
        />
      ))}
    </section>
  );
};

export default ListJobsRecruiter