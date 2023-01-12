import React, { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { getStudentCertifications } from "services/students/index";
import FormCertification from "components/Form/Certification/FormCertification";
import ModalPortal from "components/Modal/ModalPortal";
import CertificationItem from "./CertificationItem";
import { MdAdd } from "react-icons/md";
import styles from "./Certifications.module.css";

const CertificationList = () => {
  const { token } = useAuth();
  const [data, setData] = useState(null);
  const [
    isOpenModalAddCertification,
    openModalAddCertification,
    closeModalAddCertification,
  ] = useModal();

  let idStudent = token?.user?.id;

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

  if (!data) return null;

  return (
    <article className={styles.wrapper}>
      <div className={styles.wrapperButton}>
        <button
          className={styles.btnAddProject}
          onClick={openModalAddCertification}
        >
          <MdAdd />
        </button>
      </div>
      <div style={{backgroundColor: 'blue', width: 'fit-content', position: 'relative', top: '1rem'}}>
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
      </div>

      <ModalPortal
        isOpen={isOpenModalAddCertification}
        closeModal={closeModalAddCertification}
        minWidth="700px"
        minHeight="600px"
      >
        <FormCertification />
      </ModalPortal>
    </article>
  );
};

export default CertificationList;
