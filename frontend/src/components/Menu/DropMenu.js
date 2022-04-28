import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useDetectClick } from "hooks/useDetectClick";
import AuthContext from "context/AuthContext";
import DropMenuStudent from "./DropMenuStudent";
import DropMenuRecruiter from "./DropMenuRecruiter";
import { IoMdMenu } from "react-icons/io";
import styles from "./Dropdown.module.css";

const DropMenu = () => {
  const { user, token } = useContext(AuthContext);
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
            <>
              {token?.user?.user_type === "STUDENT" ? (
                <DropMenuStudent student={user} />
              ) : (
                <DropMenuRecruiter recruiter={token} />
              )}
            </>
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
