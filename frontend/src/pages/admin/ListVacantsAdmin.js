import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useFetch } from 'hooks'
import CardJobPreviewRecruiter from 'components/Card/CardJobPreviewRecruiter'
import FormSearchJob from 'components/Search/FormSearchJob'
import LayoutAdmin from 'Layout/LayoutAdmin'
import LayoutDashboard from 'Layout/LayoutDashboard'
import LayoutWidgetRecruiter from 'Layout/LayoutWidgetRecruiter'
import { Content } from '../styled-components/ListVacantsAdmin'
import { FaUsers } from 'react-icons/fa'
import {
  Aside,
  Container,
  Grid,
  WrapperListCardJobPreviewRecruiter,
  WrapperWidgets,
  ContentWidget,
  ContentWidgetCommon,
  TextNumber
} from "../styled-components/DashboardRecruiterStyled";

const { REACT_APP_URL_MANAGER_VALIDATE_VACANT } = process.env

const ListVacantsAdmin = () => {
  const { t200_id_vacant } = useParams()
  const { data, error, loading } = useFetch(REACT_APP_URL_MANAGER_VALIDATE_VACANT)
  const { data: dataVacantInfo, error: errorVacantInfo, loading: loadingVacantInfo } = useFetch(`${process.env.REACT_APP_URL_VACANT_VACANT_INFO}${t200_id_vacant || 1}/`)


  if (!data) return null

  return (
      <Content>
        <LayoutDashboard>
        <Aside>
          <div style={{
            height: '87vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem'
          }}>
            {data?.map((el) => (
              <CardJobPreviewRecruiter key={`card_job_${crypto.randomUUID()}`} url='lista-de-vacantes' info={el} />
            ))}
          </div>
        </Aside>
        <Container>
          <Grid>
            <Outlet />
          </Grid>
        </Container>
      </LayoutDashboard>
      </Content>
  )
}

export default ListVacantsAdmin