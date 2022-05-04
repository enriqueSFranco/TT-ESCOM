import React from 'react';
import styles from "./Deck.module.css";

const Comunicado = ({ src, alt }) => {

  return (
    <>
      <div className={`${styles.item}`}>
        <img src={src} alt={"comunicado_" + alt} />
        <div className={styles.itemFooter}>
          <h1>
            Titulo del comunicado
          </h1>
        </div>
      </div>
    </>
  )
}

export default Comunicado;
