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

          {/* input para Ubicacion TODO: CAMBIAR EL HTMLFOR*/}
          <div>
            <Label htmlFor="t100_residence">
              <Input
                type="text"
                name="t100_residence"
                id="t100_residence"
                value={form.t100_residence}
                onChange={handleChange}
              />
              <Span content="¿Donde Vives?" />
            </Label>
    </div>
          
          {/* input para Telefono TODO: CAMBIAR EL HTMLFOR*/}
          <div>
            <Label htmlFor="t100_phonenumber">
              <Input
                type="tel"
                name="t100_phonenumber"
                id="t100_phonenumber"
                value={form.t100_phonenumber}
                onChange={handleChange}
              />
              <Span content="WhatsApp" />
            </Label>
        </div>
                            
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