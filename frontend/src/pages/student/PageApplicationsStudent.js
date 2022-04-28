import React, { useContext } from 'react';
import { useFetch } from 'hooks/useFetch';
import AuthContext from 'context/AuthContext';
import { API_APPLICATIONS_JOB_STUDENT } from 'services/settings';
import ApplicationJob from 'components/Card/ApplicationJob/ApplicationJob';
import { uuid } from 'utils/uuid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import styles from './PageApplicationsStudent.module.css';

const PageApplicationsStudent = () => {
  const { token } = useContext(AuthContext);
  const { data } = useFetch(`${API_APPLICATIONS_JOB_STUDENT}${token?.user?.user_id}/`); 

  if (!data) return null;

  console.log(data);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Mis Postulaciones</h1>
      <TableContainer>
        <Table sx={{ width: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Detalles de la vacante</TableCell>
              <TableCell align='center' >Fecha de postulacion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data?.map(row => (
              <TableRow key={uuid()}>
                <TableCell align='center' component="th" scope="row">
                  <ApplicationJob 
                    nameJob={row?.t200_id_vacant?.t200_job} 
                    salary={row?.t200_id_vacant?.t200_max_salary}
                    modality={row?.t200_id_vacant?.t200_home_ofice}
                    nameBusisness={row?.t200_id_vacant?.t300_id_company?.t300_name}
                    workingHours={`${row?.t200_id_vacant?.t200_check_time}am-${row?.t200_id_vacant?.t200_closing_hour}pm`}
                  />
                </TableCell>
                <TableCell align='center'>Abr/28/2022</TableCell>
              </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
};

export default PageApplicationsStudent;
