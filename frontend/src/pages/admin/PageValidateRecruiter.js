import React from "react";
import { useGetValidateAllRecruiters } from "hooks";
import LayoutAdmin from "Layout/LayoutAdmin";
import { WrapperValidateCompany } from "../styled-components/ValidateRecruiterStyled";
import CardRecruiter from "components/Card/CardRecruiter";

const PageValidateRecruiter = () => {
  const listRecruiter = useGetValidateAllRecruiters();

  if (!listRecruiter) return null;

  return (
    <>
      <LayoutAdmin>
        <div style={{width: '100%', textAlign: 'center'}}>
          <h2>Validar Reclutador</h2>
        </div>
        {/* TODO: Hacer la grid */}
        <WrapperValidateCompany>
          {
            listRecruiter.length > 0 ? (

              listRecruiter?.map((recruiter) => (
                <CardRecruiter
                  key={`list-item-recruiter-${recruiter?.t301_id_recruiter}`}
                  recruiterName={`${recruiter?.t301_name} ${recruiter?.t301_last_name} ${recruiter?.t301_second_surname}`}
                  companyName={recruiter?.t300_id_company?.t300_name}
                  recruiterEmail={recruiter?.t301_email}
                  recruiterPhone={recruiter?.t301_phonenumber}
                />
              ))
            ) : (
              <h2>Sin Reclutdores por validar</h2>
            )
          }
        </WrapperValidateCompany>
      </LayoutAdmin>
    </>
  );
};

export default PageValidateRecruiter;
