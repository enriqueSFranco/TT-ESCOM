import React, { useEffect, useState } from "react";
import axios from "axios";
import { stringToColor } from "utils/stringToColor";
import { uuid } from "utils/uuid";
import Avatar from "@mui/material/Avatar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from "./PageApplications.module.css"

function PageApplications() {

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const getApplicationsUsers = async () => {
      const response = await axios.get("/api/Applications/");
      if (response.status === 200) setListUsers(response.data);
    };
    getApplicationsUsers();
  }, []);

  console.log(listUsers)

  return (
    <section>
      <h1>Solicitudes de aspirantes</h1>
      <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="right">Carrera</TableCell>
            <TableCell align="right">Conocimientos Tecnicos</TableCell>
            <TableCell align="right">Experiencia</TableCell>
            <TableCell align="right">Certificaciones</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <div className={styles.wrapperBody}>
            {
              listUsers?.map(el => (
                <TableRow key={uuid()}>
                  <TableCell component="th" scope="row">
                    <div className={styles.nameUser}>
                      <Avatar sx={{bgcolor: stringToColor(el?.t100_id_student?.t100_name)}}>{(el?.t100_id_student?.t100_name).slice(0,1)}</Avatar>
                      {el?.t100_id_student?.t100_last_name}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </div>
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  )
}

export default PageApplications;