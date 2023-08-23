import React, { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { getJobsForRecruiter } from "services/recruiter";
import { uuid } from "utils/uuid";
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MdDelete, MdModeEdit } from "react-icons/md";
import styles from "./PageMyJobs.module.css";

const PageMyJobs = () => {
  const { token } = useContext(AuthContext);
  const [listJobs, setListJobs] = useState([]);

  useEffect(() => {
    getJobsForRecruiter(token?.user?.user_id)
      .then((response) => {
        if (response.status === 200) setListJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token?.user?.user_id]);

  return (
    <div className={styles.wrapper}>
      <TableContainer>
        <Table sx={{ width: 1000 }} aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre de la vacante</TableCell>
              <TableCell>Perfil</TableCell>
              <TableCell align="center">Fecha de publicacion</TableCell>
              <TableCell align="center">Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listJobs?.map((jobs) => (
              <TableRow key={uuid()}>
                <TableCell component="th" scope="row">
                  <ApplicationJob
                    nameJob={jobs?.t200_job}
                    salary={jobs?.t200_max_salary}
                    modality={jobs?.t200_home_ofice}
                    nameBusisness={jobs?.t300_id_company?.t300_name}
                    workingHours={`${jobs?.t200_check_time}am-${jobs?.t200_closing_hour}pm`}
                  />
                </TableCell>
                <TableCell>{jobs?.c206_id_profile?.c206_description}</TableCell>
                <TableCell align="center">{jobs?.t200_publish_date}</TableCell>
                <TableCell>
                  <button type="button" className={styles.btnDelete}>
                    <MdDelete />
                    <span>Eliminar vacante</span>
                  </button>
                  <button type="button" className={styles.btnEdit}>
                    <MdModeEdit />
                    <span>Editar vacante</span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

PageMyJobs.propTypes = {};

export default PageMyJobs;
