import React from "react";
import { useFetch } from "hooks";
// import Accordion from "components/Accordion/Accordion";
import LayoutHome from "Layout/LayoutHome";
import ListCandidates from "components/Card/CardStudent/ListCandidates";
import styles from "./PageApplications.module.css";

function AllCandidates() {
  const { data } = useFetch(`${process.env.REACT_APP_URL_CANDIDATE}`)

  if (!data) return null

  let allTalents = data.length

  return (
    <LayoutHome>
      <section className={styles.wrapper}>
        <h1 className={styles.TitleAllTalents}>candidatos <span className={styles.allTalents}>{allTalents}</span></h1>
        {/* form */}
        <div className={styles.gridFluid}>
          <ListCandidates />
        </div>
      </section>
    </LayoutHome>
  );
}

export default AllCandidates;
