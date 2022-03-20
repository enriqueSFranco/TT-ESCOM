import React, {useState} from 'react';
import styles from "./Modal.module.css"

const Modal = ({estado,cambiar}) =>{
    return(
        <>
            {estado && 
            <div className={styles.modal}> 
            <h1 onClick={()=> cambiar (false)}>xsaxasxas</h1>
            </div>
            }
        </>
        

    );
}
export default Modal
