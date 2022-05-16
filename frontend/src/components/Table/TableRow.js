import React, { useEffect, useState } from "react";
import { stringToColor } from "utils/stringToColor";
import { uuid } from "utils/uuid";
import { getSkill } from "services/catalogs";
import { changeApplyState, getStudentCertifications } from "services/students/index";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { BiDislike } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./Table.module.css";

const TableRow = ({ children, user, idSkills, index }) => {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState(null);
  const [certifications , setCertifications] = useState(false);

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

  useEffect(() => {
    getStudentCertifications(user?.t100_id_student?.t100_id_student)
      .then(response => {
        if (response.status === 200) {
          const { data } = response;
          setCertifications(data);
        } else {
          setCertifications(null);
        }
      })
      .catch(error => error);
  }, [user?.t100_id_student?.t100_id_student]);

  const onClickAcceptApply = (e) => {
    e.preventDefault();
    console.log(e);
    let now = new Date();
    let nextState = "";
    if (user?.c205_id_application_state?.c205_id_application_state == 1)
      nextState = "2";
    else if(user?.c205_id_application_state?.c205_id_application_state == 2)
      nextState = "4"
    let data ={
      c205_id_application_state: nextState,
      t201_date_application: now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate(),
    }

    changeApplyState(user?.t201_id_application,data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
    
  };

  const onClickDennyApply = (e) => {
    e.preventDefault();
    console.log(e);
    let now = new Date();
    let nextState = "";
    if (user?.c205_id_application_state?.c205_id_application_state == 1)
      nextState = "3";
    else if(user?.c205_id_application_state?.c205_id_application_state == 2)
      nextState = "5"
    let data ={
      c205_id_application_state: nextState,
      t201_date_application: now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate(),
    }

    changeApplyState(user?.t201_id_application,data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
    
  };

  if (!user) return null;
   console.log(certifications);

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
            {certifications && certifications?.map((certification)=>(
              <li>
              <Chip size="small" label={certification?.t119_certification} />
            </li>
            ))}
          </ul>
        </td>
        <td className={styles.td}>
          {user?.c205_id_application_state?.c205_id_application_state == 1 ? "Sin revisar" : user?.c205_id_application_state?.c205_description}
        </td>
        
          {user?.c205_id_application_state?.c205_id_application_state == 4 ? (
           <td className={styles.td}>
           </td>)
          : 
          (<td className={styles.td}>
            <button className={`btn ${styles.actionsBtn} ${styles.accept}` } onClick = {onClickAcceptApply}>
              <FaHandshake/>
            </button>
            <button className={`btn ${styles.actionsBtn} ${styles.dismiss}`} onClick = {onClickDennyApply}>
              <BiDislike />
            </button>
            </td>
          )}        
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
