import React, { useEffect, useState } from "react";
import { stringToColor } from "utils/stringToColor";
import { uuid } from "utils/uuid";
import { getSkill } from "services/catalogs";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { BiDislike } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./Table.module.css";

const TableRow = ({ children, user }) => {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState(null);

  const handleClick = () => setOpen(!open);

  useEffect(() => {
    if (user) {
      let idUserSkill = user[0]?.t100_id_student?.t100_id_student;
      if (idUserSkill !== undefined) {
        getSkill(idUserSkill)
          .then((response) => {
            setSkills(response);
          })
          .catch((error) => console.log(error));
      }
    }
  }, [user]);

  if (!user) return null;
  console.log(user);

  return (
    <>
    {user.length > 0 ? (
      <>
      
        <tr>
          <td className={styles.td} onClick={handleClick}>
            {open ? (
              <MdKeyboardArrowDown className={styles.arrow} />
            ) : (
              <MdKeyboardArrowUp className={styles.arrow} />
            )}
          </td>
          <td className={styles.td}>
            <div className={styles.wrapperAvatar}>
              <Avatar
                sx={{
                  bgcolor: stringToColor(
                    user[0]?.t100_id_student?.t100_name ?? ""
                  ),
                }}
              >
                {
                  `${(user[0]?.t100_id_student?.t100_name).slice(
                    0,
                    1
                  )}${(user[0]?.t100_id_student?.t100_last_name).slice(0, 1)}`}
              </Avatar>
              <h3
                className={styles.nameUser}
              >{`${user[0]?.t100_id_student?.t100_name} ${user[0]?.t100_id_student?.t100_last_name}`}</h3>
            </div>
          </td>
          <td className={styles.td}>Ingenieria en Sistemas Computacionales</td>
          <td className={styles.td}>
            <ul className={styles.listItem}>
              {skills &&
                skills?.map((skill) => (
                  <li key={uuid()}>
                    <Chip
                      size="small"
                      label={skill?.c116_id_skill?.c116_description}
                    />
                  </li>
                ))}
            </ul>
          </td>
          <td className={styles.td}>no</td>
          <td className={styles.td}>
            <ul className={styles.listItem}>
              <li>
                <Chip size="small" label="Azure" />
              </li>
              <li>
                <Chip size="small" label="AWS" />
              </li>
              <li>
                <Chip size="small" label="Google Cloud" />
              </li>
            </ul>
          </td>
          <td className={styles.td}>
            <button className={`btn ${styles.actionsBtn} ${styles.accept}`}>
              <FaHandshake />
            </button>
            <button className={`btn ${styles.actionsBtn} ${styles.dismiss}`}>
              <BiDislike />
            </button>
          </td>
        </tr>
        <tr>{open && <td colSpan="7">{children}</td>}</tr>
      </>
    ) : (<tr><td colSpan="7"><h3 style={{textAlign: "center"}}>Sin candidatos para esta vacante</h3></td></tr>)}
    </>
  );
};

export default TableRow;
