import React from "react";
import styles from "./PageApplications.module.css";
import Accordion from "components/Accordion/Accordion";

function PageApplications() {

  return (
    <section className={styles.wrapper}>
      <Accordion />
    </section>
  );
}

export default PageApplications;
