import React, { Component } from 'react';
import styles from "./Styles.module.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckboxComponent from "../../Input/Checkbox"
import { helpHttp } from "../../../utils/helpHttp";


const DatesJob = ({form, handleChange, AllResults}) =>  {
  let soft = new Array();
  let hard = new Array();
  


  AllResults.map((dato)=>{
    if(dato['c116_type']=='H'){
      hard.push(dato); 
    }else{
      soft.push(dato);
    }
  }  
  );
  console.log(hard);
  console.log(soft);

  function get(){
    //array.push(document.getElementById('data').value);
    console.log(document.getElementById('data').value); //WORKS
   // console.log(array)
  }


    return (
      <div>
          <form>
            {/* input para la eleccion de trabjo
            TODO: cambiar el HTMLFOR*/}
            <div className={styles.conCheckbox}>
              <div className={styles.text}><h6>Preferirias un trabajo ??</h6></div>
              <div className={styles.checkbox}>
                <CheckboxComponent htmlFor="" label="Hibrido"/>
                <CheckboxComponent htmlFor="" label="Presencial"/>
                <CheckboxComponent htmlFor="" label="Home Office"/>
              </div>
            </div>
              
            {/* input para la eleccion de trabjo TODO: cambiar el HTMLFOR*/}
            <div className={styles.softskills}>
              <div className={styles.text}><h6>Escoge tus Skills (max 10)</h6></div>
              <form onSubmit={get}>
                <div>
                  {/*
<select
                    className={styles.select}
                    name="t100_personal_objectives"
                    onChange={handleChange} 
                    id="t100_personal_objectives"
                    value={form.t100_personal_objectives}
                  >
                  
                    <option value="" disabled>
                    Hard Skills
                    </option>
                    {hard.map((option) =>
                    (<option key={option['c116_description']} value={option['c116_id_skill']} >{option['c116_description']}</option>)
                    )}
                    </select>*/}
                    <div className={styles.select}><input type="text" list="data-list" id="data" onChange={handleChange}/>

                      <datalist id="data-list">
                      {hard.map((option) =>
                    (<option value={option['c116_id_skill']}>{option['c116_description']}</option>)
                    )}
                      </datalist>
                      <a onClick={()=>get()} >add</a></div>

                  </div>
                </form>
            </div>

            {/* input para la eleccion de trabjo TODO: cambiar el HTMLFOR*/}
            <div className={styles.softskills}>
              <div className={styles.select}>
                  <select
                    className={styles.select}
                    name="t100_personal_objectives"
                    id="t100_personal_objectives"
                  >
                    <option value="" disabled>
                      Soft Skills
                    </option>
                    {soft.map((option) =>
                (<option key={option['c116_description']} value={option['c116_id_skill']}>{option['c116_description']}</option>)
              )}
                  </select>
              </div>
            </div>
          </form>
      </div>
    );
  //}
}

export default DatesJob;