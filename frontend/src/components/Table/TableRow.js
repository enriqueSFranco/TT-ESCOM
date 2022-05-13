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

const TableRow = ({ children, user, idSkills, index }) => {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState(null);

  const toggle = (index) => {
    console.log("index: ", index);
    if (open === index) return setOpen(null);
    return setOpen(index);
  };

  useEffect(() => {
    let isUnmountend = false;
    if (!isUnmountend)
      if (user) {
        if (idSkills !== undefined) {
          getSkill(idSkills)
            .then((response) => {
              setSkills(response);
              console.log(response);
            })
            .catch((error) => console.log(error));
        }
      }
    return () => {
      isUnmountend = false;
    };
  }, [idSkills, user]);

  if (!user) return null;
   console.log(user);

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
            <Avatar
              sx={{
                bgcolor: stringToColor(
                  user?.t100_id_student?.t100_name ?? ""
                ),
              }}
            >
              {`${(user.t100_id_student?.t100_name).slice(
                0,
                1
              )}${(user?.t100_id_student?.t100_last_name).slice(0, 1)}`}
            </Avatar>
            <h3
              className={styles.nameUser}
            >{`${user?.t100_id_student?.t100_name} ${user?.t100_id_student?.t100_last_name}`}</h3>
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
      {open === index ? (
        <tr>
          <td colSpan="7">{children}</td>
        </tr>
      ) : null}
    </>
  );
};

export default TableRow;
