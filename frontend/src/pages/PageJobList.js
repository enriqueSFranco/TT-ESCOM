import JobList from "../components/Card/CardJobList";
import styles from "./PageJobList.module.css";

const PageJobList = () => {
  return (
    <article className={styles.container}>
      <JobList />
    </article>
  )
}

export default PageJobList