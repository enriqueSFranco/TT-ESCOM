import React, { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks";
import { postCertification } from "services";
import { Input } from "components/Input/Input";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MdOutlineErrorOutline } from 'react-icons/md'
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
    t119_certification: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,50}$/,
    t119_company: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,30}$/,
    t119_end_date: "",
    t119_voucher_link: "",
  };

  if (!form.t119_certification.trim())
    errors.t119_certification = "El campo 'Certificación' es requerido.";
  else if (!regex.t119_certification.test(form.t119_certification))
    errors.t119_certification =
      "El campo 'Certificación' solo acepta letras y espacios en blanco.";

  if (!form.t119_company.trim())
    errors.t119_company = "Este campo es requerido.";
  else if (!regex.t119_company.test(form.t119_company))
    errors.t119_company = "Este campo solo acepta letras y espacios en blanco.";

  return errors
};

const FormCertification = ({ updateData, dataToEdit, setDataToEdit }) => {
  const { token } = useAuth();
  const [isVisibleLink, setIsVisibleLink] = useState(false);
  const { form, errors, setForm, handleChange, handleValidate, handleChecked } = useForm(
    {
      ...initialForm,
      t100_id_student: token?.user?.id,
    },
    validateForm
  );

  const onSubmitPostCertification = (e) => {
    e.preventDefault();

    postCertification(form).then((response) => {
      console.log(response)
    })
    .catch(error => console.error(error))
    setForm(initialForm);
  };

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
            onBlur={handleValidate}
            onKeyUp={handleValidate}
          />
          {errors.t119_certification && (
          <span className={styles.error}>
            <MdOutlineErrorOutline />
            {errors.t119_certification}
          </span>
        )}
        </div>
        <div style={{margin: '10px 0'}}></div>
        <div className={styles.inputGroup}>
          <Input
            label="¿Dónde la realizaste?"
            width={`400px`}
            id="t119_company"
            name="t119_company"
            value={form?.t119_company}
            onChange={handleChange}
            onBlur={handleValidate}
            onKeyUp={handleValidate}
          />
          {errors.t119_company && (
          <span className={styles.error}>
            <MdOutlineErrorOutline />
            {errors.t119_company}
          </span>
        )}
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
                onChange={(e) => setIsVisibleLink(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="¿Cuentas con el enlace de tu certificación?"
          />
        </div>
        <div className={styles.inputCertificationLink}>
          {isVisibleLink && (
            <Input
              width={`400px`}
              label="Enlace de certificación"
              name="t119_voucher_link"
              id="t119_voucher_link"
              value={form?.t119_voucher_link}
              onChange={handleChange}
            />
          )}
        </div>
        <button type="submit" className={styles.btnAddCertification}>
          Guardar Certificación
        </button>
      </form>
    </>
  );
};

export default FormCertification;
