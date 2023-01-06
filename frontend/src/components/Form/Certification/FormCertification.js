import React, { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks";
import { Input } from "components/Input/Input";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./FormCertification.module.css";

const initialForm = {
  t119_certification: "",
  t119_company: "",
  t119_end_date: "",
  t119_in_course: false,
  t119_voucher_link: "",
};

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t119_certification: "",
    t119_company: "",
    t119_end_date: "",
    t119_voucher_link: "",
  };
};

const FormCertification = ({ updateData, dataToEdit, setDataToEdit }) => {
  const { token } = useAuth();
  const [isVisibleLink, setIsVisibleLink] = useState(false);
  const {
    form,
    setForm,
    handleChange,
    handleChecked,
    onSubmitPostCertification,
  } = useForm(
    {
      ...initialForm,
      t100_id_student: token?.user?.id,
    },
    validateForm
  );

  // useEffect(() => {

  // }, [dataToEdit])

  return (
    <>
      <h1 className={styles.titleCertification}>Agregar un certificación</h1>
      <form
        onSubmit={onSubmitPostCertification}
        className={styles.formCertification}
      >
        <div className={styles.inputGroup}>
          <Input
            width={`400px`}
            label="Nombre de la certificación o curso"
            id="t119_certification"
            name="t119_certification"
            value={form?.t119_certification}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <Input
            label="¿Dónde la realizaste?"
            width={`400px`}
            id="t119_company"
            name="t119_company"
            value={form?.t119_company}
            onChange={handleChange}
          />
        </div>
        <div className={styles.wrapperInCourse}>
          <FormControlLabel
            control={
              <Checkbox
                name="t119_in_course"
                id="t119_in_course"
                value={form?.t119_in_course}
                onChange={handleChecked}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="¿Sigues en proceso de acreditación?"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="isVisibleLink"
                id="isVisibleLink"
                value={isVisibleLink}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="¿Cuentas con el enlace de tu certificación?"
          />
        </div>
        <div className={styles.wrapperLinkCertification}>
          <div className={styles.inputCertificationLink}>
            {isVisibleLink && (
              <Input
                label="Enlace de certificación"
                name="t119_voucher_link"
                id="t119_voucher_link"
                value={form?.t119_voucher_link}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
        <button type="submit" className={styles.btnAddCertification}>
          Guardar Certificación
        </button>
      </form>
    </>
  );
};

export default FormCertification;
