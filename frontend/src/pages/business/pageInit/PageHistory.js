import { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useRecruiterJobs } from "hooks";
import LayoutDashboard from "Layout/LayoutDashboard";
import LayoutHome from "Layout/LayoutHome";
// import FormUpdateJob from "components/Form/postJob/FormUpdateJob";
import ListJobsRecruiter from "components/Card/JobList/JobListRecruiter";
import HeaderWidgets from "./HeaderWidgets";
import FormSearchJob from "components/Menu/FormSearchJobRecruiter";
import MainInfoVacant from "./MainInfoVacant";
import {
  Aside,
  Container,
} from "../../styled-components/DashboardRecruiterStyled";

const PageHistory = () => {
  const [vacantId, setVacantId] = useState(null)
  const { token } = useAuth();
  const { data:listVacants } = useRecruiterJobs({ idRcruiter: token?.user?.id });
  const { data } = useRecruiterJobs({ idRcruiter: token?.user?.id });

  // let { t200_id_vacant } = useParams();

  // const [isDeletedJob, setIsDeletedJob] = useState({});

  // const handleInitialContent = () => setInitialContent(false);

  // const handleBlur = (e) => {
  //   e.target.classList.remove(styles.inputSearchFocus);
  //   e.target.classList.add(styles.inputSearch);
  //   setTimeout(() => {
  //     setFilterData(null);
  //   }, 200);
  // };

  // const handleSearchVacant = (e) => {
  //   const { value } = e.target;
  //   setSearch(value);
  //   if (value !== "") {
  //     // si hay algo en la caja de texto
  //     const newData = listJobs?.filter((job) => {
  //       const regex = new RegExp(`^${value}`, "gi");
  //       return job?.t200_job.match(regex);
  //     });
  //     setFilterData(newData);
  //   }
  // };

  // const handleDeleteJob = async () => {
  //   const response = await deleteJob(job[0]?.t200_id_vacant);

  //   if (response.status === 200)
  //     setIsDeletedJob({ succes: response.status, message: response.message });
  //   else
  //     setIsDeletedJob({ success: response.status, message: response.message });
  // };

  // function handleClick(e, vacantId) {
  //   e.preventDefault()
  //   setVacantId(vacantId)
  //   console.log(`vacante ${vacantId}`)
  // }

  if (!data || !listVacants) return null

  return (
    <LayoutHome>
      <LayoutDashboard top="4rem">
        <Aside>
          <FormSearchJob />
          {/* LISTA DE VACANTES */}
          <ListJobsRecruiter data={listVacants} setVacantId={setVacantId} />
        </Aside>
        <Container>
          {/* Widgets */}
          <HeaderWidgets defaultId={data[0]?.t200_id_vacant} vacantId={vacantId} typeUser={token?.user?.user_type} />
          {/* Informacion de la vacante y observaciones */}
          <MainInfoVacant defaultId={data[0]?.t200_id_vacant} vacantId={vacantId} />
        </Container>
      </LayoutDashboard>
    </LayoutHome>
  );
};

export default PageHistory;