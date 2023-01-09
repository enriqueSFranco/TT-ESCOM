import React from "react";
import { useValidateCompanies, useModal } from "hooks";
import { validateBusiness, rejectBusiness } from "utils";
import LayoutHome from "Layout/LayoutHome";
import CardValidateCompany from "components/Card/CardValidateCompany";
import ModalPortal from "components/Modal/ModalPortal";
import FormValidateCompany from "components/Form/FormValidate";
import { WrapperValidateCompany, TextH2 } from "pages/styled-components/ValidateRecruiterStyled";

const ValidateCompany = () => {
  const [listCompanies] = useValidateCompanies();
  const [isOpenAccept, openModalAccept, closeModalAccept] = useModal(false);
  const [isOpenReject, openModalReject, closeModalReject] = useModal(false);

  if (!listCompanies) return null;

  return (
    <LayoutHome>
      <WrapperValidateCompany>
        <TextH2>EMPRESAS POR VALIDAR</TextH2>

        {listCompanies.length > 0 ? (
          listCompanies?.map((company) => (
            <CardValidateCompany
              key={`list-item-company-${company?.t300_id_company}`}
              nameCompany={company?.t300_name}
              busisnessName={company?.t300_bussiness_name}
              document={company?.t300_validator_document}
              rfc={company?.t300_rfc}
              nameRecruiter={`${company?.RecruiterCompany[0].t301_name} ${company?.RecruiterCompany[0]?.t301_last_name} ${company?.RecruiterCompany[0]?.t301_second_surname}`}
              emailRecruiter={company?.RecruiterCompany[0]?.t301_email}
              phoneRecriter={company?.RecruiterCompany[0]?.t301_phonenumber}
              openModalAccept={openModalAccept}
              openModalReject={openModalReject}
            />
          ))
        ) : (
          <section
            style={{
              backgroundColor: "#fff",
              height: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "sans-serif",
            }}
          >
            <h2>Sin Empresas por validar</h2>
          </section>
        )}
      </WrapperValidateCompany>
      <ModalPortal isOpen={isOpenAccept} closeModal={closeModalAccept}>
        <FormValidateCompany
          typeAction={1}
          resolve={() => validateBusiness(listCompanies[0]?.t300_id_company)}
        />
      </ModalPortal>

      <ModalPortal isOpen={isOpenReject} closeModal={closeModalReject}>
        <FormValidateCompany
          typeAction={0}
          reject={() => rejectBusiness(listCompanies[0]?.t300_id_company)}
        />
      </ModalPortal>
    </LayoutHome>
  );
};

export default ValidateCompany;
