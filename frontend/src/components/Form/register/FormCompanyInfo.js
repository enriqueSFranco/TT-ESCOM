import React, { useState } from "react";
import { uploadDocumentValidate } from "services";
import Input from "components/Input/Input";
import ButtonFile from 'components/Button/ButtonFile'
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import styles from "../Styles.module.css";

const FormCompanyInfo = ({
  nextStep,
  form,
  errors,
  handleChange,
  handleValidate,
  isActive,
  handleIsActive,
}) => {
  const [document, setDocument] = useState(null);

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);

      fr.onload = () => {
        resolve(fr.result);
      };
      fr.onerror = (error) => {
        reject(error);
      };
    });
  }

  async function uploadFile(e) {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setDocument(file.name)
    uploadDocumentValidate({ t300_validator_document: base64 })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  function handleUpload(e) {
    uploadFile(e)
    .then(response => console.log(response))
    .catch(error => error)
  }

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={styles.companyInfo}>
      <div className={`${styles.welcome}`}>
        <h2
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.1em",
            marginBottom: ".5rem",
            color: "#2B3647",
            fontWeight: "600",
          }}
        >
          Datos de la empresa <BsIcon.BsQuestionCircle />
        </h2>
        {!isActive && (
          <span>
            Verifica si tu empresa ya esta registrada{" "}
            <a onClick={handleIsActive} href="#/">
              aqui
            </a>
          </span>
        )}
      </div>
      <div className={styles.inputGroup}>
        <Input
          label="Nombre de su empresa"
          id="t300_name"
          name="t300_name"
          width="500px"
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
          width="500px"
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
          width="500px"
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
      <div className={styles.wrapperFile}>
        <p style={{ margin: "0" }}>
          Proporcionanos el documento que valide que tu empresa esta
          constituida.
        </p>
        <ButtonFile
          type="file"
          name="file"
          id="file"
          text="Subir Documento"
          color="#116BFE"
          onChange={handleUpload}
        />
      </div>
      <span style={{marginBottom: '1rem', fontSize: '.8em', color: '#b2b5be'}}>{document}</span>
      <button className={styles.btnNext} type="button" onClick={continueStep}>
        Siguiente
      </button>
    </div>
  );
};

export default FormCompanyInfo;
