import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles';

function BackButton() {
  return (
    <div className={styles.backButton}>
      <Link to="/">
        <h4>Back</h4>
      </Link>
    </div>
  )
}

export default BackButton;
