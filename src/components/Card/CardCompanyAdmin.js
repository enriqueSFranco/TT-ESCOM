import React from 'react'
import Chip from 'components/Chip/Chip'
import { BsFileEarmarkPost } from 'react-icons/bs'
import { AiFillFlag } from 'react-icons/ai'
import { CardBody, Container, ContainerTotal, GridLeft, GridRight, SubContainerTotal } from './styled-components/CardCompanyAdmin'

export default function CardCompanyAdmin ({ nameCompany, totalRecruiters, stateCompany, logoCompany, totalPost, totalReports, href }) {
  return (
    <CardBody to={href}>
      <GridLeft>
        <h2 style={{ fontSize: '1.2rem', margin: '0', color: '#727272' }}>{nameCompany}</h2>
        <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
          <Chip label={`Reclutadores registrados: ${totalRecruiters}`} bg='#FE9A00' color='#fff' />
          <Chip label={`Estado de la empresa: ${stateCompany}`} bg='#8BC34A' color='#fff' />
        </div>
        <Container>
          <ContainerTotal>
            <SubContainerTotal>
              <span style={{ color: '#004481' }}>{totalPost}</span>
              <BsFileEarmarkPost style={{ color: '#004481' }} />
            </SubContainerTotal>
            <span style={{ color: '#004481' }}>Vacantes Publicadas</span>
          </ContainerTotal>
          <ContainerTotal>
            <SubContainerTotal>
              <span style={{ color: '#F13465' }}>{totalReports ? totalReports : 0}</span>
              <AiFillFlag style={{ color: '#F13465' }} />
            </SubContainerTotal>
            <span style={{ color: '#F13465' }}>Reportes</span>
          </ContainerTotal>
        </Container>
      </GridLeft>
      <GridRight>
        <img src={logoCompany} alt={nameCompany} />
      </GridRight>
    </CardBody>
  )
}
