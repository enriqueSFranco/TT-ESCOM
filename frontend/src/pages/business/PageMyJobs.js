import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './PageDashboard.module.css';

const PageMyJobs = props => {
  // const [recruiter, setRecruiter] = useState([]);
  useEffect(() => {
    // getRecruiter("1")
    //   .then(response => {
    //     setRecruiter(response.data)
    //     if (response.status === 200) {

    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    }, []);
    
  // if (recruiter.length < 0) return null;
  // console.log(recruiter)

  return (
    <div className={styles.wrapper}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: "100%"}} aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre de la vacante</TableCell>
              <TableCell>Perfil</TableCell>
              <TableCell>Estatus</TableCell>
              <TableCell>Fecha de publicacion</TableCell>
              <TableCell>Postulados</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

PageMyJobs.propTypes = {};

export default PageMyJobs;