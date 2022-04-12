
import { useForm } from "hooks/useForm";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion" ;
import { Toaster } from "react-hot-toast";
import { updateStudent } from "services/students/index";
import { updateStudentInitialForm } from "../schemes";
import TextField from "@mui/material/TextField";
import Label from "../../Element/Label/Label";
import Switch from "../../Element/Switch/Switch";
import * as BiIcon from "react-icons/bi";
import styles from "./FormUpdateDataStudent.module.css";


const validateForm = form => {
  let errors = {};
  let regex = {
    t100_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_specialty: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_location: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t100_phone: "",
  }
};

const FormUpdateDataStudent = ({ student, handleBackToProfile }) => {
  const navigate = useNavigate();
  const { form, handleChange, handleChecked } = useForm(updateStudentInitialForm, validateForm);
  let studentCopy = {...form, t100_boleta: student[0]?.t100_boleta, t100_email: student[0]?.t100_email};
  let id = student[0]?.t100_boleta;
  
  // TODO redireccion despues de haber actualizado los datos del alumno.
  function handleSubmit(e) {
    e.preventDefault();
    updateStudent(id, studentCopy)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <>
      <motion.div
        className={styles.wrapper}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        duration={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>editar informacion</h1>
        <form onSubmit={handleSubmit} className={`container ${styles.form}`}>
          <div className="mb-4">
            <TextField
              label="Nombre"
              id="t100_name"
              name="t100_name"
              autoComplete="off"
              sx={{ width: 480, maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_name}
              value={form.t100_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Especialidad"
              id="t100_speciality"
              name="t100_speciality"
              autoComplete="off"
              sx={{ width: 480, maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_speciality}
              value={form.t100_speciality}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Donde vives"
              id="t100_residence"
              name="t100_residence"
              autoComplete="off"
              sx={{ width: 480, maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_residence}
              value={form.t100_residence}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-4">
            <input type="file" name="" id="" />
          </div> */}
          <Switch
            label="Disponibilidad para viajar"
            name="t100_travel"
            id="t100_travel"
            value={form.t100_travel}
            onChange={handleChecked}
          />
          <div className="mb-4">
            <TextField
              type="text"
              label="Telefono/Whatsapp"
              id="t100_phonenumber"
              name="t100_phonenumber"
              autoComplete="off"
              sx={{ width: 480, maxWidth: "100%" }}
              // defaultValue={student[0]?.t100_phonenumber}
              value={form.t100_phonenumber}
              onChange={handleChange}
              
            />
          </div>
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
          <div>{/* links de redes sociales */}</div>
          <div className={`${styles.actions} w-100`}>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-outline-primary w-100 my-1">
                  Actualizar
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  onClick={handleBackToProfile}
                  className="btn btn-outline-danger w-100 my-1"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
      <Toaster />
    </>
  );
};


export default FormUpdateDataStudent;
