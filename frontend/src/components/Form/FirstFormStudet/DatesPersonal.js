import React, { Component } from 'react';

import Label from "../../Input/Label"
import Span from "../../Input/Span"
import Input from "../../Input/Input"

import styles from "./Styles.module.css";

export class DatesPersonal extends Component {
  render() {
    return (
      <div className={styles.conJob}>
        <form>
        {/* input para Nombre*/}
          <div>
            <Label htmlFor="name">
              <Input
                type="text"
              />
              <Span content="Tu Nombre" />
            </Label>        
          </div>

          {/* input para Ubicacion TODO: CAMBIAR EL HTMLFOR*/}
          <div>
            <Label htmlFor="name">
              <Input
                type="text"
              />
              <Span content="¿Donde Vives?" />
            </Label>
          </div>
          
          {/* input para Telefono TODO: CAMBIAR EL HTMLFOR*/}
          <div>
            <Label htmlFor="name">
              <Input
                type="tel"
              />
              <Span content="WhatsApp" />
            </Label>
          </div>
                            
          {/* input para E-mail TODO: CAMBIAR EL HTMLFOR*/}
          <div>
            <Label htmlFor="name">
              <Input
                type="email"
              />
              <Span content="E-mail" />
            </Label>
          </div>
                        
        </form>
      </div>
    );
  }
}

export default DatesPersonal;