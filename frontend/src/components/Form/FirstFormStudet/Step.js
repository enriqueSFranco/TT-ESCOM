import React from "react";
import { useState, useEffect, useRef } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DatesPersonal from "./DatesPersonal";
import DatesJob from "./DatesJob";
import DatesSkill from "./DatesSkill";
import DatesSchool from "./DatesSchool";
// import Button from "@mui/material/Button";
import styles from "./StylesStepper.module.css";
import { useForm } from "../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";
import { helpHttp } from "../../../utils/helpHttp";
import {
  getAllAcademicUnits,
  getAllJobs
} from "services/catalogs/index";

let id_student = 1;

let initialForm = {
  t100_boleta: "",
  t100_name: "",
  t100_password: "",
  t100_last_name: "",
  t100_username: "",
  t100_email: "",
  t100_gender: null,
  t100_date_of_birth: null,
  t100_personal_objectives: "",
  t100_speciality: "",
  t100_target_salary: "",
  t100_travel: false,
  is_active: false,
  t100_phonenumber: "",
  t100_residence: "",
  t100_modalities: "",
  t100_interest_job: ""
};

let AcademicFormat = {
    t104_academic_unit: "",
    t104_carreer: "",
    t104_start_date: "",
    t104_end_date: "",
    t100_id_student: id_student,
    c107_id_academic_level: null,
    c109_id_academic_state: null
}

const StepComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [hardSkills, setHardSkills] = React.useState([]);
  const [softSkills, setSoftSkills] = React.useState([]);
  const [academicUnit,setAcademicUnits] = React.useState([]);
  const [interestJobs,setInterestJobs] = React.useState([]); 
  const { form, handleChange } = useForm(initialForm);
  const [academicHistorial, setAcademicHistorial] = React.useState(AcademicFormat); 
  const { data } = useFetch("/api/catalogues/CatalogueSkills/");  
  
  useEffect(() => {
    getAllAcademicUnits()
      .then((response) => {
        setAcademicUnits(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getAllJobs()
      .then((response) => {
        setInterestJobs(response);
      })
      .catch((error) => console.error(error));
  }, []);

  let AllResults = data;

  if (!data && !form) {
    return;
  }  

  const PageDisplay = () => {
    if (activeStep === 0) {
      return <DatesPersonal form={form} handleChange={handleChange} />;
    }
    if (activeStep === 1) {    
      return (          
        <DatesSchool 
          academicHistorial={academicHistorial} 
          setAcademicHistorial={setAcademicHistorial} 
          academicUnit={academicUnit}
          setAcademicUnits={setAcademicUnits}/>);
    }
    if (activeStep === 2) {
      return (
        <DatesJob 
          form={form} 
          handleChange={handleChange}
          interestJobs = {interestJobs}
          setInterestJobs = {setInterestJobs} />);
    }
    if (activeStep === 3) {
      return (
        <DatesSkill
          softSkills={softSkills}
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          setSoftSkills={setSoftSkills}
          AllResults={AllResults}
        />
      );
    }
  };

  const PageImage = () => {
    if (activeStep === 0) {
      return (<div className={styles.bg}></div>);
    }
    if (activeStep === 1) {
      return (<div className={styles.bg}></div>);
    }
    if (activeStep === 2) {
      return (<div className={styles.bg}></div>);
    }
    if (activeStep === 3) {
      return (<div className={styles.bg}></div>);
    }
  };


  const nextStep = () => {
    if (activeStep < 3) {
      //console.log((activeStep));
      setActiveStep((currentStep) => currentStep + 1);
    }
    if (activeStep >= 3) {
      updateData();
    }
  };

  const updateData = () => {
    console.log(form);
    const endpoint = "/api/Students/"+id_student+"/";

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

          skilssall.map((dato) => {
            //console.log(dato);
            let options = {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: {
                t100_id_student: id_student,
                c116_id_skill: dato["c116_id_skill"],
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
          });
        }
      })
      .catch((err) => console.error(err));
  };

  const previousStep = () => {
    if (activeStep > 0) setActiveStep((currentStep) => currentStep - 1);
  };

  const steps = ["1", "2 ", "3", "4"];

  return (
    <div className={styles.container}>
      <div className={styles.container1}>{PageImage()}</div>

      <div className={styles.container2}>
        <div className={styles.pages}>{PageDisplay()}</div>
      
        <div className={styles.container3}>
          <div className={styles.stepper}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          <div className={styles.buttons}>
            <div className={styles.button1}>
              <button
                className={styles.button}
                disabled={activeStep === 0}
                variant="outlined"
                color="primary"
                onClick={() => previousStep()}
              >
                Anterior
              </button>
            </div>

            <div className={styles.space}></div>

            <div className={styles.button2}>
              <button
                className={styles.button}
                variant="outlined"
                color="primary"
                type="submit"
                onClick={() => nextStep()}
              >
                {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </button>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  );
};
export default StepComponent;
