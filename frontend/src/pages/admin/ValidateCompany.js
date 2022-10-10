import React from "react";
import { useValidateCompanies } from "hooks";
import LayoutAdmin from "Layout/LayoutAdmin";
import CardValidateCompany from "components/Card/CardValidateCompany";
import { WrapperValidateCompany } from "pages/styled-components/ValidateRecruiterStyled";

const ValidateCompany = () => {
  const [listCompanies] = useValidateCompanies();

  if (!listCompanies) return null

  console.log(listCompanies)

  return (
    <>
      <LayoutAdmin>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h2>Validar Empresas</h2>
        </div>
        <WrapperValidateCompany>
          {listCompanies.length > 0 ? (
            listCompanies?.map((company) => (
              <CardValidateCompany
                key={`list-item-company-${company?.t300_id_company}`}
                nameCompany={company?.t300_name}
                busisnessName={company?.t300_bussiness_name}
                document={company?.t300_validator_document}
                rfc={company?.t300_id_company?.t300_rfc}
                nameRecruiter={`${company?.t301_name} ${company?.t301_last_name} ${company?.t301_second_surname}`}
                emailRecruiter={company?.t301_email}
                phoneRecriter={company?.t301_phonenumber}
                idRecruiter={company?.t301_id_recruiter}
              />
            ))
          ) : (
            <h2>Sin Empresas por validar</h2>
          )}
        </WrapperValidateCompany>
      </LayoutAdmin>
    </>
  );
};

export default ValidateCompany;
