import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ src, alt }) => {
  return (
    <article className={styles.avatar}>
      <img src={src} alt={alt} />
      <br />
    </article>
  )
}

export default Avatar;