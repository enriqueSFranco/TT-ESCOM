import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DatesPersonal from "./DatesPersonal";
import DatesJob from "./DatesJob";
import DatesSkill from "./DatesSkill";
import Button from "@mui/material/Button";
import styles from "./Styles.module.css";
import { useForm } from "../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";
import { helpHttp } from "../../../utils/helpHttp";

let initialForm = {
  t100_boleta: "2015090419",
  t100_name: "ggg",
  t100_password: "123456",
  t100_last_name: "gggg",
  t100_username: "ggg",
  t100_cv: null,
  t100_email: "gato@mmm.com",
  t100_gender: null,
  t100_date_of_birth: null,
  t100_personal_objectives: "ggg",
  t100_speciality: "ggg",
  t100_target_salary: "1234679",
  t100_travel: false,
  t100_profile_picture: null,
  is_active: false,
  t100_phonenumber: "1234",
  t100_residence: "ggg",
};

const StepComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [hardSkills, setHardSkills] = React.useState([]);
  const [softSkills, setSoftSkills] = React.useState([]);
  const { form, handleChange } = useForm(initialForm);
  const { data } = useFetch("/api/catalogues/CatalogueSkills/");
  if (!data && !form) {
    return;
  }

  let AllResults = data;

  const PageDisplay = () => {
    if (activeStep === 0) {
      return <DatesPersonal form={form} handleChange={handleChange} />;
    }
    if (activeStep === 1) {
      return (
        <DatesJob
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
          AllResults={AllResults}
        />
      );
    }
    if (activeStep === 2) {
      return <DatesSkill form={form} handleChange={handleChange} />;
    }
  };

  const nextStep = () => {
    if (activeStep < 2) {
      //console.log((activeStep));
      setActiveStep((currentStep) => currentStep + 1);
    }
    if (activeStep >= 2) {
      updateData();
    }
  };

  const updateData = () => {
    const endpoint = "/api/Students/2015090419/";

    let options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: form,
    };
    helpHttp()
      .PUT(endpoint, options)
      .then((response) => {
        if (!response.err) {
          console.log(response);

          /*hardSkills.map((dato)=>{
            console.log(dato);
          })*/
          
          const endpoint = "/api/Skills/";
          const skilssall = hardSkills.concat(softSkills);

          skilssall.map((dato)=>{
            //console.log(dato);
            let options = {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: {
                t100_boleta: "2015090419",
                c116_id_skill: dato['c116_id_skill'],
              },
            };
            helpHttp()
              .POST(endpoint, options)
              .then((response) => {
                if (!response.err) {
                  console.log(response);
                  
                }
              })
            .catch((err) => console.error(err));
          })
          
        }
      })
      .catch((err) => console.error(err));
  };

  const previousStep = () => {
    if (activeStep > 0) setActiveStep((currentStep) => currentStep - 1);
  };

  const steps = ["1", "2 ", "3"];

  return (
    <div className={styles.container}>
      <div className={styles.stepper}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
        <div className={styles.pages}>{PageDisplay()}</div>

      <div className={styles.buttons}>
        <div className={styles.button1}>
          <Button
            disabled={activeStep === 0}
            variant="outlined"
            color="primary"
            onClick={() => previousStep()}
          >
            Anterior
          </Button>
        </div>
        <div className={styles.space}></div>
        <div className={styles.button2}>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => nextStep()}
          >
            {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default StepComponent;
