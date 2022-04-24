import React from "react";
import TextField from "@mui/material/TextField";
import Label from "components/Element/Label/Label";
import * as BsIcon from "react-icons/bs";
import * as BiIcon from "react-icons/bi";
import * as MdIcon from "react-icons/md";
import styles from "../Styles.module.css";

const FormCompanyInfo = ({
  nextStep,
  form,
  errors,
  handleChange,
  handleValidate,
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
        <a className={styles.youHaveAccountComany} href="#/">
          Tu empresa ya esta registrada con nosotros ?
        </a>
      </div>
      <div className={styles.inputGroup}>
        <TextField
          label="Nombre de su empresa"
          id="t300_name"
          name="t300_name"
          sx={{ width: 500, maxWidth: "100%" }}
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
        <TextField
          label="RFC"
          id="t300_rfc"
          name="t300_rfc"
          sx={{ width: 500, maxWidth: "100%" }}
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
        <TextField
          label="Razon Social"
          id="t300_bussiness_name"
          name="t300_bussiness_name"
          sx={{ width: 500, maxWidth: "100%" }}
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
        <input
          type="file"
          name="cv"
          id="cv"
          className={`${styles.inputFile}`}
          value={form.file}
          onChange={handleChange}
        />
        <Label htmlFor="cv">
          <BiIcon.BiCloudUpload />
          subir cv
        </Label>
      </div>
      <button className={styles.btnNext} type="button" onClick={continueStep}>
        siguiente
      </button>
    </div>
  );
};

export default FormCompanyInfo;
