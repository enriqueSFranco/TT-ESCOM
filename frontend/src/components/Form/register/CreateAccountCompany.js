import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { useFetch } from "hooks/useFetch";
import { API_COMPANY } from "services/settings";
import { companyInitialForm } from "../schemes";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import FormCompanyInfo from "./FormCompanyInfo";
import FormRecruiterInfo from "./FormRecruiterInfo";
import styles from "../Styles.module.css";

/**
 * RFC DE UNA EMPRESA
 * EJM951103H34
 * EJM: Iniciales de una empresa
 * 951103: Fecha de creacion de la empresa (YY/MM/DD) 95/11/03
 * H34: Homoclave, proporcionada por el SAT
 **/

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t300_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t300_rfc: /^([A-ZÑ\x26]{3,4})([0-9]{6})([A-Z0-9]{3})$/,
    t300_bussiness_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,255}$/,
    t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_email: /^(\w+[/./-]?){1,}@[A-Za-z]+[/.]\w{2,}$/,
    t301_phonenumber: /\x2b[0-9]+/,
  };

  if (!form.t300_name.trim())
    errors.t300_name = "El campo 'Nombre de la empresa' es requerido.";
  else if (!regex.t300_name.test(form.t300_name))
    errors.t300_name =
      "El campo 'Empresa' solo acepta letras y espacios en blanco.";

  if (!form.t300_rfc.trim()) errors.t300_rfc = "El campo 'rfc' es requerido.";
  else if (!regex.t300_rfc.test(form.t300_rfc))
    errors.t300_rfc = "El campo 'rfc' no es valido.";

  if (!form.t300_bussiness_name.trim())
    errors.t300_bussiness_name = "El campo 'razon social' es requerido";
  else if (!regex.t300_bussiness_name.test(form.t300_bussiness_name))
    errors.t300_bussiness_name =
      "El campo 'razon social' solo acepta letras y espacion en blanco";

  if (!form.t301_name.trim())
    errors.t301_name = "El campo 'Nombre' es requerido";
  else if (!regex.t301_name.test(form.t301_name))
    errors.t301_name = "Elmm campo 'Nombre' es incorrecto";

  if (!form.t301_last_name.trim())
    errors.t301_last_name = "El campo 'Apellidos' es requerido";
  else if (!regex.t301_last_name.test(form.t301_last_name))
    errors.t301_last_name = "Elmm campo 'Apellidos' es incorrecto";

  if (!form.t301_email.trim())
    errors.t301_email = "El campo 'Email' es requerido.";
  else if (!regex.t301_email.test(form.t301_email))
    errors.t301_email = "El campo 'Email' es incorrecto.";

  return errors;
};

const FormCompany = () => {
  const { form, errors, handleChange, handleValidate, handleSubmitCompany } =
    useForm(companyInitialForm, validateForm);
  const [idCompany, setIdCompany] = useState(0);
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const { data } = useFetch(API_COMPANY);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleIsActive = () => setIsActive(!isActive);

  if (step === 1)
    return (
      <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
        <div className="row text-center">
          <div className={`${styles.bgCompany} col rounded`}>
            <div className={`${styles.login}`}>
              <blockquote>
                Crea tu cuenta y publica tus vacantes con nosotros.
              </blockquote>
              <span>
                Ya tines cuenta?{" "}
                <Link className={`${styles.linkToLogin}`} to="/reclutador">
                  Inicia sesion
                </Link>
              </span>
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </div>
          <div className={`col bg-white rounded-end ${styles.wrapperColumn}`}>
            {!isActive ? (
              <FormCompanyInfo
                data={data}
                nextStep={nextStep}
                form={form}
                errors={errors}
                handleChange={handleChange}
                handleValidate={handleValidate}
                handleSubmitCompany={handleSubmitCompany}
                isActive={isActive}
                handleIsActive={handleIsActive}
              />
            ) : (
              <article className={styles.wrapperForm3}>
                <h2
                  style={{
                    textTransform: "uppercase",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#028dd4",
                    marginBottom: ".8rem",
                  }}
                >
                  Proporcionanos el nombre de la empresa.
                </h2>
                <div className={styles.autocomplete}>
                  <FormControl sx={{ minWidth: 490, textAlign:"left" }}>
                    <InputLabel id="t300_id_company">Empresas</InputLabel>
                    <Select
                      labelId="t300_id_company"
                      id="t300_id_company"
                      name="t300_id_company"
                      value={form.t300_id_company}
                      label="Empresas Registradas"
                      onChange={handleChange}
                    >
                      {data &&
                      data?.map(({t300_id_company, t300_name}) => (
                        <MenuItem key={t300_name} value={t300_id_company}>{t300_name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <FormRecruiterInfo
                  form={form}
                  errors={errors}
                  handleSubmitCompany={handleSubmitCompany}
                  handleChange={handleChange}
                  handleValidate={handleValidate}
                  isActive={isActive}
                  setIsAcitve={setIsActive}
                />
              </article>
            )}
          </div>
        </div>
      </div>
    );
  else if (step === 2)
    return (
      <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
        <div className="row">
          <div
            className={`${styles.bgRecruiter} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
          >
            <div className={`${styles.login}`}>
              <blockquote>
                Crea tu cuenta y publica tus vacantes con nosotros.
              </blockquote>
              <span>
                Ya tines cuenta?{" "}
                <Link className={`${styles.linkToLogin}`} to="/reclutador">
                  Inicia sesion
                </Link>
              </span>
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </div>
          <div className={`col bg-white rounded-end ${styles.wrapperColumn}`}>
            <FormRecruiterInfo
              prevStep={prevStep}
              form={form}
              errors={errors}
              handleSubmitCompany={handleSubmitCompany}
              handleChange={handleChange}
              handleValidate={handleValidate}
              isActive={isActive}
              setIsAcitve={setIsActive}
            />
          </div>
        </div>
      </div>
    );
};

export default FormCompany;
