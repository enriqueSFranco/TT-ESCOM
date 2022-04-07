import React, { useState }  from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import styles from "./Styles.module.css";

function DatesPersonal ({form,handleChange}) {
    const [checked, setChecked] = useState(false);

    const checkChanged = (state) => {
      setChecked(!checked);
      //setTravel(!checked);
      //console.log(!checked);
    };

    return (
      <div className={styles.containerPage}>
        <form>
          <div className={styles.inputGroup}>
              <TextField
                label="¿Donde te ubicas?"
                name="t100_residence"
                id="t100_residence"
                value={form.t100_residence}
                onChange={handleChange}
                sx={{ width: 400, maxWidth: "100%" }}
              />
          </div>
          
          <div className={styles.inputCheckbox}>
          Dispuesto a reubicarte?
            
          <Checkbox 
            value={form.t100_travel=checked}          
            checked={checked} 
            onChange={checkChanged}
            size='small'
          /> 
          </div>

        </form>
      </div>
    );
  
}

export default DatesPersonal;