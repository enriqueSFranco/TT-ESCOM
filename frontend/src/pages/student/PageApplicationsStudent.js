import React, { useContext } from 'react';
import { useFetch } from 'hooks/useFetch';
import { uuid, } from 'utils/uuid';
import { formatDate } from 'utils/formatDate';
import { API_APPLICATIONS_JOB_STUDENT } from 'services/settings';
import AuthContext from 'context/AuthContext';
import ApplicationJobStudent from 'components/Card/ApplicationJob/ApplicationJobStudent';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled, tableCellClasses} from '@mui/material';
import { IoIosBusiness } from 'react-icons/io'
import styles from './PageApplicationsStudent.module.css';

const PageApplicationsStudent = () => {
  const { token } = useContext(AuthContext);
  const { data } = useFetch(`${API_APPLICATIONS_JOB_STUDENT}${token?.user?.user_id}/`);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  if (!data) return null;

  // TODO: ELIMINAR ELEMENTOS DUPLICADOS DE LA LISTA DE VACANTES EN RELACION AL CAMPO T200_JOB
  return (
    <section className={`container ${styles.wrapper}`}>
      <h1 className={styles.title}>Mis Postulaciones</h1>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ width: "100%"}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Empresa</StyledTableCell>
              <StyledTableCell>Resumen de la vacante</StyledTableCell>
              <StyledTableCell>Ubicacion de la vacante</StyledTableCell>
              <StyledTableCell>Tipo de contratacion</StyledTableCell>
              <StyledTableCell align='center' >Fecha de postulacion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data?.map(row => (
                <TableRow key={uuid()}>
                <TableCell sx={{width: 150}}>
                  {
                    row?.t200_id_vacant?.t300_id_company?.t300_logo !== null ? 
                      <img src={row?.t200_id_vacant?.t300_id_company?.t300_logo} alt={row?.t200_id_vacant?.t300_id_company} className={styles.image} />
                    : <IoIosBusiness className={styles.noImage} />
                  }
                  
                </TableCell>
                <TableCell sx={{width: 450}} align='center' component="th" scope="row">
                  <ApplicationJobStudent 
                    nameJob={row?.t200_id_vacant?.t200_job} 
                    salary={row?.t200_id_vacant?.t200_max_salary}
                    modality={row?.t200_id_vacant?.t200_home_ofice}
                    experience={row?.t200_id_vacant?.c207_id_experience?.c207_description}
                    nameBusisness={row?.t200_id_vacant?.t300_id_company?.t300_name}
                    state={row?.c205_id_application_state?.c205_description}
                    workingHours={`${(row?.t200_id_vacant?.t200_check_time).slice(0,5)}am - ${(row?.t200_id_vacant?.t200_closing_hour).slice(0,5)}pm`}
                  />
                </TableCell>
                <TableCell sx={{width: 350}}>{`${row?.t200_id_vacant?.t200_municipality}, ${row?.t200_id_vacant?.t200_state}, ${row?.t200_id_vacant?.t200_street}`}</TableCell>
                <TableCell>{row?.t200_id_vacant?.c208_id_contract?.c208_description}</TableCell>
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
