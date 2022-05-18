import React, { useContext, useState } from "react";
import { useForm } from "hooks/useForm";
import TextField from "@mui/material/TextField";
import AuthContext from "context/AuthContext";
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

const FormCertification = ({
  updateData,
  dataToEdit,
  setDataToEdit
}) => {
  const { token } = useContext(AuthContext);
  const [isVisibleLink, setIsVisibleLink] = useState(false);
  const { form, handleChange, handleChecked, onSubmitPostCertification } = useForm({
    ...initialForm,
    t100_id_student: token?.user?.user_id,
  });

  console.log(form)

  return (
    <>
      <h1 className={styles.titleCertification}>Agregar un certificacion</h1>
      <form  onSubmit={onSubmitPostCertification} className={styles.formCertification}>
        <div className={styles.inputGroup}>
          <TextField
            sx={{ width: "100%" }}
            label="Nombre de tu certificacion o curso"
            size="small"
            id="t119_certification"
            name="t119_certification"
            value={form?.t119_certification}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <TextField
            sx={{ width: "100%" }}
            label="Empresa/Compania con la que la realizaste"
            size="small"
            id="t119_company"
            name="t119_company"
            value={form?.t119_company}
            onChange={handleChange}
          />
        </div>
        <p>Fecha en la que esperas terminar el curso/certificacion.</p>
        <div className={styles.flex_1_2}>
          <input
            type="date"
            id="t119_end_date"
            name="t119_end_date"
            value={form?.t119_end_date}
            onChange={handleChange}
          />
          <div className={styles.wrapperInCourse}>
            <input
              type="checkbox"
              name="t119_in_course"
              id="t119_in_course"
              value={form?.t119_in_course}
              onChange={handleChecked}
            />
            <label htmlFor="t119_in_course">
              Aun sigues en proceso de acreditacion?
            </label>
          </div>
        </div>
        <div className={styles.wrapperLinkCertification}>
          <div className={styles.inputGroupCheckbox}>
            <input
              type="checkbox"
              name="isVisibleLink"
              id="isVisibleLink"
              value={isVisibleLink}
              onChange={(e) => setIsVisibleLink(e.target.checked)}
            />
            <label htmlFor="isVisibleLink">
              Cuentas con el enlace de tu certificacion?
            </label>
          </div>
          <div className={styles.inputCertificationLink}>
            {isVisibleLink && (
              <TextField
                sx={{width: "300px"}}
                size="small"
                label="Enlace de certificacion"
                name="t119_voucher_link"
                id="t119_voucher_link"
                value={form?.t119_voucher_link}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
        <button type="submit" className={styles.btnAddCertification}>Guardar</button>
      </form>
    </>
  );
};

export default FormCertification;
