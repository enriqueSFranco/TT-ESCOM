import React from "react";
import { useModal } from "hooks";
import { numberFormat, formatDate } from "utils";
import Chip from "components/Chip/Chip";
import ModalPortal from "components/Modal/ModalPortal";
import { TiLocation } from "react-icons/ti";
import { FaBrain } from "react-icons/fa";
import "./ApplicationJobStudent.css";

// function createMarkup() {
//   return { __html: isVacantRecommended ? job.t200_id_vacant?.t200_description : job.t200_description };
// }

const ApplicationJobStudent = ({
  nameJob,
  salary,
  modality,
  dateApplication,
  experience,
  contract,
  description,
}) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <>
      <article className={`wrapper`}>
        <div>
          <h2 className="nameJob">{nameJob}</h2>
          <span>Contratacion: {contract}</span>
        </div>
        <div className="tags">
          <Chip
            label={`$${numberFormat(salary).slice(4)}`}
            bg="var(--bg-color_1)"
            color="var(--color_1)"
          />
          <Chip
            label={modality ? "Presencial" : "Remoto"}
            bg="var(--bg-color_2)"
            color="var(--color_2)"
            icon={<TiLocation style={{ fontSize: "1rem" }} />}
          />
          <Chip
            label={`${experience}`}
            bg="var(--bg-color_3)"
            color="var(--color_3)"
            icon={<FaBrain style={{ fontSize: "1rem" }} />}
          />
        </div>
        <div className="flex_container">
          <span className="applicationDate">
            Fecha de postulacion: {formatDate(dateApplication)}
          </span>
          <span className="viewJob" onClick={openModal}>Ver detalles</span>
        </div>
      </article>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <header>
          <h2>{nameJob}</h2>
        </header>
        <section>
          <article>
            {description}
          </article>
        </section>
      </ModalPortal>
    </>
  );
};

export default ApplicationJobStudent;
