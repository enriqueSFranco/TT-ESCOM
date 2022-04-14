import { useRef } from 'react';
import { useDetectClick } from "../../hooks/useDetectClick";
import { Link } from 'react-router-dom';
import * as IoIcon from 'react-icons/io'
import styles from './Dropdown.module.css';

const DropMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);
  
  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger} onClick={onClick}>
        <IoIcon.IoMdMenu style={{color: "#fff"}} />
      </button>
      <nav ref={dropdownRef} className={`${styles.menu} ${isActive ? `${styles.active}` : ''}`}>
        <ul>
          <li><Link to="/alumno">Eres alumno ?</Link></li>
          <li><Link to="/reclutador">Eres reclutador ?</Link></li>
        </ul>
      </nav>
    </div>
  )
};

export default DropMenu;