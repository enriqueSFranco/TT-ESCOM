import React from "react";
import API from "services/http.service"
import LayoutMenu from "Layout/LayoutMenu";
import { useGetAllRecruitrs } from "hooks/useGetAllRecucruiters";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import toast, { Toaster } from "react-hot-toast";


const PageValidateRecruiter = () => {
  const listRecruiter = useGetAllRecruitrs();

  // TODO: pasar a un servicio
  const validateRecruiter = async (idRecruiter) => {
    const payload = { is_active: true };
    
    const { data } = await API.put(
      `${process.env.REACT_APP_URL_VALIDATE_RECRUITER}${idRecruiter}/`,
      payload
    );
    toast.success(data.message);
    console.log(data);
  };

  if (!listRecruiter) return null;

  return (
    <LayoutMenu>
      <section>
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
              <TableRow key={crypto.randomUUID()}>
                <TableCell component="th" scope="row">
                  {recruiter?.t301_id_recruiter}
                </TableCell>
                <TableCell>
                  {recruiter?.t301_name} {recruiter?.t301_last_name}
                </TableCell>
                <TableCell>{recruiter?.t300_id_company?.t300_name}</TableCell>
                <TableCell>
                  <button onClick={() => validateRecruiter(recruiter?.t301_id_recruiter)}>Crear credenciales</button>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Toaster position="top-right" />
      </section>
    </LayoutMenu>
  );
};

export default PageValidateRecruiter;
