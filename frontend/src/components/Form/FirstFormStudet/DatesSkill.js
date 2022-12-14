import React, { useState } from "react";
import { useFetch } from "hooks";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./StylesStepper.module.css";

function DatesSkill({ softSkills, setSoftSkills,hardSkills, setHardSkills }) {
  const [localsoftSkills, setLocalSoftSkill] = useState(softSkills);
  const [localhardSkills, setLocalHardSkill] = useState(hardSkills);
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);

  let hard = [];
  let soft = [];

  data?.forEach((dato) => {
    if (dato["c116_type"] === "H") {
      hard.push(dato);
    }
    if (dato["c116_type"] === "s") {
      soft.push(dato);
    }
  });

  if (!data) return null

  return (
    <div className={styles.containerPage}>
      <h4 className={styles.formTitlePersonal}>Habilidades</h4>
      <form className={styles.form}>
      <h5 style={{fontSize: '.8em', color: '#6E6D7A', margin: '0'}}>Selecciona tus habilidades y conocimientos más importantes (max 10)</h5>
        <div className={styles.inputGroup}>
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
        <div className={styles.inputGroup}>
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
