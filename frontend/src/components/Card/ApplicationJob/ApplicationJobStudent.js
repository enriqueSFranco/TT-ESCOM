import React from "react";
import { useModal } from "hooks";
import { numberFormat, formatDate } from "utils";
import Chip from "components/Chip/Chip";
import ModalPortal from "components/Modal/ModalPortal";
import "./ApplicationJobStudent.css";

function createMarkup(isVacantRecommended, job) {
  return {
    __html: isVacantRecommended
      ? job.t200_id_vacant?.t200_description
      : job,
  };
}

const ApplicationJobStudent = ({
  nameJob,
  isVacantRecommended,
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
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
          <Chip
            label={modality ? "Presencial" : "Remoto"}
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
          <Chip
            label={`${experience}`}
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
        </div>
        <div className="flex_container">
          <span className="applicationDate">
            Fecha de postulacion: {formatDate(dateApplication)}
          </span>
          <span className="viewJob" onClick={openModal}>
            Ver detalles
          </span>
        </div>
      </article>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <header>
          <h2>{nameJob}</h2>
        </header>
        <section>
          <article dangerouslySetInnerHTML={createMarkup(false, description)} />
        </section>
      </ModalPortal>
    </>
  );
};

export default ApplicationJobStudent;
