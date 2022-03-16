import React from "react";
import styles from "./Objects.module.css";
import * as MdIcon from "react-icons/md";

const Objects = () => {
        return (
            <div className={styles.objects}>
                <div className={styles.objectspersonals}>
                    <h5>Objetivos Personales</h5>
                    <p>Deseo desarrollarme en </p>
                </div>

                <div className={styles.salary}>
                    <h5>Salario deseado</h5>
                    <MdIcon.MdOutlineAttachMoney size={25}/>
                    <span>12,000</span>      
                </div>

                <div className={styles.mode}>
                    <h5>Modalidad de trabajo</h5>
                        <span>Remoto</span>
                </div>
            </div>	
        )
    }
export default Objects