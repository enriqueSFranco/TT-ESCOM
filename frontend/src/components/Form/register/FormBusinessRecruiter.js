import React from "react";
import { useForm } from "hooks/useForm";
import { useFetch } from "hooks/useFetch";
import { API_COMPANY } from "services/settings";
import FormRecruiterInfo from "./FormRecruiterInfo";
import { TextField, Autocomplete, FormControl } from "@mui/material/";
import styles from "../Styles.module.css";

const initialForm = {
  t300_id_company: "",
  t301_name: "",
  t301_last_name: "",
  t301_email: "",
  t301_phonenumber: "",
};

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_email: /^(\w+[/./-]?){1,}@[A-Za-z]+[/.]\w{2,}$/,
    t301_phonenumber: /\x2b[0-9]+/,
  };

  if (!form.t301_name.trim())
    errors.t301_name = "El campo 'Nombre' es requerido";
  else if (!regex.t301_name.test(form.t301_name))
    errors.t301_name = "El campo 'Nombre' es incorrecto";

  if (!form.t301_email.trim())
    errors.t301_email = "El campo 'Correo electronico' es requerido";
  else if (!regex.t301_email.test(form.t301_email))
    errors.t301_email = "El campo 'Correo electronico' es incorrecto";

  if (!form.t301_last_name.trim())
    errors.t301_last_name = "El campo 'Apellidos' es requerido";
  else if (!regex.t301_last_name.test(form.t301_last_name))
    errors.t301_last_name = "El campo 'Apellidos' es incorrecto";

  // if (!form.t301_phonenumber.trim())
  //   errors.t301_phonenumber = "El campo 'Telefono' es requerido";
  // else if (!regex.t301_phonenumber.test(form.t301_phonenumber))
  //   errors.t301_phonenumber = "El campo 'Telefono' es incorrecto";

  return errors;
};


const FormBusinessRecruiter = ({ isActive, setIsActive }) => {
  const {
    form,
    errors,
    handleChange,
    handleValidate,
    handleSubmitCompanyRecruiter,
  } = useForm(initialForm, validateForm);
  const { data } = useFetch(API_COMPANY);

  console.log(form)


  return (
    <>
      <div className={styles.autocomplete}>
        <FormControl sx={{ minWidth: 490, textAlign: "left" }}>
          <Autocomplete
            sx={{ width: 500 }}
            disablePortal
            id="t300_id_company"
            name="t300_id_company"
            freeSolo
            onChange={(event, newValue) => {
              // console.log(newValue['t300_id_company']);
              // setIdCompany(newValue["t300_id_company"]);
              form.t300_id_company = newValue["t300_id_company"];
            }}
            value={form.t300_id_company}
            getOptionLabel={(option) => option.t300_name || ""}
            options={data && data}
            renderInput={(params) => <TextField {...params} label="Empresas" />}
          />
        </FormControl>
      </div>
      <FormRecruiterInfo
        form={form}
        errors={errors}
        handleSubmitCompany={handleSubmitCompanyRecruiter}
        handleChange={handleChange}
        handleValidate={handleValidate}
        isActive={isActive}
        setIsAcitve={setIsActive}
      />
    </>
  );
};

export default FormBusinessRecruiter;
