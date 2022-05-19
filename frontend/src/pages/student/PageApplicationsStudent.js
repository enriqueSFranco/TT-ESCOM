import React, { useContext } from 'react';
import { useFetch } from 'hooks/useFetch';
import AuthContext from 'context/AuthContext';
import { API_APPLICATIONS_JOB_STUDENT } from 'services/settings';
import ApplicationJobStudent from 'components/Card/ApplicationJob/ApplicationJobStudent';
import { uuid, } from 'utils/uuid';
import { formatDate } from 'utils/formatDate';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IoIosBusiness } from 'react-icons/io'
import styles from './PageApplicationsStudent.module.css';

const PageApplicationsStudent = () => {
  const { token } = useContext(AuthContext);
  const { data } = useFetch(`${API_APPLICATIONS_JOB_STUDENT}${token?.user?.user_id}/`);


  if (!data) return null;

  // console.log(formatDate("2022-04-04"))

  // TODO: ELIMINAR ELEMENTOS DUPLICADOS DE LA LISTA DE VACANTES EN RELACION AL CAMPO T200_JOB
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Mis Postulaciones</h1>
      <TableContainer>
        <Table sx={{ width: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Empresa</TableCell>
              <TableCell>Detalles de la vacante</TableCell>
              <TableCell align='center' >Fecha de postulacion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data?.map(row => (
                <TableRow key={uuid()}>
                <TableCell sx={{width: 400}}>
                  {
                    row?.t200_id_vacant?.t300_id_company?.t300_logo !== null ? 
                      <img src={row?.t200_id_vacant?.t300_id_company?.t300_logo} alt={row?.t200_id_vacant?.t300_id_company} className={styles.image} />
                    : <IoIosBusiness className={styles.noImage} />
                  }
                  
                </TableCell>
                <TableCell align='center' component="th" scope="row">
                  <ApplicationJobStudent 
                    nameJob={row?.t200_id_vacant?.t200_job} 
                    salary={row?.t200_id_vacant?.t200_max_salary}
                    modality={row?.t200_id_vacant?.t200_home_ofice}
                    nameBusisness={row?.t200_id_vacant?.t300_id_company?.t300_name}
                    workingHours={`${row?.t200_id_vacant?.t200_check_time}am-${row?.t200_id_vacant?.t200_closing_hour}pm`}
                  />
                </TableCell>
                <TableCell align='center'>{formatDate(row?.t201_date_application)}</TableCell>
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
