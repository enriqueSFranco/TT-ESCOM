import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCompany } from "hooks";
import Menu from "components/Menu/Menu";
import LayoutWidget from "Layout/LayoutWidget";
import { FaHome, FaUsers, FaAddressCard } from "react-icons/fa";
import { HiLink } from "react-icons/hi"
import { Wrapper } from "../styled-components/GlobalStyles";
import { List, ListItem } from "styled-components/CommonStyles";

const DetailsCompany = () => {
  const {t300_id_company} = useParams() 
  const [company] = useGetCompany({idCompany: t300_id_company})
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

  if (!company) return null

    console.log(company)

  return (
    <>
      <Menu />
      <Wrapper>
        <header style={{backgroundColor: "blue", width: '100%', height: '250px'}}>
          <figure>
            <img src="" alt="" />
            <figcaption>
              <span>{company[0]?.t300_name}</span>
              <br />
              <span>Estado de la empresa</span>
            </figcaption>
          </figure>
        </header>
        <nav>
          <List>
            <li>
              <Link to={`/detalles-de-emperesa`}>
                <FaHome style={{ fontSize: "2rem" }} onClick={showHome} />
              </Link>
            </li>
            <li>
              <Link to="/detalles-de-emperesa">
                <FaUsers style={{ fontSize: "2rem" }} onClick={showUsers} />
              </Link>
            </li>
            <li>
              <Link to="/detalles-de-emperesa">
                <FaAddressCard
                  style={{ fontSize: "2rem" }}
                  onClick={showVerify}
                />
              </Link>
            </li>
          </List>
        </nav>
        <article>
          {/* Contenido principal */}
          <div style={{outline: "2px solid red", width: '1000px'}}>
            <h2>Mison</h2>
            <p>{company[0]?.t300_mision}</p>
            <h2>Vision</h2>
            <p>{company[0]?.t300_vision}</p>
            <a href={company[0]?.t300_web_page}><HiLink /> Sitio web</a>
          </div>
          <div>
            <h3>Resumen de la actividad de la empresa en el sistema</h3>
            {showSection.home && (
              <>
                <List>
                  <ListItem>
                    <LayoutWidget />
                  </ListItem>
                  <ListItem>
                    <LayoutWidget />
                  </ListItem>
                  <ListItem>
                    <LayoutWidget />
                  </ListItem>
                </List>
              </>
            )}
            {showSection.users && <h1>users</h1>}
            {showSection.verify && <h1>verify</h1>}
          </div>
        </article>
      </Wrapper>
    </>
  );
};

export default DetailsCompany;
