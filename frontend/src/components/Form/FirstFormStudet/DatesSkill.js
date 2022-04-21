import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./StylesStepper.module.css";
// import Label from "../../Input/Label"
// import Span from "../../Input/Span"
// import Input from "../../Input/Input"

function DatesSkill({ hardSkills, setHardSkills, AllResults }) {
  let hard = [];
  const [localhardSkills, setLocalHardSkill] = useState(hardSkills);

  AllResults.map((dato) => {
    if (dato["c116_type"] == "H") {
      hard.push(dato);
    }
  });

  return (
    <div className={styles.containerPage}>
      <form>
        <div className={styles.select}>
          <Autocomplete
            sx={{ width: 400, maxWidth: "100%" }}
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
      </form>
    </div>
  );
}

export default DatesSkill;
