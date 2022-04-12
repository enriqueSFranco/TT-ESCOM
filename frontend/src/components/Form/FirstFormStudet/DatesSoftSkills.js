import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./StylesStepper.module.css";
// import Label from "../../Input/Label"
// import Span from "../../Input/Span"
// import Input from "../../Input/Input"

function DatesSoftSkill({ softSkills, setSoftSkills, AllResults }) {
  let soft = [];
  const [localsoftSkills, setLocalSoftSkill] = useState(softSkills);

  AllResults.map((dato) => {
    if (dato["c116_type"] === "s") {
      soft.push(dato);
    }
  });

  return (
    <div className={styles.containerPage}>
      <form>
        <div className={styles.select}>
          <Autocomplete
            sx={{ width: 400, maxWidth: "100%" }}
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
            defaultValue={[soft[13]]}
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

export default DatesSoftSkill;
