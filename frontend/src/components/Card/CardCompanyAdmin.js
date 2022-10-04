import React from 'react'
import GroupAvatars from 'components/Avatar/GroupAvatars'
import { BsFileEarmarkPost } from 'react-icons/bs'
import { AiFillFlag } from 'react-icons/ai'
import { CardBody, Container, ContainerTotal, GridLeft, GridRight, SubContainerTotal  } from './styled-components/CardCompanyAdmin'

export default function CardCompanyAdmin({nameCompany, nameRecruiter, stateCompany, logoCompany, totalPost, totalReports}) {
  return (
    <CardBody>
      <GridLeft>
        <h2 style={{fontSize: '1.2rem'}}>{nameCompany}</h2>
        <GroupAvatars users={null} />
        <span>Estado de la empresa</span>
        <Container>
          <ContainerTotal>
            <SubContainerTotal>
              <span>40</span>
              <BsFileEarmarkPost />
            </SubContainerTotal>
            <span>Vacantes Publicadas</span>
          </ContainerTotal>
          <ContainerTotal>
            <SubContainerTotal>
              <span>2</span>
              <AiFillFlag />
            </SubContainerTotal>
            <span>Reportes</span>
          </ContainerTotal>
        </Container>
      </GridLeft>
      <GridRight>
        <img src={logoCompany} alt={nameCompany} />
      </GridRight>
    </CardBody>
  )
}
