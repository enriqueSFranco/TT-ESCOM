import React from "react";
import { Link } from "react-router-dom";
import Menu from "components/Menu/Menu";
import LayoutWidget from "Layout/LayoutWidget";
import {FaHome, FaUsers, FaAddressCard} from 'react-icons/fa'

import { Wrapper } from "../styled-components/GlobalStyles";
import { List, ListItem } from "styled-components/CommonStyles";

const DetailsCompany = () => {
  return (
    <>
      <Menu />
      <Wrapper>
        <figure>
          <img src="" alt="" />
          <figcaption>
            <span>Nombre de empresa</span>
            <br />
            <span>Estado de la empresa</span>
          </figcaption>
        </figure>
        <nav>
          <List>
            <li><Link to='/'><FaHome /></Link></li>
            <li><Link to='/'><FaUsers /></Link></li>
            <li><Link to='/'><FaAddressCard /></Link></li>
          </List>
        </nav>
        <article>
          {/* Contenido principal */}
          <div>
            <p></p>
            <Link to="/">Link de la pagina web de la empresa</Link>
          </div>
          <div>
            <h3>Resumen de la actividad de la empresa en el sistema</h3>
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
          </div>
        </article>
      </Wrapper>
    </>
  );
};

export default DetailsCompany;
