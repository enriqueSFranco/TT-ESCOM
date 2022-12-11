import React, { useState } from "react";
import { useGetSkills, useAcademicHistorial } from "hooks";
import { uuid } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import { BiDislike } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./Table.module.css";

const TableRow = ({ children, it, index }) => {
  const { t100_id_student } = it;
  const { t100_name, t100_last_name } = t100_id_student;
  const [open, setOpen] = useState(false);
  const { historial } = useAcademicHistorial(
    it.t100_id_student?.t100_id_student
  );
  const { skills } = useGetSkills(t100_id_student?.t100_id_student);

  const toggle = (index) => {
    if (open === index) return setOpen(null);
    return setOpen(index);
  };

  if (!historial) return null

  return (
    <>
      <tr key={uuid()}>
        <td className={styles.td} onClick={() => toggle(index)}>
          {open === index ? (
            <MdKeyboardArrowUp className={styles.arrow} />
          ) : (
            <MdKeyboardArrowDown className={styles.arrow} />
          )}
        </td>
        <td className={styles.td}>
          <div className={styles.wrapperAvatar}>
            <CustomAvatar
              width="70px"
              height="70px"
              username={`${t100_name.slice(0, 1)}${t100_last_name.slice(0, 1)}`}
            />
            <h3
              className={styles.nameUser}
            >{`${t100_name} ${t100_last_name}`}</h3>
          </div>
        </td>
        <td className={styles.td}>{historial[0]?.t104_academic_unit}</td>
        <td className={styles.td}>
          <ul className={styles.list}>
            {skills &&
              skills?.map((skill) => (
                <li key={uuid()} className={styles.listItem}>
                  <Chip label={skill?.c116_id_skill?.c116_description} bg="#EBF2FD" color="#2864ED" />
                </li>
              ))}
          </ul>
        </td>
        <td className={styles.td}>no</td>
        <td className={styles.td}>en revision</td>
        <td className={styles.td}>
          <button className={`btn ${styles.actionsBtn} ${styles.accept}`}>
            <FaHandshake />
          </button>
          <button className={`btn ${styles.actionsBtn} ${styles.dismiss}`}>
            <BiDislike />
          </button>
        </td>
      </tr>
      {open === index ? (
        <tr>
          <td colSpan="7">{children}</td>
        </tr>
      ) : null}
    </>
  );
};

export default TableRow;
