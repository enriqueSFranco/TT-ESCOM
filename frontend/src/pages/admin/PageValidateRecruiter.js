import React from "react";
import { useGetAllRecruitrs } from "hooks";
import LayoutMenu from "Layout/LayoutMenu";
import { WrapperValidateCompany } from '../styled-components/ValidateRecruiterStyled'
import CardValidateCompany from "components/Card/CardValidateCompany";

const PageValidateRecruiter = () => {
  const listRecruiter = useGetAllRecruitrs();

  if (!listRecruiter) return null;

  return (
    <LayoutMenu>
      <WrapperValidateCompany>
        <h2>validar empresas</h2>
        {listRecruiter?.map(recruiter => (
          <CardValidateCompany 
            key={`list-item-recruiter-${recruiter?.t301_id_recruiter}`} 
            nameCompany={recruiter?.t300_id_company?.t300_name}
            busisnessName={recruiter?.t300_id_company?.t300_bussiness_name}
            document={recruiter?.t300_id_company?.t300_validator_document}
            rfc={recruiter?.t300_id_company?.t300_rfc}
            nameRecruiter={`${recruiter?.t301_name} ${recruiter?.t301_last_name} ${recruiter?.t301_second_surname}`}
            emailRecruiter={recruiter?.t301_email}
            phoneRecriter={recruiter?.t301_phonenumber}
            idRecruiter={recruiter?.t301_id_recruiter}
          />
        ))}
      </WrapperValidateCompany>
    </LayoutMenu>
  );
};

export default PageValidateRecruiter;
