import { useRef } from "react";
import { useDetectClick } from "hooks/useDetectClick";
import { USERS } from "types/users";
import DropMenuStudent from "./DropMenuCandidate";
import DropMenuRecruiter from "./DropMenuRecruiter";
import CustomAvatar from "components/Avatar/Avatar";
import styles from "./Dropdown.module.css";

const DropMenu = ({ typeuser, picture, name }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.dropdown}>
      {typeuser === USERS.recruiter ? (
        <button className={`${styles.avatarRecruiter}`} onClick={onClick}>
          <CustomAvatar />
        </button>
      ) : (
        <button className={styles.trigger} onClick={onClick}>
          <CustomAvatar picture={picture} username={name} width='50px' height='50px' />
        </button>
      )}
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
      >
        <ul className={styles.menuList}>
          {typeuser === USERS.candidate ? (
            <DropMenuStudent />
          ) : (
            <DropMenuRecruiter />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default DropMenu;
