// import FormUpdateDataStudent from "../components/Form/FormUpdateDataStudent";
import LoginStudent from "../components/Form/LoginStudent";
import styles from './PageLoginStudent.module.css';
import React from "react";


const PageLoginStudent = () => {

  return (
    <>
      <section className={styles.wrapper}>
        <LoginStudent />
        {/* <FormUpdateDataStudent /> */}
      </section>
    </>
  )
}

export default PageLoginStudent;
