import React, { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useFetch } from "hooks";
import LayoutHome from "Layout/LayoutHome";
import LayoutDashboard from "Layout/LayoutDashboard";
import HeaderWidgets from "pages/business/pageInit/HeaderWidgets";
import MainInfoVacant from "pages/business/pageInit/MainInfoVacant";
import ListJobsRecruiter from "components/Card/JobList/JobListRecruiter";
import { Content } from "../styled-components/ListVacantsAdmin";
import noResutls from 'assets/images/rs-not-results.png'
import {
  Aside,
  Container,
  WrapperNoResults,
  ContainerImage,
  Image,
  TitleImage,
} from "../styled-components/DashboardRecruiterStyled";

const { REACT_APP_URL_MANAGER_VALIDATE_VACANT } = process.env;

const NoResults = () => {
  return (
    <WrapperNoResults>
      <ContainerImage>
        <Image src={noResutls} alt="no-results" />
        <TitleImage>
          <h3>No hay vacantes por validar</h3>
        </TitleImage>
      </ContainerImage>
    </WrapperNoResults>
  );
};

const ListVacantsAdmin = () => {
  const [vacantId, setVacantId] = useState(null);
  const { token } = useAuth();
  const { data, error, loading } = useFetch(
    REACT_APP_URL_MANAGER_VALIDATE_VACANT
  );

  if (!data || !token) return null;

  return (
    <LayoutHome>
      <Content>
        <LayoutDashboard>
          <Aside>
            {data.length === 0 ? (
              <NoResults />
            ) : (
              <ListJobsRecruiter data={data} setVacantId={setVacantId} />
            )}
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
      </Content>
    </LayoutHome>
  );
};

export default ListVacantsAdmin;
