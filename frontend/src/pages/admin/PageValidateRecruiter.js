import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { uuid } from "utils/uuid";

const wrapper = {
  position: "relative",
  top: "4rem",
};

const PageValidateRecruiter = () => {
  const [listRecruiter, setListRecruiter] = useState([]);

  // obtenemos la lista de reclutadores
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/ValidateRecruiter/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setListRecruiter(data);
    };

    fetchData();
  }, []);

  // enviamos la validacion para dar de alta a un reclutador
  const validateRecruiter = async (idRecruiter) => {
    const payload = {
      is_active: "true",
    };
    console.log(idRecruiter)
    const { data } = await axios.put(`/api/ValidateRecruiter/${idRecruiter}/`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    console.log(listRecruiter);
  }

  if (listRecruiter.length === 0) return null;

  return (
    <section style={wrapper}>
      <h2>VALIDAR RECLUTADORES</h2>
      <TableContainer>
        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRecruiter?.map((recruiter) => (
              <TableRow key={uuid()}>
                <TableCell component="th" scope="row">
                  {recruiter?.t301_id_recruiter}
                </TableCell>
                <TableCell>
                  {recruiter?.t301_name} {recruiter?.t301_last_name}
                </TableCell>
                <TableCell>{recruiter?.t300_id_company?.t300_name}</TableCell>
                <TableCell>
                  <button onClick={() => validateRecruiter(recruiter?.t301_id_recruiter)}>Crear credenciales</button>
                  {/* <button>Eliminar</button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default PageValidateRecruiter;
