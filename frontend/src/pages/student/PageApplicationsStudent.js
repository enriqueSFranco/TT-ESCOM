import React from "react";
import { useFetch } from "hooks/useFetch";
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

function replaceBackSpace(string) {
  return string.replace(' ', '-').toLowerCase()
}

const PageApplicationsStudent = () => {
  const { token } = useAuth();
  const { data } = useFetch(
    `${process.env.REACT_APP_URL_CANDIDATE_APPLICATIONS_JOBS}${token?.user?.id}/`
  );

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000",
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
                  Estado de la postulacion
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={uuid()}>
                  <TableCell
                    sx={{ width: 150 }}
                    style={{ textAlign: "center" }}
                  >
                    {row?.t200_id_vacant?.t300_id_company?.t300_logo !==
                    null ? (
                      <img
                        src={row?.t200_id_vacant?.t300_id_company?.t300_logo}
                        alt={row?.t200_id_vacant?.t300_id_company}
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
                      nameJob={row?.t200_id_vacant?.t200_job}
                      salary={row?.t200_id_vacant?.t200_max_salary}
                      modality={row?.t200_id_vacant?.t200_home_ofice}
                      experience={
                        row?.t200_id_vacant?.c207_id_experience
                          ?.c207_description
                      }
                      dateApplication={row?.t201_date_application}
                      contract={row?.t200_id_vacant?.c208_id_contract?.c208_description}
                    />
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1rem", textAlign: "center" }}
                    sx={{ width: 350 }}
                  >{`${row?.t200_id_vacant?.c222_id_locality?.c222_municipality}, ${row?.t200_id_vacant?.c222_id_locality?.c222_state}, ${row?.t200_id_vacant?.t200_street}`}</TableCell>
                  <TableCell style={{ fontSize: "1rem" }} align="center">
                    <div className="tag_state">
                      <div className={`${replaceBackSpace(row?.c205_id_application_state?.c205_description)} circle_state`}></div>
                      {row?.c205_id_application_state?.c205_description}
                    </div>
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
