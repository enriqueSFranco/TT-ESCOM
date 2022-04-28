import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Termininos y condiciones</li>
        <li>Aviso de privacidad</li>
      </ul>
    </footer>
  )
}

export default Footer;