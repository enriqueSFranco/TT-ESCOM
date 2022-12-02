import React from "react";
import { useFetch } from "hooks/useFetch";
import { uuid } from "utils/uuid";
import { formatDate } from "utils/formatDate";
import { useAuth } from "context/AuthContext";
import ApplicationJobStudent from "components/Card/ApplicationJob/ApplicationJobStudent";
import LayoutHome from "Layout/LayoutHome";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  tableCellClasses,
} from "@mui/material";
import { IoIosBusiness } from "react-icons/io";
import { Container } from '../styled-components/ApplicationStudentStyled'
import styles from "./PageApplicationsStudent.module.css";

const PageApplicationsStudent = () => {
  const { token } = useAuth();
  const { data } = useFetch(
    `${process.env.REACT_APP_URL_CANDIDATE_APPLICATIONS_JOBS}${token?.user?.id}/`
  );

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: 'hsla(217, 100%, 50%, 1)',
      background:'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
      background: '-moz-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
      background: '-webkit-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
      filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 )',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  if (!data) return null;

  console.log(data);

  return (
    <LayoutHome>
      <Container>
        <TableContainer component={Paper}>
          <Table stickyHeader sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ fontSize: "1.2rem" }} align="center">
                  Empresa
                </StyledTableCell>
                <StyledTableCell style={{ fontSize: "1.2rem" }} align="center">
                  Resumen de la vacante
                </StyledTableCell>
                <StyledTableCell style={{ fontSize: "1.2rem" }} align="center">
                  Ubicacion de la vacante
                </StyledTableCell>
                <StyledTableCell style={{ fontSize: "1.2rem" }} align="center">
                  Fecha de postulacion
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={uuid()}>
                  <TableCell sx={{ width: 150 }} style={{ textAlign: "center" }}>
                    {row?.t200_id_vacant?.t300_id_company?.t300_logo !== null ? (
                      <img
                        src={row?.t200_id_vacant?.t300_id_company?.t300_logo}
                        alt={row?.t200_id_vacant?.t300_id_company}
                        className={styles.image}
                      />
                    ) : (
                      <IoIosBusiness className={styles.noImage} />
                    )}
                  </TableCell>
                  <TableCell
                    sx={{ width: 450 }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    <ApplicationJobStudent
                      nameJob={row?.t200_id_vacant?.t200_job}
                      salary={row?.t200_id_vacant?.t200_max_salary}
                      modality={row?.t200_id_vacant?.t200_home_ofice}
                      experience={
                        row?.t200_id_vacant?.c207_id_experience?.c207_description
                      }
                      dateApplication={row?.t201_date_application}
                      state={row?.c205_id_application_state?.c205_description}
                    />
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1rem", textAlign: 'center' }}
                    sx={{ width: 350 }}
                  >{`${row?.t200_id_vacant?.c222_id_locality?.c222_municipality}, ${row?.t200_id_vacant?.c222_id_locality?.c222_state}, ${row?.t200_id_vacant?.t200_street}`}</TableCell>
                  <TableCell style={{ fontSize: "1rem" }} align="center">
                    {formatDate(row?.t201_date_application)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </LayoutHome>
  );
};

export default PageApplicationsStudent;
