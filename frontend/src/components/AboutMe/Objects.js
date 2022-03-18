import React from "react";
import styles from "./Objects.module.css";
import * as MdIcon from "react-icons/md";

const Objects = () => {
        return (
            <div className={styles.objects}>
                <div className={styles.objectspersonals}>
                    <h4>Objetivos Personales</h4>
                    <p className={styles.tex}> Deseo desarrollarme en </p>
                </div>

                <div className={styles.salary}>
                    <h4>Salario deseado</h4>
                    <MdIcon.MdOutlineAttachMoney size={25}/>
                    <span className={styles.tex}>12,000</span>      
                </div>

                <div className={styles.mode}>
                    <h4>Modalidad de trabajo</h4>
                        <span className={styles.tex}>Remoto</span>
                </div>
            </div>	
        )
    }
export default Objects