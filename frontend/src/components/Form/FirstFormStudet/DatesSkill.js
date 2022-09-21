import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./StylesStepper.module.css";

function DatesSkill({ softSkills, setSoftSkills,hardSkills, setHardSkills, AllResults }) {
  const [localsoftSkills, setLocalSoftSkill] = useState(softSkills);
  const [localhardSkills, setLocalHardSkill] = useState(hardSkills);

  let hard = [];
  let soft = [];

  AllResults.forEach((dato) => {
    if (dato["c116_type"] === "H") {
      hard.push(dato);
    }
    if (dato["c116_type"] === "s") {
      soft.push(dato);
    }
  });

  return (
    <div className={styles.containerPage}>
      <h4 className={styles.formTitleSkills}>Para Finalizar...</h4>
      <form className={styles.formSkills}>
      <h5>Selecciona tus habilidades y conocimientos más importantes (max 10)</h5>
        <div className={styles.select}>
          <Autocomplete
            size="small"
            sx={{ width: 600, maxWidth: "100%" }}
            name="hardskills"
            value={localhardSkills}
            onChange={(event, newValue) => {
              setLocalHardSkill(newValue);
              setHardSkills(newValue);
            }}
            multiple
            id="hardskills"
            options={hard}
            getOptionLabel={(option) => option.c116_description}
            defaultValue={[hard[13]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Hard skills"
                placeholder="Selecciona "
              />
            )}
          />
        </div>
        <div className={styles.select}>
          <Autocomplete
            size="small"
            sx={{ width: 600, maxWidth: "100%" }}
            name="softskills"
            value={localsoftSkills}
            onChange={(event, newValue) => {
              setLocalSoftSkill(newValue);
              setSoftSkills(newValue);
            }}
            multiple
            id="softskills"
            options={soft}
            getOptionLabel={(option) => option.c116_description}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Soft skills"
                placeholder="Selecciona "
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default DatesSkill;
