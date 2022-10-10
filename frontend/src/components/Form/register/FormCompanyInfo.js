import React from "react";
import Input from "components/Input/Input";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import styles from "../Styles.module.css";

const FormCompanyInfo = ({
  data,
  nextStep,
  form,
  errors,
  handleChange,
  handleValidate,
  isActive,
  handleIsActive,
}) => {
  
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={styles.companyInfo}>
      <div className={`${styles.welcome}`}>
        <h2>
          Datos de la empresa <BsIcon.BsQuestionCircle />
        </h2>
        {!isActive && (
          <a
            onClick={handleIsActive}
            className={styles.youHaveAccountComany}
            href="#/"
          >
            ¿Tu empresa ya esta registrada con nosotros ?
          </a>
        )}
      </div>
      <div className={styles.inputGroup}>
        <Input
          label="Nombre de su empresa"
          id="t300_name"
          name="t300_name"
          width='500px'
          value={form.t300_name}
          onBlur={handleValidate}
          onKeyUp={handleValidate}
          onChange={handleChange}
        />
        {errors.t300_name && (
          <span className={styles.error}>
            <MdIcon.MdOutlineErrorOutline />
            {errors.t300_name}
          </span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <Input
          label="RFC"
          id="t300_rfc"
          name="t300_rfc"
          width='500px'
          value={form.t300_rfc}
          onBlur={handleValidate}
          onKeyUp={handleValidate}
          onChange={handleChange}
        />
        {errors.t300_rfc && (
          <span className={styles.error}>
            <MdIcon.MdOutlineErrorOutline />
            {errors.t300_rfc}
          </span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <Input
          label="Razon Social"
          id="t300_bussiness_name"
          name="t300_bussiness_name"
          width='500px'
          value={form.t300_bussiness_name}
          onBlur={handleValidate}
          onKeyUp={handleValidate}
          onChange={handleChange}
        />
        {errors.t300_bussiness_name && (
          <span className={styles.error}>
            <MdIcon.MdOutlineErrorOutline />
            {errors.t300_bussiness_name}
          </span>
        )}
      </div>
      <div className={styles.flexRow}>
        <p style={{ marginBottom: "1rem" }}>
          Proporcionanos el documento que valide que tu empresa esta
          constituida.
        </p>
        {/* <input
          type="file"
          name="t300_validator_document"
          id="t300_validator_document"
          value={form.t300_validator_document}
          onChange={handleChange}
        /> */}
      </div>
      <button className={styles.btnNext} type="button" onClick={continueStep}>
        Siguiente
      </button>
    </div>
  );
};

export default FormCompanyInfo;
