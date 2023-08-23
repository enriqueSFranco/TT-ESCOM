import React, { useState } from "react";
import { useGetApplicationsCandidate } from "hooks";
import { uuid } from "utils/uuid";
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
import { Container } from "../styled-components/ApplicationStudentStyled";
import "./PageApplicationsStudent.css";
import Pagination from "components/Pagination/Pagination";

function replaceBackSpace(string) {
  return string.replace(" ", "-").toLowerCase();
}

const NoApplications = () => {
  return <div>No tienes ninguana postulacion</div>;
};

const PageApplicationsStudent = () => {
  const { token } = useAuth();
  const { applications } = useGetApplicationsCandidate(token?.user?.id)
  // const { data } = useFetch(
  //   `${process.env.REACT_APP_URL_CANDIDATE_APPLICATIONS_JOBS}${token?.user?.id}/`
  // );
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  if (!applications) return null;

  return (
    <LayoutHome>
      <Container>
        <h2 className="title">Mis postulaciones</h2>

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
                  Estado de la postulacion
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.length === 0 ? (
                <NoApplications />
              ) : (
                applications.map((it) => (
                  <TableRow key={uuid()}>
                    <TableCell
                      sx={{ width: 150 }}
                      style={{ textAlign: "center" }}
                    >
                      {it?.t200_id_vacant?.t300_id_company?.t300_logo !==
                      null ? (
                        <img
                          src={it?.t200_id_vacant?.t300_id_company?.t300_logo}
                          alt={it?.t200_id_vacant?.t300_id_company}
                          className="image"
                        />
                      ) : (
                        <IoIosBusiness className="noImage" />
                      )}
                    </TableCell>
                    <TableCell
                      sx={{ width: 450 }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <ApplicationJobStudent
                        nameJob={it?.t200_id_vacant?.t200_job}
                        salary={it?.t200_id_vacant?.t200_max_salary}
                        modality={it?.t200_id_vacant?.t200_home_ofice}
                        experience={
                          it?.t200_id_vacant?.c207_id_experience
                            ?.c207_description
                        }
                        dateApplication={it?.t201_date_application}
                        contract={
                          it?.t200_id_vacant?.c208_id_contract?.c208_description
                        }
                        description={it?.t200_id_vacant?.t200_description}
                      />
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1rem", textAlign: "center" }}
                      sx={{ width: 350 }}
                    >{`${it?.t200_id_vacant?.c222_id_locality?.c222_municipality}, ${it?.t200_id_vacant?.c222_id_locality?.c222_state}, ${it?.t200_id_vacant?.t200_street}`}</TableCell>
                    <TableCell style={{ fontSize: "1rem" }} align="center">
                      <div className="tag_state">
                        <div
                          className={`${replaceBackSpace(
                            it?.c205_id_application_state?.c205_description
                          )} circle_state`}
                        ></div>
                        {it?.c205_id_application_state?.c205_description}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {page}
          <Pagination total={applications.length} page={page} setPage={setPage} limit={limit} setLimit={setLimit} />
      </Container>
    </LayoutHome>
  );
};

export default PageApplicationsStudent;
