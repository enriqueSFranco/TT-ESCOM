import React,{ useState } from 'react';

import styles from "./Styles.module.css";

import Label from "../../Input/Label"
import TextField from '@mui/material/TextField';
import Span from "../../Input/Span"
import Input from "../../Input/Input"
import Autocomplete from '@mui/material/Autocomplete';



function DatesSoftSkill ({softSkills,setSoftSkills,AllResults}) {
  let soft = new Array();
  const [localsoftSkills, setLocalSoftSkill] = useState(softSkills);


  AllResults.map((dato)=>{
    if(dato['c116_type']=='s'){
      soft.push(dato);
    }
  }  
  );
  
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