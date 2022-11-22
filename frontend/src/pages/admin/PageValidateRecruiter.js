import React from "react";
import { useGetValidateAllRecruiters, useModal } from "hooks";
import { validateRecruiter, rejectRecruiter } from "utils";
import ModalPortal from "components/Modal/ModalPortal";
import FormValidateCompany from "components/Form/FormValidate";
import CardRecruiter from "components/Card/CardRecruiter";
import noRecruiters from 'assets/images/job-recruitment-website-5241930-4390947.png'
import { WrapperValidateCompany } from "../styled-components/ValidateRecruiterStyled";

const styles = {
  noRecruiters: {
    margin: '0 auto',
    filter: 'drop-shadow(0 0 0.75rem #4E649E)'
  },
  text: {
    textAlign: 'center',
    color: '#4E649E',
    fontWeight: '700',
  }
}

const PageValidateRecruiter = () => {
  const listRecruiter = useGetValidateAllRecruiters();
  const [isOpenAccept, openModalAccept, closeModalAccept] = useModal(false);
  const [isOpenReject, openModalReject, closeModalReject] = useModal(false);

  if (!listRecruiter) return null;

  return (
    <>
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
          <article style={styles.noRecruiters}>
            <img src={noRecruiters} alt="sin-reclutadores-por-validar" />
            <h2 style={styles.text}>No hay reclutdores por validar</h2>
          </article>
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
