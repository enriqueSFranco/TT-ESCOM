import React,{ useState } from 'react';

import styles from "./Styles.module.css";

import Label from "../../Input/Label"
import TextField from '@mui/material/TextField';
import Span from "../../Input/Span"
import Input from "../../Input/Input"
import Autocomplete from '@mui/material/Autocomplete';



function DatesSkill ({hardSkills,setHardSkills,AllResults}) {
  let hard = new Array();
  const [localhardSkills, setLocalHardSkill] = useState(hardSkills);


  AllResults.map((dato)=>{
    if(dato['c116_type']=='H'){
      hard.push(dato); 
    }
  }  
  );
  
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