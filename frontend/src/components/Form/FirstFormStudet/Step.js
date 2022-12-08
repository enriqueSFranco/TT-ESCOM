import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm, useFetch } from "hooks";
import { helpHttp } from "utils/helpHttp";
import { formStepCandidate } from "types/formStepCandidate";
import { AcademicFormat } from "types/schemes";
import { getAllAcademicUnits, getIntrestJobs } from "services/catalogs/index";
import DisplayComponent from "./DisplayComponent";
import RenderImage from "./RenderImage";
import styles from "./StylesStepper.module.css";

const steps = [
  { id: 1, text: "Información Personal" },
  { id: 2, text: "Educación" },
  { id: 3, text: "Meta Profesional" },
  { id: 4, text: "Habilidades" },
];

const StepComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [startMonth, setStartMonth] = useState(1);
  const [startYear, setStartYear] = useState(2022);
  const [endMonth, setEndMonth] = useState(1);
  const [endYear, setEndYear] = useState(2022);
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [academicUnit, setAcademicUnits] = useState([]);
  const [interestJobs, setInterestJobs] = useState([]);
  const { form, handleChange } = useForm(formStepCandidate);
  const [state, setState] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [cp, setCP] = useState("");
  const [place, setPlace] = useState("");
  const [academicHistorial, setAcademicHistorial] = useState(AcademicFormat);
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);
  const { token } = useAuth();
  let navigate = useNavigate();

  let id_student = token?.user?.id;

  const payload = { ...form, c222_id_locality: 1 };
  academicHistorial.t100_id_student = id_student;

  // TODO: Pasar a un hook personalizado
  useEffect(() => {
    getAllAcademicUnits()
      .then((response) => {
        setAcademicUnits(response);
      })
      .catch((error) => console.error(error));
  }, []);

  // TODO: Pasar a un hook personalizado
  useEffect(() => {
    getIntrestJobs()
      .then((response) => {
        setInterestJobs(response);
      })
      .catch((error) => console.error(error));
  }, []);

  let AllResults = data;

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

          //Agregar historial academico

          const endpointAcademic =
            process.env.REACT_APP_URL_CANDIDATE_ACADEMIC_HISTORIAL;
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

  if (!data && !form) return null;

  return (
    <section className={styles.container}>
      <RenderImage activeStep={activeStep} steps={steps} />
      <div className={styles.container2}>
        <DisplayComponent
          activeStep={activeStep}
          form={form}
          handleChange={handleChange}
          state={state}
          setState={setState}
          municipality={municipality}
          setMunicipality={setMunicipality}
          cp={cp}
          setCP={setCP}
          place={place}
          setPlace={setPlace}
          academicHistorial={academicHistorial}
          setAcademicHistorial={setAcademicHistorial}
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
          interestJobs={interestJobs}
          setInterestJobs={setInterestJobs}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
          hardSkills={hardSkills}
          setHardSkills={setHardSkills}
          AllResultsAllResults={AllResults}
        />
        <nav className={styles.buttons}>
          <button
            className={styles.button}
            disabled={activeStep === 0}
            variant="outlined"
            color="primary"
            onClick={() => previousStep()}
          >
            Anterior
          </button>
          <button
            className={styles.button}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => nextStep()}
          >
            {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
          </button>
        </nav>
      </div>
    </section>
  );
};
export default StepComponent;
