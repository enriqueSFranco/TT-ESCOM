import React, { useState } from "react";
import { useGetSkills, useAcademicHistorial } from "hooks";
import { uuid } from "utils";
import CustomAvatar from "components/Avatar/Avatar";
import Tooltip from "components/Tooltip/Tooltip";
import CustomChip from "components/Chip/Chip";
import { BiDislike } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { HiDocumentDownload } from 'react-icons/hi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./Table.module.css";

const TableRow = ({ children, it, index }) => {
  const { t100_id_student } = it;
  const { t100_name, t100_last_name, t100_profile_picture } = t100_id_student;
  const [open, setOpen] = useState(false);
  const { historial } = useAcademicHistorial(
    it.t100_id_student?.t100_id_student
  );
  const { skills } = useGetSkills(t100_id_student?.t100_id_student);

  const toggle = (index) => {
    if (open === index) return setOpen(null);
    return setOpen(index);
  };

  if (!historial) return null;

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
          <div style={{display: 'flex', alignItems: 'center', gap: '.8rem'}}>
            <CustomAvatar
              width="50px"
              height="50px"
              username={t100_name}
              picture={t100_profile_picture}
            />
            <span>{`${t100_name} ${t100_last_name}`}</span>
          </div>
        </td>
        <td className={styles.td}>
          {historial[0]?.c109_id_academic_state?.c109_description}
        </td>
        <td className={styles.td}>
          <ul className={styles.list}>
            {skills &&
              skills?.map((skill) => (
                <li key={uuid()} className={styles.listItem}>
                  <CustomChip
                    label={skill?.c116_id_skill?.c116_description}
                    bg="#fff"
                    color="#000"
                  />
                </li>
              ))}
          </ul>
        </td>
        <td className={styles.td}><span>{it?.c205_id_application_state?.c205_description}</span></td>
        <td className={styles.td}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tooltip title="Dar seguimiento">
              <button className={`btn ${styles.actionsBtn} ${styles.accept}`}>
                <FaHandshake />
              </button>
            </Tooltip>
            <Tooltip title="Rechazar candidato">
              <button className={`btn ${styles.actionsBtn} ${styles.dismiss}`}>
                <BiDislike />
              </button>
            </Tooltip>
            <Tooltip title="Descargar Currículo">
              <button className={`btn ${styles.actionsBtn} ${styles.dowloadCV}`}>
                <HiDocumentDownload />
              </button>
            </Tooltip>
          </div>
        </td>
      </tr>
      {open === index ? (
        <tr>
          <td colSpan="6">{children}</td>
        </tr>
      ) : null}
    </>
  );
};

export default TableRow;
