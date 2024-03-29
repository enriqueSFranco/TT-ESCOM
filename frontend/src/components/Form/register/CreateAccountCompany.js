import { useState } from "react";
import { useForm } from "hooks/useForm";
import { companyInitialForm } from "types/schemes";
import FormBusinessRecruiter from "./FormBusinessRecruiter";
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
    t300_bussiness_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü.,\s]{4,255}$/,
    t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_email:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
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
  // const { data } = useFetch(process.env.REACT_APP_URL_COMPANY);
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [document, setDocument] = useState(null);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleIsActive = () => setIsActive(!isActive);

  if (step === 1)
    return (
      <div className={`${styles.wrapperColumn}`}>
        {!isActive ? (
          <FormCompanyInfo
            nextStep={nextStep}
            form={form}
            errors={errors}
            handleChange={handleChange}
            handleValidate={handleValidate}
            isActive={isActive}
            handleIsActive={handleIsActive}
            document = {document}
            setDocument = {setDocument}
          />
        ) : (
          <article className={styles.wrapperForm3}>
            <h2
              className={styles.title}
              style={{ margin: "0 0 1.5rem 0", textAlign: "center" }}
            >
              Proporcionanos el nombre de la empresa.
            </h2>
            <FormBusinessRecruiter
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </article>
        )}
      </div>
    );
  else if (step === 2)
    return (
      <div className={`${styles.wrapperColumn}`}>
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
    );
};

export default FormCompany;
