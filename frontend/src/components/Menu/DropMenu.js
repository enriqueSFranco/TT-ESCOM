import { useRef } from "react";
import { useDetectClick } from "hooks/useDetectClick";
import { USERS } from "types/users";
import DropMenuStudent from "./DropMenuCandidate";
import DropMenuRecruiter from "./DropMenuRecruiter";
import { IoMdMenu } from "react-icons/io";
import CustomAvatar from "components/Avatar/Avatar";
import styles from "./Dropdown.module.css";

const DropMenu = ({ typeuser }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.dropdown}>
      {typeuser === USERS.recruiter ? (
        <button className={`${styles.avatarRecruiter}`} onClick={onClick}>
          <CustomAvatar />
          <IoMdMenu style={{ color: "#000" }} />
        </button>
      ) : (
        <button className={styles.trigger} onClick={onClick}>
          <CustomAvatar />
          <IoMdMenu style={{ color: "#000" }} />
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
