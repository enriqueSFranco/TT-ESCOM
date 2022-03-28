import React, { Component } from 'react';

import Label from "../../Input/Label"
import Span from "../../Input/Span"
import Input from "../../Input/Input"

import styles from "./Styles.module.css";



function DatesPersonal ({form,handleChange}) {
    return (
      <div className={styles.conJob}>
        <form>
        {/* input para Nombre*/}
          <div>
            <Label htmlFor="t100_name">
              <Input
                type="text"
                name="t100_name"
                id="t100_name"
                value={form.t100_name}
                onChange={handleChange}
              />
              <Span content="Tu Nombre" />
            </Label>        
          </div>

          {/* input para Ubicacion TODO: CAMBIAR EL HTMLFOR
          <div>
            <Label htmlFor="">
              <Input
                type="text"
              />
              <Span content="¿Donde Vives?" />
            </Label>
    </div>
          
          {/* input para Telefono TODO: CAMBIAR EL HTMLFOR
          <div>
            <Label htmlFor="">
              <Input
                type="tel"
              />
              <Span content="WhatsApp" />
            </Label>
    </div>*/}
                            
          {/* input para E-mail TODO: CAMBIAR EL HTMLFOR*/}
          <div>
            <Label htmlFor="t100_email">
              <Input
                type="email"
                name="t100_email"
                id="t100_email"
                value={form.t100_email}
                onChange={handleChange}
              />
              <Span content="E-mail" />
            </Label>
          </div>
                        
        </form>
      </div>
    );
  
}

export default DatesPersonal;