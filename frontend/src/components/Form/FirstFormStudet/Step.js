import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm, useFetch } from "hooks";
import { helpHttp } from "utils/helpHttp";
import { formStepCandidate } from 'types/formStepCandidate'
import { AcademicFormat } from "types/schemes";
import { getAllAcademicUnits, getIntrestJobs } from "services/catalogs/index";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DatesPersonal from "./DatesPersonal";
import DatesJob from "./DatesJob";
import DatesSkill from "./DatesSkill";
import DatesSchool from "./DatesSchool";
import styles from "./StylesStepper.module.css";


const StepComponent = () => {
  const [startMonth, setStartMonth] = useState(1);
  const [startYear, setStartYear] = useState(2022);
  const [endMonth, setEndMonth] = useState(1);
  const [endYear, setEndYear] = useState(2022);
  const [activeStep, setActiveStep] = useState(0);
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [academicUnit, setAcademicUnits] = useState([]);
  const [interestJobs, setInterestJobs] = useState([]);
  const { form, handleChange } = useForm(formStepCandidate);
  const [state,setState] = useState("");
  const [municipality,setMunicipality] = useState("");
  const [cp,setCP] = useState("");
  const [place,setPlace] = useState("");
  // const { response, loading, loadingNextPage, setPage } = useGetAllJobs()
  const [academicHistorial, setAcademicHistorial] = useState(AcademicFormat);
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);
  const { token } = useAuth();
  let navigate = useNavigate();
  let id_locality = "";

  let id_student = token?.user?.id;

  const payload = {...form,c222_id_locality:1}
  academicHistorial.t100_id_student = id_student;

  // TODO: Pasar a un hook personalizado
  useEffect(() => { // efecto que recupera las unidades academicas
    getAllAcademicUnits()
      .then((response) => {
        setAcademicUnits(response);
      })
      .catch((error) => console.error(error));
  }, []);

  // TODO: Pasar a un hook personalizado
  useEffect(() => { // efecto que recupera 
    getIntrestJobs()
      .then((response) => {
        setInterestJobs(response);
      })
      .catch((error) => console.error(error));
  }, []);

  let AllResults = data;

  if (!data && !form) return null;

  const PageDisplay = () => {
    if (activeStep === 0) {
      return <DatesPersonal 
              form={form} 
              handleChange={handleChange} 
              state = {state}
              setState = {setState}
              municipality ={municipality}
              setMunicipality = {setMunicipality}
              cp ={cp}
              setCP = {setCP}
              place ={place}
              setPlace = {setPlace}/>;
    }
    if (activeStep === 1) {
      return (
        <DatesSchool
          academicUnit={academicUnit}
          setAcademicUnits={setAcademicUnits}
          startMonth={startMonth}
          setStartMonth={setStartMonth}
          startYear={startYear}
          setStartYear={setStartYear}
          endMonth={endMonth}
          setEndMonth={setEndMonth}
          endYear={endYear}
          setEndYear={setEndYear}
          academicHistorial={academicHistorial}
          setAcademicHistorial={setAcademicHistorial}
        />
      );
    }
    if (activeStep === 2) {
      return (
        <DatesJob
          form={form}
          handleChange={handleChange}
          interestJobs={interestJobs}
          setInterestJobs={setInterestJobs}
        />
      );
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

  // Control de imagenes del step
  const PageImage = () => {
    if (activeStep === 0)
      return <div className={`${styles.bg1} ${styles.bg}`}></div>;
    if (activeStep === 1)
      return <div className={`${styles.bg2} ${styles.bg}`}></div>;
    if (activeStep === 2)
      return <div className={`${styles.bg3} ${styles.bg}`}></div>;
    if (activeStep === 3)
      return <div className={`${styles.bg4} ${styles.bg}`}></div>;
  };

  const nextStep = () => {
    if (activeStep < 3) setActiveStep((currentStep) => currentStep + 1);
    if (activeStep >= 3) updateData();
  };

  const updateData = () => {

    const endpoint = process.env.REACT_APP_URL_CANDIDATE + id_student + "/";
    
    let options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: payload,
    };
    helpHttp()
      .PUT(endpoint, options)
      .then((response) => {
        if (!response.err) {
          ///Agreegar skills del alumno
          const endpoint = process.env.REACT_APP_URL_CANDIDATE_SKILLS;
          const skillsAll = hardSkills.concat(softSkills);
          skillsAll.forEach((dato) => {
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

          ///Agregar historial academico

          const endpointAcademic = process.env.REACT_APP_URL_CANDIDATE_ACADEMIC_HISTORIAL;
          academicHistorial.t104_start_date =
            startYear + "-" + startMonth + "-01";
          academicHistorial.t104_end_date = endYear + "-" + endMonth + "-01";
          console.log(academicHistorial);
          let options = {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: academicHistorial,
          };
          helpHttp()
            .POST(endpointAcademic, options)
            .then((response) => {
              if (!response.err) {
                console.log(response);
                navigate("/perfil");
              }
            })
            .catch((err) => console.error(err));
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
