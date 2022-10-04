import React from "react";
import { useGetAllRecruitrs } from "hooks";
import API from "services/http.service"
import LayoutMenu from "Layout/LayoutMenu";
import Button from 'components/Button/Button'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MdEmail, MdPhone } from "react-icons/md"
import { ImUser } from 'react-icons/im'
import { HiCheckCircle } from 'react-icons/hi'
import { FcCancel } from 'react-icons/fc'
import { SectionTable } from '../styled-components/ValidateRecruiterStyled'

const PageValidateRecruiter = () => {
  const listRecruiter = useGetAllRecruitrs();

  const validateRecruiter = async () => {
    const payload = { is_active: true };
    
    const { data } = await API.put(
      `${process.env.REACT_APP_URL_VALIDATE_RECRUITER}`,
      payload
    );
    return data
  };

  if (!listRecruiter) return null;

  return (
    <LayoutMenu>
      <SectionTable>
        <h2>validar empresas</h2>
        <TableContainer>
          <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{textAlign: 'center'}}>id</TableCell>
                <TableCell style={{textAlign: 'center'}}>Empresa</TableCell>
                <TableCell>Responsable</TableCell>
                <TableCell>Opciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listRecruiter?.map((recruiter) => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell component="th" scope="row" style={{textAlign: 'center'}}>
                  {recruiter?.t301_id_recruiter}
                </TableCell>
                <TableCell style={{textAlign: 'center'}}>{recruiter?.t300_id_company?.t300_name}</TableCell>
                <TableCell style={{textAlign: 'left'}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                    <span><ImUser style={{marginRight: '.3rem'}} />{recruiter?.t301_name} {recruiter?.t301_last_name}</span>
                    <span><MdEmail style={{marginRight: '.3rem'}} />Email</span>
                    <span><MdPhone style={{marginRight: '.3rem'}} />Telefono</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div style={{display: 'flex', gap: '.5rem', height: '40px'}}>
                    <Button onClick={() => validateRecruiter(recruiter?.t301_id_recruiter)} bgColor='transparent' color="#000" text='Crear credenciales' icon={<HiCheckCircle style={{fontSize: '1.2rem', color: '#46AC5E'}} />} />
                    <Button text='Declinar PreRegistro' bgColor="transparent" color='#000' icon={<FcCancel style={{fontSize: '1.2rem'}} />} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionTable>
    </LayoutMenu>
  );
};

export default PageValidateRecruiter;
