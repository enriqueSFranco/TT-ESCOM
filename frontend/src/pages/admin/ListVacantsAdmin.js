import React from "react";
import { Outlet } from "react-router-dom";
import { useFetch } from "hooks";
import LayoutHome from "Layout/LayoutHome";
import CardJobPreviewRecruiter from "components/Card/CardJobPreviewRecruiter";
import LayoutDashboard from "Layout/LayoutDashboard";
import { Content } from "../styled-components/ListVacantsAdmin";
import {
  Aside,
  Container,
} from "../styled-components/DashboardRecruiterStyled";

const ContentGrid = {
  height:' 100%',
  width: '100%',
  padding: '0 .5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
}

const { REACT_APP_URL_MANAGER_VALIDATE_VACANT } = process.env;

const ListVacantsAdmin = () => {
  const { data, error, loading } = useFetch(
    REACT_APP_URL_MANAGER_VALIDATE_VACANT
  );

  if (!data) return null;

  return (
    <LayoutHome>
      <Content>
        <LayoutDashboard>
          <Aside>
            <div
              style={{
                height: "87vh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
              }}
            >
              {data?.map((el) => (
                <CardJobPreviewRecruiter
                  key={`card_job_${crypto.randomUUID()}`}
                  url="index/lista-de-vacantes"
                  info={el}
                />
              ))}
            </div>
          </Aside>
          <Container>
            <section style={ContentGrid}>
              <Outlet />
            </section>
          </Container>
        </LayoutDashboard>
      </Content>
    </LayoutHome>
  );
};

export default ListVacantsAdmin;
