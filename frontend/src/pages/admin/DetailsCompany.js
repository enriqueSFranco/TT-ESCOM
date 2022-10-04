import React from 'react'
import { Link } from 'react-router-dom'
import Menu from 'components/Menu/Menu'
import { Wrapper } from '../styled-components/GlobalStyles'

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
        <article>
          {/* Contenido principal */}
          <div>
            <p></p>
            <Link to='/'>Link de la pagina web de la empresa</Link>
          </div>
          <div>
            <h3>Resumen de la actividad de la empresa en el sistema</h3>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </article>
      </Wrapper>
    </>
  )
}

export default DetailsCompany