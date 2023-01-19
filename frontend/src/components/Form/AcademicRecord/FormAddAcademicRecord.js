import React, { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { postAcademicHistorial } from "services/students/index";
import { Input } from "components/Input/Input";
import { FcOk } from "react-icons/fc";
import { MdOutlineErrorOutline } from "react-icons/md";
import styles from "./FormAddAcademicRecord.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t104_carreer: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,255}$/,
    t104_academic_unit: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,255}$/,
  };

  if (!form.t104_carreer.trim())
    errors.t104_carreer = "El campo 'Carrera' es requerido.";
  else if (!regex.t104_carreer.test(form.t104_carreer.trim()))
    errors.t104_carreer = "El campo 'Carrera' es incorrecto.";

  if (!form.t104_academic_unit.trim())
    errors.t104_academic_unit = "El campo 'Unidad Académica' es requerido.";
  else if (!regex.t104_academic_unit.test(form.t104_academic_unit.trim()))
    errors.t104_academic_unit = "El campo 'Unidad Académica' es incorrecto.";

  return errors;
};

let initialForm = {
  t104_academic_unit: "",
  t104_carreer: "",
  t104_start_date: "",
  t104_end_date: "",
};

const FormAddAcademicRecord = () => {
  const { token } = useAuth();
  const { form, errors, setForm, handleValidate, handleChange } = useForm(
    initialForm,
    validateForm
  );
  const [response, setResponse] = useState("");

  function onSubmitAcademicHistorial(e) {
    e.preventDefault();
    let copyForm = {
      ...form,
      t100_id_student: token?.user?.id,
    };
    postAcademicHistorial(copyForm)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setResponse(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
    setForm(initialForm);
    setResponse("");
  }

  console.log(response);

  return (
    <div className={styles.wrapperForm}>
      <h1 className={styles.title}>Agregar nueva carrera</h1>
      <form onSubmit={onSubmitAcademicHistorial} className={styles.form}>
        <div className={styles.inputGroup_1_2}>
          <div className={styles.wrapperInput}>
            <Input
              label="Carrera"
              id="t104_carreer"
              name="t104_carreer"
              value={form?.t104_carreer}
              onChange={handleChange}
              onBlur={handleValidate}
              onKey={handleValidate}
            />
            {errors.t104_carreer && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t104_carreer}
              </div>
            )}
          </div>
          <div className={styles.wrapperInput}>
            <Input
              label="Unidad Académica"
              id="t104_academic_unit"
              name="t104_academic_unit"
              value={form?.t104_academic_unit}
              onChange={handleChange}
              onBlur={handleValidate}
              onKey={handleValidate}
            />
            {errors.t104_academic_unit && (
              <div className={styles.error}>
                <MdOutlineErrorOutline />
                {errors.t104_academic_unit}
              </div>
            )}
          </div>
        </div>
        <div className={styles.inputGroup_1_2}>
          <div>
            <h3 className={styles.subTitle}>Fecha de inicio</h3>
            <input
              className={styles.input_date}
              type="date"
              id="t104_start_date"
              name="t104_start_date"
              value={form?.t104_start_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className={styles.subTitle}>Fecha de finalización</h3>
            <input
              className={styles.input_date}
              type="date"
              id="t104_end_date"
              name="t104_end_date"
              value={form?.t104_end_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className={styles.btnAdd} type="submit">
          Agregar nueva carrera
        </button>
      </form>
      {response && (
        <div className={styles.alert}>
          <FcOk style={{ fontSize: "22px" }} />
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default FormAddAcademicRecord;
