import React, { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { getStudentCertifications } from "services/students/index";
import FormCertification from "components/Form/Certification/FormCertification";
import ModalForm from "components/Modal/ModalForm";
import CertificationItem from "./CertificationItem";
import { MdAdd } from "react-icons/md";
import styles from "./Certifications.module.css";

const CertificationList = () => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [
    isOpenModalAddCertification,
    openModalAddCertification,
    closeModalAddCertification,
  ] = useModal();

  let idStudent = token?.user?.user_id;

  useEffect(() => {
    getStudentCertifications(idStudent)
      .then(response => {
        if (response.status === 200) {
          const { data } = response;
          setData(data);
        } else {
          setData(null);
        }
      })
      .catch(error => error);
  }, [idStudent]);



  return (
    <article className={styles.wrapper}>
      {
        data && data?.map(certification => (
          <CertificationItem
            key={certification?.t119_id_registrer}
            data={data}
            setData={setData}
            idCertification={certification?.t119_id_registrer}
            title={certification?.t119_certification}
            partnership={certification?.t119_company}
            endDate={certification?.t119_end_date}
            link={certification?.t119_voucher_link}
          />
        ))
      }
      <button
        className={styles.btnAddProject}
        onClick={openModalAddCertification}
      >
        <MdAdd />
      </button>

      <ModalForm
        isOpen={isOpenModalAddCertification}
        closeModal={closeModalAddCertification}
        width="600px"
        height="600px"
      >
        <FormCertification />
      </ModalForm>
    </article>
  );
};

export default CertificationList;
