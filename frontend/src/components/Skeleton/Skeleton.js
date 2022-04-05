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


  const BusinessDetailsSkeleton = () => (
    <article className={styles.businessDetailsSkeleton}>
      
    </article>
  );

  const BusinessSkeleton = () => (
    <article className={styles.cardSkBusiness}>
      <div className={`${styles.cardSKLogo} ${styles.placeholder}`}></div>
      <div className={`${styles.cardSKBtnExpand} ${styles.placeholder}`}></div>
    </article>
  );

  if (type === "feed") return Array.from({length: 10}, (_, i) => <FeedSkeleton key={i}/>);
  if (type === "business") return Array.from({length: 10}, (_, i) => <BusinessSkeleton key={i} />);
  if (type === "businessDetails") return Array.from({length: 1}, (_, i) => <BusinessDetailsSkeleton key={i} />);

}

export default Skeleton;
