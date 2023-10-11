import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCompany } from "hooks";
import Menu from "components/Menu/Menu";
import LayoutWidget from "Layout/LayoutWidget";
import Chip from "components/Chip/Chip"
import { FaHome, FaUsers, FaAddressCard } from "react-icons/fa";
import { FcApproval, FcList } from 'react-icons/fc'
import { HiLink } from "react-icons/hi";
import { RiFileUserFill, RiUser2Fill } from 'react-icons/ri'
import { ContainerLogoCompany, FooterLogoCompany, NavList, Banner, MainContainer, Title } from "../styled-components/DetailsCompanyStyled";
import { Wrapper } from "../styled-components/GlobalStyles";
import { List, ListItem } from "styled-components/CommonStyles";

const DetailsCompany = () => {
  const { t300_id_company } = useParams();
  const [company] = useGetCompany({ idCompany: t300_id_company });
  const [showSection, setShowSection] = useState({
    home: true,
    users: false,
    verify: false,
  });

  const showHome = () =>
    setShowSection({
      home: true,
      users: false,
      verify: false,
    });

  const showUsers = () =>
    setShowSection({
      home: false,
      users: true,
      verify: false,
    });

  const showVerify = () =>
    setShowSection({
      home: false,
      users: false,
      verify: true,
    });

  if (!company) return null;

  console.log(company)

  return (
    <>
      <Menu />
      <Wrapper>
        <Banner>
          <ContainerLogoCompany>
            <img src={company[0]?.t300_logo} alt={company[0]?.t300_name} />
            <FooterLogoCompany>
              <span>{company[0]?.t300_name}</span>
              <br />
              <div style={{ width: 'fit-content', margin: '0 auto' }}>
                <Chip label={`Estado de la empresa: ${company[0]?.c302_id_status?.c302_description}`} bg="blue" color="#fff" />
              </div>
            </FooterLogoCompany>
          </ContainerLogoCompany>
        </Banner>
        <NavList>
          <List className="list">
            <ListItem className="list-item">
              <FaHome style={{ fontSize: "2rem" }} onClick={showHome} />
            </ListItem>
            <ListItem className="list-item">
              <FaUsers style={{ fontSize: "2rem" }} onClick={showUsers} />
            </ListItem>
            <ListItem className="list-item">
              <FaAddressCard
                style={{ fontSize: "2rem" }}
                onClick={showVerify}
              />
            </ListItem>
          </List>
        </NavList>
        <MainContainer>
          <div style={{ width: "1000px" }}>
            <Title>Mision</Title>
            <p>{company[0]?.t300_mision}</p>
            <Title>Vision</Title>
            <p>{company[0]?.t300_vision}</p>
            <a href={company[0]?.t300_web_page}>
              <HiLink /> Sitio web
            </a>
          </div>
          <div>
            <Title>Resumen de la actividad de la empresa en el sistema</Title>
            {showSection.home && (
              <>
                <List>
                  <ListItem>
                    <LayoutWidget number={3} text="Reclutadores en espera" icon={<RiFileUserFill style={{ fontSize: '1.4rem', color: " #34495E" }} />} />
                  </ListItem>
                  <ListItem>
                    <LayoutWidget number={6} text="Vacantes por validar" icon={<FcList style={{ fontSize: '1.4rem' }} />} />
                  </ListItem>
                  <ListItem>
                    <LayoutWidget number={30} text="Vacantes publicadas" icon={<FcApproval style={{ fontSize: '1.4rem' }} />} />
                  </ListItem>
                  <ListItem>
                    <LayoutWidget number={3} text="Reclutadores Asociados" icon={<RiUser2Fill style={{ fontSize: '1.4rem', color: " #3498db " }} />} />
                  </ListItem>
                </List>
              </>
            )}
            {showSection.users && <h1>users</h1>}
            {showSection.verify && <h1>verify</h1>}
          </div>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default DetailsCompany;
