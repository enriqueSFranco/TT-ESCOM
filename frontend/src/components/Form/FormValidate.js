import React from "react";
import Button from "components/Button/Button";
import { AiFillCheckCircle, AiOutlineSend } from "react-icons/ai";
import {
  GroupButtons,
  TextArea,
  WrapperForm,
  WrapperLegend,
} from "./styled-components/FormValidateCompanyStyled";

const FormValidateCompany = ({ typeAction, resolve, reject }) => {
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
            onClick={resolve}
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
            onClick={reject}
          />
        )}
      </GroupButtons>
    </WrapperForm>
  );
};

export default FormValidateCompany;
