import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Actions, Apply, Background, Bussines, Container, ContainerLeft, ContainerRight, Decription, Header, Logo, LocationJob, Image, PublicateDate, Reportjob, TitleJob } from './styled-components/JobOverview'

const JobOverview = () => {
  let { t200_id_vacant } = useParams();
  const { data } = useFetch(`${import.meta.env.VITE_API_VACANTS_URL}${t200_id_vacant}`, 'get');

  if (!data) return;

  const { t300_id_company: { t300_logo, t300_name }, t200_job, t200_description, t200_street, t200_publish_date } = data[0];

  return (
    <Container>
      <Header>
        <Background></Background>
        <Logo>
          <Image src={t300_logo} alt={t300_name} />
        </Logo>
        <ContainerLeft>
          <Reportjob></Reportjob>
          <PublicateDate>{t200_publish_date}</PublicateDate>
          <Actions>
            <Apply>Postularme</Apply>
          </Actions>
        </ContainerLeft>

        <ContainerRight>
          <TitleJob>{t200_job}</TitleJob>
          <Bussines>{t300_name}</Bussines>
          <LocationJob>{t200_street ? t200_street : 'Ubicacion no disponible'}</LocationJob>
        </ContainerRight>
      </Header>

      <Decription>
        {t200_description}
      </Decription>
    </Container>
  )
}

export default JobOverview