import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDetectClick } from "hooks/useDetectClick";
import { USERS } from "types/users";
import DropMenuStudent from "./DropMenuCandidate";
import DropMenuRecruiter from "./DropMenuRecruiter";
import CustomAvatar from "components/Avatar/Avatar";
import { HiOutlineUserCircle, HiMenu } from "react-icons/hi";
import styles from "./Dropdown.module.css";
import DropMenuManager from "./DropMenuManager";

const DropMenu = ({ typeuser = "", picture = null, name = null }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  if (typeuser === USERS.recruiter) {
    return (
      <div className={styles.dropdown}>
        <button className={`${styles.avatarRecruiter}`} onClick={onClick}>
          <CustomAvatar />
        </button>
        <nav
          ref={dropdownRef}
          className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
        >
          <ul className={styles.menuList}>
            <DropMenuRecruiter />
          </ul>
        </nav>
      </div>
    );
  }

  if (typeuser === USERS.candidate) {
    return (
      <div className={styles.dropdown}>
        <button
          className={styles.trigger}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <CustomAvatar
            picture={picture}
            username={name}
            width="50px"
            height="50px"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
        >
          <ul className={styles.menuList}>
            <DropMenuStudent />
          </ul>
        </nav>
      </div>
    );
  }

  if (typeuser === USERS.manager) {
    return (
      <div className={styles.dropdown}>
        <button
          className={styles.trigger}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <CustomAvatar username={name} />
        </button>
        <nav
          ref={dropdownRef}
          className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
        >
          <ul className={styles.menuList}>
            <DropMenuManager />
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={onClick} className={styles.trigger}>
        <HiOutlineUserCircle style={{ color: "#1C8EFB", fontSize: "1.4rem" }} />
        <HiMenu style={{ color: "#1C8EFB", fontSize: "1.4rem" }} />
      </button>
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
      >
        <ul className={styles.menuList}>
          <li className={styles.menuItemStudent}>
            <Link to="/alumno" className={styles.menuLinkStudent}>
              {/* <BiCog /> */}
              ¿Buscas empleo?
            </Link>
          </li>
          <li className={styles.menuItemStudent}>
            <Link className={styles.menuLinkStudent} to="/reclutador">
              {/* <IoMdLogOut /> */}
              Publicar empleo
            </Link>
          </li>
          <li className={styles.menuItemStudent}>
            <Link className={styles.menuLinkStudent} to="/administrador">
              {/* <IoMdLogOut /> */}
              ¿Eres administrador?
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropMenu;
