import React from "react";
import { useModal } from "hooks";
import Button from "components/Button/Button";
import ModalPortal from "components/Modal/ModalPortal";
import ModalPreviewCV from "components/Modal/ModalPreviewCV";
import { MdOutlineEmail } from "react-icons/md";
import {
  AiOutlineFileText,
  AiFillCheckCircle,
  AiFillDelete,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import {
  WrapperCard,
  Title,
  WrapperActions,
  MyButton,
} from "./styled-components/CardValidateCompanyStyled";

function formatPhone (value) {
  if (value === null) return;
  let parseValue = String(value);
  let number = parseValue.slice(0, 2);
  let firstPart = parseValue.slice(2, 6);
  let secondPart = parseValue.slice(6, 10);
  let newFormatPhone = `${number} ${firstPart} ${secondPart}`;
  return newFormatPhone;
}

const CardValidateCompany = ({
  nameCompany,
  busisnessName,
  rfc,
  document,
  nameRecruiter,
  emailRecruiter,
  phoneRecriter,
  openModalAccept,
  openModalReject,
}) => {
  const [isOpen, openModal, closeModal] = useModal(false)

  console.log(document)
  return (
    <>
      <WrapperCard>
        <Title fontSize="1.3" color="#125DFC">
          {nameCompany}
        </Title>
        <div>
          <div
            style={{
              width: "550px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "15px",
            }}
          >
            <MyButton onClick={openModal}>
              <AiOutlineFileText
                style={{ fontSize: "1.2rem", color: "#727176" }}
              />
              Evidencia de la empresa
            </MyButton>
            <span>Razón Social: {busisnessName}</span>
            <span>RFC: {rfc}</span>
          </div>
          <Title fontSize="1.1" color="#125DFC">
            Información del reclutador
          </Title>
          <div
            style={{
              width: "550px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span style={{ color: "#222" }}>
              <FaRegUserCircle
                style={{
                  fontSize: "1.2rem",
                  color: "#727176",
                  marginRight: "2px",
                }}
              />{" "}
              {nameRecruiter}
            </span>
            <a style={{ color: "#222" }} href={`mailto:${emailRecruiter}`}>
              <MdOutlineEmail
                style={{
                  fontSize: "1.2rem",
                  color: "#727176",
                  marginRight: "4px",
                }}
              />
              {emailRecruiter}
            </a>
            <a style={{ color: "#222" }} href={`tel:${phoneRecriter}`}>
              <AiOutlineWhatsApp
                style={{
                  fontSize: "1.2rem",
                  color: "#727176",
                  marginRight: "4px",
                }}
              />
              {formatPhone(phoneRecriter)}
            </a>
          </div>
        </div>
        <WrapperActions>
          {/* acciones */}
          <Button
            onClick={openModalAccept}
            height="2.5"
            width="12"
            bgColor="#30D46F"
            text="Aceptar Empresa"
            icon={<AiFillCheckCircle />}
          />
          <Button
            onClick={openModalReject}
            height="2.5"
            width="12"
            bgColor="#FF0000"
            text="Rechazar Empresa"
            icon={<AiFillDelete />}
          />
        </WrapperActions>
      </WrapperCard>
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minWidth="1000px">
        <h2>Documento</h2>
        <ModalPreviewCV fileUrl={document} />
      </ModalPortal>
    </>
  );
};

export default CardValidateCompany;
