import React from "react"

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as IoIcon from 'react-icons/io';
import styles from './Dropdown.module.css';

const DropMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target))
        setIsActive(!isActive);
    };
    if (isActive)
      window.addEventListener('click', pageClickEvent);
    return () => window.removeEventListener('click', pageClickEvent);
  }, [isActive]);

  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger} onClick={onClick}>
        <IoIcon.IoMdMenu style={{color: "#fff"}} />
      </button>
      <nav ref={dropdownRef} className={`${styles.menu} ${isActive ? `${styles.active}` : `${styles.inactive}`}`}>
        <ul>
          <li><Link to="/alumno">Eres alumno ?</Link></li>
          <li><Link to="/reclutador">Eres reclutador ?</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default DropMenu;