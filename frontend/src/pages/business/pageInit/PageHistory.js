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
  const [vacantId, setVacantId] = useState(null);
  const [isDataFilter, setIsDataFilter] = useState(false);
  const [filterData, setFilterData] = useState(null);
  const { token } = useAuth();
  const { data: listVacants } = useRecruiterJobs({
    idRcruiter: token?.user?.user_id,
  });
  const { data, loading } = useRecruiterJobs({ idRcruiter: token?.user?.id });

  // console.log(token);
  if (!data || !listVacants) return null;

  return (
    <LayoutHome>
      <LayoutDashboard top="4rem">
        <Aside>
          <FormSearchJob
            data={listVacants}
            setIsDataFilter={setIsDataFilter}
            setFilterData={setFilterData}
          />
          {/* LISTA DE VACANTES */}
          <ListJobsRecruiter data={isDataFilter ? filterData : listVacants} loading={loading} setVacantId={setVacantId} />
        </Aside>
        <Container>
          {/* Widgets */}
          <HeaderWidgets
            defaultId={data[0]?.t200_id_vacant}
            vacantId={vacantId}
            typeUser={token?.user?.user_type}
          />
          {/* Informacion de la vacante y observaciones */}
          <MainInfoVacant
            defaultId={data[0]?.t200_id_vacant}
            vacantId={vacantId}
          />
        </Container>
      </LayoutDashboard>
    </LayoutHome>
  );
};

export default PageHistory;
