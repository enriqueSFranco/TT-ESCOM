import React, { useContext } from 'react';
import { useFetch } from 'hooks/useFetch';
import { useForm } from 'hooks/useForm';
import { API_ACADEMIC_UNITS } from 'services/settings';
import { postAcademicHistorial } from "services/students/index";
import AuthContext from "context/AuthContext";
import { TextField, Autocomplete } from '@mui/material';
import { MdSchool } from "react-icons/md";
import styles from './FormAddAcademicRecord.module.css';


let initialForm = {
  t104_academic_unit: "",
  t104_carreer: "",
  t104_start_date: "",
  t104_end_date: "",
}

const FormAddAcademicRecord = () => {
  const { token } = useContext(AuthContext);
  const { data } = useFetch(API_ACADEMIC_UNITS);
  const { form, handleChange } = useForm(initialForm);

  if (!data) return null;

  function onSubmitAcademicHistorial(e) {
    e.preventDefault();
    let copyForm = {
      ...form,
      t100_id_student: token?.user?.user_id
    };
    postAcademicHistorial(copyForm)
      .then(response => {
        const { data } = response;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  };


  return (
    <div className={styles.wrapperForm}>
      <h1 className={styles.title}>Agregar nueva carrera <MdSchool /></h1>
      <form onSubmit={onSubmitAcademicHistorial} className={styles.form}>
        <div className={styles.inputGroup_1_2}>
          <TextField size='small' label="Carrera" />
          <span className={styles.separator}>En</span>
          <Autocomplete
            sx={{width: 300}}
            size="small"
            disablePortal
            autoHighlight
            id="t104_academic_unit"
            name="t104_academic_unit"
            freeSolo
            onChange={handleChange}
            value={form.t104_academic_unit}
            options={data && data?.map((option) => option.c108_academic_unit)}
            renderInput={(params) => (
              <TextField {...params} label="Unidad Ácademica" />
            )}
          />
        </div>
        <div className={styles.inputGroup_1_2}>
          <div>
            <h2 className={styles.subTitle}>Fecha en la que iniciaste</h2>
            <input type="date" />
          </div>
          <div>
              <h2 className={styles.subTitle}>Fecha en la terminaste/esperas concluir</h2>
            <input type="date" />
          </div>
        </div>
        <button className={styles.btnAdd} type='submit'>Aceptar</button>
      </form>
    </div>
  )
}

export default FormAddAcademicRecord;