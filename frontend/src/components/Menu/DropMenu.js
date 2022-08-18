import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useDetectClick } from "hooks/useDetectClick";
import { stringToColor } from "utils/generateColors";
import AuthContext from "context/AuthContext";
import Avatar from "@mui/material/Avatar";
import DropMenuStudent from "./MenuCandidate";
import DropMenuRecruiter from "./DropMenuRecruiter";
import { IoMdMenu } from "react-icons/io";
import styles from "./Dropdown.module.css";

const DropMenu = () => {
  const { user, token } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);
  
  return (
    <div className={styles.dropdown}>
      {
        token?.user?.user_type === "RECRUITER" ? (
            <button className={`${styles.avatarRecruiter}`} onClick={onClick}>
              <IoMdMenu style={{ color: "#fff" }} />
              <Avatar sx={{ width: 34, height: 34, bgcolor: stringToColor(token?.user?.first_name) }}>{(token?.user?.first_name).slice(0,1)}</Avatar>
            </button>
        ) : (
          <button className={styles.trigger} onClick={onClick}>
            <IoMdMenu style={{ color: "#fff" }} />
          </button>
        )
      }
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
      >
        <ul className={styles.menuList}>
          {user ? (
            <>
              {token?.user?.user_type === "STUDENT" ? (
                <DropMenuStudent student={token} />
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
