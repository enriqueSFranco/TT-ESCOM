import React from 'react';
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box';

import styles from './Skeleton.module.css';

const CustomSkeleton = ({ type }) => {
  
  const FeedSkeleton = () => (
    <Box sx={{ width: 500, height: 250}}>
      <Skeleton variant="rectangular" width={500} height={118} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" width={130} height={40} />
    </Box>
  );

  const BusinessDetailsSkeleton = () => (
    <article className={styles.businessDetailsSkeleton}>
      <div className={`container ${styles.header}`}>
        <div className={`${styles.nameSk} ${styles.placeholder}`}></div>
        <div className={styles.flex}>
          <div className={styles.jobTags}>
            <ul>
              <li className={`${styles.tagsSk} ${styles.placeholder}`}></li>
              <li className={`${styles.tagsSk} ${styles.placeholder}`}></li>
              <li className={`${styles.tagsSk} ${styles.placeholder}`}></li>
            </ul>
          </div>
            <div className={`${styles.btnApply} ${styles.placeholder}`}></div>
        </div>
      </div>
      <div className={`container ${styles.bodySk}`}>
        <p className={`${styles.pSk} ${styles.placeholder}`}></p>
        <p className={`${styles.pSk} ${styles.placeholder}`}></p>
        <div className={`${styles.descriptionSk} ${styles.placeholder}`}></div>
        <div className={`${styles.profitSk} ${styles.placeholder}`}></div>
        <div className={`${styles.applySk} ${styles.placeholder}`}></div>
        <div className={`${styles.expSk} ${styles.placeholder}`}></div>
        <p className={`${styles.pSk} ${styles.placeholder}`}></p>
        <p className={`${styles.pSk} ${styles.placeholder}`}></p>
        <div className={`${styles.languageSk} ${styles.placeholder}`}></div>
      </div>
    </article>
  );

  const BusinessSkeleton = () => (
    <Box sx={{ width: 200, height: 160}}>
      <Skeleton animation="wave" variant="rectangular" width={200} height={160} />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Skeleton animation="wave" variant="rectangular" width={130} height={30} />
      </div>
    </Box>
  );

  if (type === "feed") return Array.from({length: 10}, (_, i) => <FeedSkeleton key={i}/>);
  if (type === "business") return Array.from({length: 10}, (_, i) => <BusinessSkeleton key={i} />);
  if (type === "businessDetails") return Array.from({length: 1}, (_, i) => <BusinessDetailsSkeleton key={i} />);

}

export default CustomSkeleton;
