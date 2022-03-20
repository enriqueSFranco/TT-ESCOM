import React, {useState} from 'react';
import styles from "./Objects.module.css";
import * as MdIcon from "react-icons/md";
import Modal from "./Modal"

const Objects = () => {
    const[modal1, modal2] = useState(false)
    
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
                        <a  onClick ={()=> modal2 (!modal1)}>aqui</a>
                </div>
                <Modal estado={modal1}
                cambiar={modal2}></Modal>
            </div>
        )
    }
export default Objects