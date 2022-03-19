import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = ({ type }) => {
  const FeedSkeleton = () => (
    <article className={`${styles.cardSk} container`}>
      <header className={`${styles.cardSkHeader} ${styles.placeholder}`}>
        <p className={``}></p>
      </header>
      <div className={styles.cardSkContent}>
        <p className={`${styles.lineClamp} ${styles.placeholder}`}></p>
        <p className={`${styles.timeWork} ${styles.placeholder}`}></p>
        <p className={`${styles.locationJob} ${styles.placeholder}`}></p>
        <p className={`${styles.publicationTimeJob} ${styles.placeholder}`}></p>
      </div>
  </article>
  );

  if (type === "feed") return Array.from({length: 10}, (_, i) => <FeedSkeleton key={i}/>);
}

export default Skeleton;
