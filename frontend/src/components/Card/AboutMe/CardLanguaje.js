import * as React from "react";
import styles from "./CardLanguaje.module.css";
import * as GiIcon from "react-icons/gi";
import * as FaIcon from "react-icons/fa";
import * as RiIcon from "react-icons/ri";

export default function CardLanguaje() {
  return (
    <div className={styles.compone}>
      <div className={styles.title}>Ingles</div>
      <div>
        <div className={styles.content}>
          <div>
            <GiIcon.GiRead className={styles.icon} />
            <span className={styles.text}>90%</span>
          </div>

          <div>
            <RiIcon.RiKakaoTalkLine className={styles.icon} />
            <span className={styles.text}> 90%</span>
          </div>

          <div>
            <FaIcon.FaAssistiveListeningSystems className={styles.icon} />
            <span className={styles.text}>90%</span>
          </div>

          <div>
            <FaIcon.FaUserEdit className={styles.icon} />
            <span className={styles.text}>90%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
