import React, { useContext, useEffect, useState } from 'react';
import AuthContext from 'context/AuthContext';
import { getJobsForRecruiter } from 'services/recruiter';
import { uuid } from 'utils/uuid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './PageMyJobs.module.css';

const PageMyJobs = () => {
  const { token } = useContext(AuthContext);
  const [listJobs, setListJobs] = useState([]);

  useEffect(() => {
    getJobsForRecruiter(token?.user?.user_id)
      .then(response => {
        if (response.status === 200)
          setListJobs(response.data)
      })
      .catch(error => {
        console.log(error);
      })
    }, [token?.user?.user_id]);
    
  // if (recruiter.length < 0) return null;
  console.log(listJobs)

  return (
    <div className={styles.wrapper}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: "100%"}} aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre de la vacante</TableCell>
              <TableCell>Perfil</TableCell>
              <TableCell>Fecha de publicacion</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listJobs?.map(jobs => (
              <TableRow key={uuid()}>
                <TableCell component="th" scope="row">
                  {jobs?.t200_job}
                </TableCell>
                <TableCell>{jobs?.c206_id_profile?.c206_description}</TableCell>
                <TableCell>{jobs?.t200_publish_date}</TableCell>
                <TableCell><button>Eliminar</button> <button>Editar</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

PageMyJobs.propTypes = {};

export default PageMyJobs;