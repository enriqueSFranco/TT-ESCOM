import React from "react";
import Accordion from "components/Accordion/Accordion";
import LayoutHome from "Layout/LayoutHome";
import ListCandidates from "components/Card/CardStudent/ListCandidates";
import styles from "./PageApplications.module.css";

function PageApplications() {

  return (
    <LayoutHome>
      <section className={styles.wrapper}>
        <h1>candidatos</h1>
        {/* form */}
        <article className={styles.gridFluid}>
          <ListCandidates />
        </article>
      </section>
    </LayoutHome>
  );
}

export default PageApplications;
