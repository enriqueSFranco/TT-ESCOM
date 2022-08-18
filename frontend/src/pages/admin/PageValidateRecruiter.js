import React from "react";
import axios from "axios";
import { useGetAllRecruitrs } from "hooks/useGetAllRecucruiters";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import toast, {Toaster} from "react-hot-toast";

const wrapper = {
  position: "relative",
  top: "4rem",
};

const PageValidateRecruiter = () => {
  const listRecruiter = useGetAllRecruitrs();

  // obtenemos la lista de reclutadores
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(process.env.REACT_APP_URL_VALIDATE_RECRUITER, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     setListRecruiter(data);
  //   };

  //   fetchData();
  // }, []);

  // enviamos la validacion para dar de alta a un reclutador
  const validateRecruiter = async (idRecruiter) => {
    const payload = {
      is_active: "true",
    };
    // console.log(idRecruiter)
    const { data } = await axios.put(`/api/ValidateRecruiter/${idRecruiter}/`, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    toast.success(data.message);
    console.log(data);
  }

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
            {/* {listRecruiter?.map((recruiter) => (
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
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>

      <Toaster position="top-right" />
    </section>
  );
};

export default PageValidateRecruiter;
