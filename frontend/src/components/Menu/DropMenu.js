import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useDetectClick } from "hooks/useDetectClick";
import AuthContext from "context/AuthContext";
import { IoMdMenu } from "react-icons/io";
import styles from "./Dropdown.module.css";
import DropMenuStudent from "./DropMenuStudent";

const DropMenu = () => {
  const { user } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);
  
  // if (user === null) return null;

  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger} onClick={onClick}>
        <IoMdMenu style={{ color: "#fff" }} />
      </button>
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
      >
        <ul className={styles.menuList}>
          {user ? (
            <DropMenuStudent student={user} />
          ) : (
            <>
              <li>
                <Link to="/alumno">Eres alumno ?</Link>
              </li>
              <li>
                <Link to="/reclutador">Eres reclutador ?</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default DropMenu;
