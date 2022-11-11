import React from "react";
import { useGetValidateAllRecruiters, useModal } from "hooks";
import { validateRecruiter, rejectRecruiter } from "utils";
import LayoutAdmin from "Layout/LayoutAdmin";
import ModalPortal from "components/Modal/ModalPortal";
import FormValidateCompany from "components/Form/FormValidate";
import CardRecruiter from "components/Card/CardRecruiter";
import { WrapperValidateCompany } from "../styled-components/ValidateRecruiterStyled";

const PageValidateRecruiter = () => {
  const listRecruiter = useGetValidateAllRecruiters();
  const [isOpenAccept, openModalAccept, closeModalAccept] = useModal(false);
  const [isOpenReject, openModalReject, closeModalReject] = useModal(false);

  if (!listRecruiter) return null;

  return (
    <>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Validar Reclutador</h2>
      </div>
      <WrapperValidateCompany>
        {listRecruiter.length > 0 ? (
          listRecruiter?.map((recruiter) => (
            <CardRecruiter
              key={`list-item-recruiter-${recruiter?.t301_id_recruiter}`}
              recruiterName={`${recruiter?.t301_name} ${recruiter?.t301_last_name} ${recruiter?.t301_second_surname}`}
              companyName={recruiter?.t300_id_company?.t300_name}
              recruiterEmail={recruiter?.t301_email}
              recruiterPhone={recruiter?.t301_phonenumber}
              openModalAccept={openModalAccept}
              openModalReject={openModalReject}
            />
          ))
        ) : (
          <h2>Sin Reclutdores por validar</h2>
        )}
      </WrapperValidateCompany>
      <ModalPortal isOpen={isOpenAccept} closeModal={closeModalAccept}>
        <FormValidateCompany
          typeAction={1}
          resolve={() => validateRecruiter(listRecruiter[0]?.t301_id_recruiter)}
        />
      </ModalPortal>

      <ModalPortal isOpen={isOpenReject} closeModal={closeModalReject}>
        <FormValidateCompany
          typeAction={0}
          reject={() => rejectRecruiter(listRecruiter[0]?.t301_id_recruiter)}
        />
      </ModalPortal>
    </>
  );
};

export default PageValidateRecruiter;
