import React from 'react';
import styles from './Release.module.css';

const Release = ({ src, alt, nameBusiness }) => {

  return (
    <>
      <article className={styles.card}>
        <div className={styles.release}>
          <img src={src} alt={alt}/>
        </div>
        <div className={styles.releaseCompany}>
          <p>Publicado por: {nameBusiness}</p>
        </div>
      </article>
    </>
  )
}

export default Release;