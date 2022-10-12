import React from "react";
import API from "services/http.service";
import Button from "components/Button/Button";
import { AiFillCheckCircle, AiOutlineSend } from "react-icons/ai";
import {
  GroupButtons,
  TextArea,
  WrapperForm,
  WrapperLegend,
} from "./styled-components/FormValidateCompanyStyled";

const validateRecruiter = async (idRecruiter) => {
  const payload = { activate: true };
  const { REACT_APP_URL_MANAGER_VALIDATE_COMPANY } = process.env;

  const { data } = await API.put(
    `${REACT_APP_URL_MANAGER_VALIDATE_COMPANY}${idRecruiter}/`,
    payload
  );
  return data;
};

const rejectRecruiter = async (idRecruiter) => {
  const payload = { activate: false };

  const { data } = await API.put(
    `${process.env.REACT_APP_URL_MANAGER_VALIDATE_COMPANY}${idRecruiter}/`,
    payload
  );
  return data;
};

const FormValidateCompany = ({ typeAction }) => {
  return (
    <WrapperForm>
      {typeAction === 1 && (
        <WrapperLegend>
          <h2>Aceptar Registro</h2>
          <label>
            Al aceptar el registro se le crearán credenciales ya accesos al
            sistema al reclutador.
          </label>
          <span>¿Esta seguro de continuar?</span>
        </WrapperLegend>
      )}

      {typeAction === 0 && (
        <WrapperLegend>
          <h2>Rechazar Registro</h2>
          <label>
            Al declinar la empresa se le enviara un correo al reclutador de que
            se ha\r rechazado su solicitud.
          </label>
          <span>¿Esta seguro de continuar?</span>
          <TextArea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Puede agregar una observacion al reclutador"
          ></TextArea>
        </WrapperLegend>
      )}
      <GroupButtons>
        {typeAction === 1 && (
          <Button
            text="Aceptar Empresa"
            bgColor="#30D46F"
            color="#fff"
            width="10"
            height="2"
            icon={<AiFillCheckCircle />}
            onClick={validateRecruiter}
          />
        )}

        {typeAction === 0 && (
          <Button
            text="Enviar observacion"
            bgColor="#30D46F"
            color="#fff"
            width="11"
            height="2"
            icon={<AiOutlineSend />}
            onClick={rejectRecruiter}
          />
        )}
      </GroupButtons>
    </WrapperForm>
  );
};

export default FormValidateCompany;
