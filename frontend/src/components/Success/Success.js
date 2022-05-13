import React from 'react';
import { FcApproval } from 'react-icons/fc';
import styles from './Success.module.css';

const Success = ({msg = ""}) => {
  return (
    <div className={styles.success}>
      <p>{msg}</p>
      <FcApproval />
    </div>
  )
}

export default Success;