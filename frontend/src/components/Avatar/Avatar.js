import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt }) => {
  return (
    <article className='avatar'>
      <img src={src} alt={alt} />
      <br />
    </article>
  )
}

export default Avatar;