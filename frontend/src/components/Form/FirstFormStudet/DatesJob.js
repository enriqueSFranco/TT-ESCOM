import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./StylesStepper.module.css";

const DatesJob = ({ form, handleChange, interestJobs, setInterestJobs }) => {
  console.log(form);
  return (
    <div className={styles.containerPage}>
      <form>
      <h5>¿Como son tus metas Profesionales?</h5>
        <div className={styles.inputGroup}>
          <Autocomplete            
            id="t100_interest_job"
            name="t100_interest_job"
            value={form.t100_interest_job}
            onChange={(event, newValue) => {
              form.t100_interest_job=newValue;
            }}    
            freeSolo
            options={interestJobs.map((option) => option.c111_job)}
            renderInput={(params) => <TextField {...params} label="Puesto de Interés" />}
          />
        </div>


        <div className={styles.inputGroup}>
          <TextField
            label="¿Cuanto te gustaria ganar?"
            name="t100_target_salary"
            id="t100_target_salary"
            inputProps={{ min: 7000, max: 99999, type: "number" }}
            value={form.t100_target_salary}
            onChange={handleChange}
            sx={{ width: 400, maxWidth: "100%" }}
          />
        </div>

        <div className={styles.inputGroupCheckbox}>
          <div className={styles.text}>Preferirias un trabajo ??</div>
          <RadioGroup
            row
            id="t100_modalities"
            name="t100_modalities"
            value={form.t100_modalities}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Hibrodo"
              control={<Radio />}
              label="Hibrido"
            />
            <FormControlLabel
              value="Home office"
              control={<Radio />}
              label="Home office"
            />
            <FormControlLabel
              value="Presencial"
              control={<Radio />}
              label="Presencial"
            />
          </RadioGroup>
        </div>
        </form>
    </div>
  );
};

export default DatesJob;
