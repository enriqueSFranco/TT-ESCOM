import React from "react";
import styles from "./Objects.module.css";
import * as MdIcon from "react-icons/md";

const Objects = () => {
        return (
            <div className={styles.objects}>
                <div className={styles.objectspersonals}>
                    <h5>Objetivos Personales</h5>
                    <p className={styles.tex}> Deseo desarrollarme en </p>
                </div>

                <div className={styles.salary}>
                    <h6>Salario deseado</h6>
                    <MdIcon.MdOutlineAttachMoney size={25}/>
                    <span className={styles.tex}>12,000</span>      
                </div>

                <div className={styles.mode}>
                    <h6>Modalidad de trabajo</h6>
                        <span className={styles.tex}>Remoto</span>
                </div>
            </div>	
        )
    }
export default Objects