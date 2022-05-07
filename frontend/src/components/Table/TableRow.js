import React, { useState } from "react";
import { stringToColor } from "utils/stringToColor";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { BiDislike } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./Table.module.css";

const TableRow = ({ children, user }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
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
            <Avatar sx={{ bgcolor: stringToColor("Carlos Enrique") }}>
              CE
            </Avatar>
            <h3 className={styles.nameUser}>Enrique Salinas Franco</h3>
          </div>
        </td>
        <td className={styles.td}>Ingenieria en Sistemas Computacionales</td>
        <td className={styles.td}>
          <ul className={styles.listItem}>
            <li>
              <Chip size="small" label="HTML" />
            </li>
            <li>
              <Chip size="small" label="CSS" />
            </li>
            <li>
              <Chip size="small" label="JavaScript" />
            </li>
            <li>
              <Chip size="small" label="Node js" />
            </li>
            <li>
              <Chip size="small" label="React js" />
            </li>
            <li>
              <Chip size="small" label="React Native" />
            </li>
            <li>
              <Chip size="small" label="Python" />
            </li>
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
      <tr>
        {open && (
          <td colSpan="7">
            {children}
          </td>
        )}
      </tr>
    </>
  );
};

export default TableRow;
