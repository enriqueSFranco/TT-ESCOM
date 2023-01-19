import React from "react";
import DatesSchool from "./DatesSchool";
import DatesPersonal from "./DatesPersonal";
import DatesJob from "./DatesJob";
import DatesSkill from "./DatesSkill";

const DisplayComponent = ({
  activeStep,
  form,
  handleChange,
  state,
  setState,
  municipality,
  setMunicipality,
  cp,
  setCP,
  place,
  setPlace,
  academicHistorial,
  setAcademicHistorial,
  academicUnit,
  setAcademicUnits,
  startMonth,
  setStartMonth,
  startYear,
  setStartYear,
  endMonth,
  setEndMonth,
  endYear,
  setEndYear,
  interestJobs,
  setInterestJobs,
  softSkills,
  setSoftSkills,
  hardSkills,
  setHardSkills,
}) => {
  if (activeStep === 0) {
    return (
      <DatesPersonal
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
      />
    );
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
      />
    );
  }
};

export default DisplayComponent;
