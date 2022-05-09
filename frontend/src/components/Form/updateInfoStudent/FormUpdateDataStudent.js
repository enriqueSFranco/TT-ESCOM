import { useContext } from "react";
import { useForm } from "hooks/useForm";
import AuthContext from "context/AuthContext";
import { Toaster } from "react-hot-toast";
import { updateStudent } from "services/students/index";
import { updateStudentInitialForm } from "../schemes";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Label from "../../Element/Label/Label";
import Switch from "../../Element/Switch/Switch";
import * as BiIcon from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { MdKeyboardBackspace } from "react-icons/md";
import styles from "./FormUpdateDataStudent.module.css";

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t100_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_specialty: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_location: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_phone: "",
  };

  if (!form.t100_name.trim())
    errors.t100_name = "";
  else if (!regex.t100_name.test(form.t100_name.trim()))
    errors.t100_name = "";

  return errors;
};

const FormUpdateDataStudent = ({ student, handleBackToProfile }) => {
  const { token } = useContext(AuthContext);

  const { form, handleChange, handleChecked } = useForm(
    updateStudentInitialForm,
    validateForm
  );

  let studentCopy = {
    ...form,
    t100_boleta: student[0]?.t100_boleta,
    t100_email: student[0]?.t100_email,
  };

  let id = token?.user?.user_id;

  //TODO: redireccion despues de haber actualizado los datos del alumno.
  function handleSubmit(e) {
    e.preventDefault();
    updateStudent(id, studentCopy)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <button
            className={styles.btnGoBackProfile}
            onClick={handleBackToProfile}
          >
            <MdKeyboardBackspace />
          </button>
          <h1 className={styles.title}>editar perfil</h1>
        </header>
        <form onSubmit={handleSubmit} className={`container ${styles.form}`}>
          <div className={styles.inputGroup}>
            <div className={styles.inputGroupFlex}>
              <TextField
                label="Nombre"
                id="t100_name"
                name="t100_name"
                autoComplete="off"
                sx={{ width: 280, maxWidth: "100%" }}
                // defaultValue={student[0]?.t100_name}
                value={form.t100_name}
                onChange={handleChange}
              />
              <TextField
                label="Apellido"
                id="t100_last_name"
                name="t100_last_name"
                autoComplete="off"
                sx={{ width: 280, maxWidth: "100%" }}
                // defaultValue={student[0]?.t100_last_name}
                value={form.t100_last_name}
                onChange={handleChange}
              />
            </div>
            <TextField
              label="Especialidad"
              id="t100_speciality"
              name="t100_speciality"
              autoComplete="off"
              sx={{ width: "100%", maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_speciality ?? ""}
              value={form.t100_speciality}
              onChange={handleChange}
            />
            <TextField
              label="Donde vives"
              id="t100_residence"
              name="t100_residence"
              autoComplete="off"
              sx={{ width: "100%", maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_residence ?? ""}
              value={form.t100_residence}
              onChange={handleChange}
            />
            <div className={styles.flexInput}>
              <Switch
                label="Disponibilidad para viajar"
                name="t100_travel"
                id="t100_travel"
                value={form.t100_travel}
                onChange={handleChecked}
                checked={form.t100_travel}
              />
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
            <TextField
              type="text"
              label="Telefono/Whatsapp"
              id="t100_phonenumber"
              name="t100_phonenumber"
              autoComplete="off"
              sx={{ width: "100%", maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_phonenumber}
              value={form.t100_phonenumber}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.actions}`}>
            <Button
              sx={{ width: "60%" }}
              startIcon={
                <GrUpdate
                  style={{
                    fontSize: "1rem",
                    position: "relative",
                    right: ".3rem",
                    color: "#fff",
                  }}
                />
              }
              variant="contained"
              type="submit"
            >
              Actualizar
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default FormUpdateDataStudent;
