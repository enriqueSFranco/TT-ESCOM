import React from "react";
import styles from "./AboutMe.module.css";
import Objects from "./Objects";
import Interests from "./Interests";
import Languajes from "./Languajes";

const AboutMe = () => {
        return (
            <div className={styles.conteiner}>
                <div><Objects></Objects></div>
                <div><Interests></Interests></div>
                <div><Languajes></Languajes></div>
            </div>	
        )
    }
export default AboutMe